import type { VercelRequest, VercelResponse } from '@vercel/node';
import Redis from 'ioredis';

const VISIT_KEY = 'portfolio_visit_count';
const RATE_LIMIT_KEY = 'rate_limit:';
const RATE_LIMIT_WINDOW = 60;
const MAX_REQUESTS_PER_WINDOW = 10;

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

async function checkRateLimit(ip: string): Promise<boolean> {
    const client = getRedisClient();
    const key = `${RATE_LIMIT_KEY}${ip}`;
    const requests = await client.incr(key);
    
    if (requests === 1) {
        await client.expire(key, RATE_LIMIT_WINDOW);
    }
    
    return requests <= MAX_REQUESTS_PER_WINDOW;
}

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const client = getRedisClient();
        const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';
        const clientIp = Array.isArray(ip) ? ip[0] : ip.split(',')[0];

        const isAllowed = await checkRateLimit(clientIp);
        if (!isAllowed) {
            return res.status(429).json({ 
                error: 'Too many requests',
                message: 'Rate limit exceeded. Please try again later.'
            });
        }

        const action = req.query.action as string;

        if (action === 'increment') {
            const newCount = await client.incr(VISIT_KEY);
            return res.status(200).json({ 
                count: newCount,
                success: true 
            });
        }

        const countStr = await client.get(VISIT_KEY);
        const count = countStr ? parseInt(countStr, 10) : 0;
        return res.status(200).json({ 
            count,
            success: true 
        });

    } catch (error) {
        console.error('Error in visit-count API:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            message: 'Failed to process request',
            success: false
        });
    }
}
