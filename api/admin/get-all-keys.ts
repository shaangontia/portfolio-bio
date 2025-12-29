import type { VercelRequest, VercelResponse } from '@vercel/node';
import Redis from 'ioredis';

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
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET') {
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
        
        // Get all keys
        const keys = await client.keys('*');
        
        // Get values for each key
        const data: Record<string, string | null> = {};
        for (const key of keys) {
            const value = await client.get(key);
            data[key] = value;
        }

        return res.status(200).json({ 
            success: true,
            keys: keys.length,
            data
        });

    } catch (error) {
        console.error('Error in get-all-keys API:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            message: 'Failed to fetch keys',
            success: false
        });
    }
}
