import type { VercelRequest, VercelResponse } from '@vercel/node';
import Redis from 'ioredis';

const VISIT_KEY = 'portfolio_visit_count';
const ADMIN_SECRET = process.env.ADMIN_SECRET || 'change-me-in-production';

let redis: Redis | null = null;

function getRedisClient(): Redis {
    if (!redis) {
        const redisUrl = process.env.REDIS_URL;
        if (!redisUrl) {
            throw new Error('REDIS_URL environment variable is not set');
        }
        redis = new Redis(redisUrl, {
            maxRetriesPerRequest: 3,
            retryStrategy(times) {
                const delay = Math.min(times * 50, 2000);
                return delay;
            },
        });
    }
    return redis;
}

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Check admin secret
        const authHeader = req.headers.authorization;
        const providedSecret = authHeader?.replace('Bearer ', '');

        if (providedSecret !== ADMIN_SECRET) {
            return res.status(401).json({ 
                error: 'Unauthorized',
                message: 'Invalid admin secret'
            });
        }

        const client = getRedisClient();
        const { value } = req.body;

        if (value !== undefined) {
            // Set to specific value
            await client.set(VISIT_KEY, value.toString());
            return res.status(200).json({ 
                success: true,
                message: `Counter set to ${value}`,
                count: value
            });
        } else {
            // Reset to 0
            await client.set(VISIT_KEY, '0');
            return res.status(200).json({ 
                success: true,
                message: 'Counter reset to 0',
                count: 0
            });
        }

    } catch (error) {
        console.error('Error in reset-counter API:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            message: 'Failed to reset counter',
            success: false
        });
    }
}
