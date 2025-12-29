# 🚀 Quick Start: Redis Cloud Visit Counter

## ⚡ 2-Minute Setup

### 1️⃣ Install Package ✅ (Already Done)
```bash
npm install ioredis
```

### 2️⃣ Add Environment Variable to Vercel
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - Name: `REDIS_URL`
   - Value: `redis://default:kYqFF3ptBIOwSrm9ZE9k5C60kE55DqQT@redis-13749.c55.eu-central-1-1.ec2.cloud.redislabs.com:13749`
   - Select all environments
5. Click **Save**

### 3️⃣ Deploy
```bash
git add .
git commit -m "Add Vercel KV visit counter"
git push
```

## ✅ That's It!

Visit your site and check the footer. You should see:
```
👁️ Total visits: 1
```

## � Full Documentation

See [VERCEL_KV_SETUP.md](./VERCEL_KV_SETUP.md) (now updated for Redis Cloud) for:
- Detailed setup instructions
- Local development setup
- Troubleshooting
- Customization options
- Monitoring and analytics

## 🎯 What You Get

- ✅ Production-ready visit counter
- ✅ Global tracking across all users
- ✅ Rate limiting (anti-abuse)
- ✅ 30-minute session timeout
- ✅ Free tier: 30MB storage (Redis Cloud)
- ✅ Zero database hosting costs
- ✅ Automatic backups by Vercel

## 🔗 Useful Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Redis Cloud Dashboard](https://app.redislabs.com/)
- [ioredis Documentation](https://github.com/redis/ioredis)
- [Your API Endpoint](https://yoursite.com/api/visit-count)
