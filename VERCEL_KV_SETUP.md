# Redis Cloud Visit Counter Setup Guide

This guide will help you set up the production-ready visit counter using Redis Cloud (free tier).

## 📋 Prerequisites

- Vercel account (for deployment)
- Redis Cloud account (free tier works) - Already set up ✅
- 3 minutes of your time

## 🚀 Step-by-Step Setup

### Step 1: Install Redis Package ✅ (Already Done)

The `ioredis` package has been installed:

```bash
npm install ioredis
```

### Step 2: Redis Cloud Database ✅ (Already Created)

Your Redis database is already set up:
- **Host:** redis-13749.c55.eu-central-1-1.ec2.cloud.redislabs.com
- **Port:** 13749
- **Region:** EU Central (Frankfurt)
- **Plan:** Free 30MB

### Step 3: Add Environment Variable to Vercel

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your portfolio project
3. Click on **Settings** tab
4. Click **Environment Variables** in the left sidebar
5. Add a new variable:
   - **Name:** `REDIS_URL`
   - **Value:** `redis://default:kYqFF3ptBIOwSrm9ZE9k5C60kE55DqQT@redis-13749.c55.eu-central-1-1.ec2.cloud.redislabs.com:13749`
   - **Environment:** Select all (Production, Preview, Development)
6. Click **Save**

### Step 4: Deploy Your Changes ✅

```bash
git add .
git commit -m "Add Vercel KV visit counter"
git push
```

Vercel will automatically deploy your changes.

## ✅ Verify It's Working

1. Visit your deployed site
2. Check the footer - you should see "Total visits: 1"
3. Refresh after 30 minutes - the count should increment
4. Open in a different browser - count increments

## 🔍 Testing Locally (Optional)

To test locally, you need to set up environment variables:

1. Go to your Vercel project settings
2. Navigate to **Storage** → Your KV database
3. Copy the `.env.local` tab content
4. Create a `.env.local` file in your project root
5. Paste the environment variables
6. Run `npm run dev`

**Note:** Add `.env.local` to your `.gitignore` (it should already be there)

## 📊 Features Included

### ✨ What's Implemented

- **Global Visit Counter**: Tracks all visits across all users
- **Session Management**: Only counts unique visits (30-minute timeout)
- **Rate Limiting**: Prevents abuse (10 requests per minute per IP)
- **Error Handling**: Graceful fallbacks if API fails
- **CORS Support**: Works from any domain
- **Production Ready**: Optimized for performance

### 🎯 API Endpoints

#### Get Current Count
```
GET /api/visit-count
```

#### Increment Count
```
GET /api/visit-count?action=increment
```

## 🔧 Configuration

### Adjust Session Timeout

Edit `/src/hooks/useVisitCounter.ts`:

```typescript
const VISIT_TIMEOUT = 30 * 60 * 1000; // 30 minutes in milliseconds
```

Change to your preferred duration:
- 1 hour: `60 * 60 * 1000`
- 1 day: `24 * 60 * 60 * 1000`

### Adjust Rate Limiting

Edit `/api/visit-count.ts`:

```typescript
const RATE_LIMIT_WINDOW = 60; // seconds
const MAX_REQUESTS_PER_WINDOW = 10; // requests
```

## 📈 Monitoring

### View Visit Count in Vercel KV

1. Go to Vercel Dashboard → Storage → Your KV database
2. Click **Data Browser**
3. Look for key: `portfolio_visit_count`
4. You'll see the current count

### Reset Counter (if needed)

In the Vercel KV Data Browser:
1. Find `portfolio_visit_count`
2. Click **Delete** or **Edit** to reset

## 🎨 Customization

### Change Counter Display

Edit `/src/components/Footer.tsx` to customize:
- Icon (currently using `VisibilityIcon`)
- Text ("Total visits")
- Styling (colors, spacing)

### Add More Analytics

You can extend the API to track:
- Unique visitors
- Page views per page
- Visit timestamps
- Geographic data (using Vercel's geo headers)

## 🐛 Troubleshooting

### Counter Not Showing

1. Check browser console for errors
2. Verify API route is accessible: `https://yoursite.com/api/visit-count`
3. Check Vercel deployment logs
4. Ensure KV database is connected to your project

### Counter Not Incrementing

1. Wait 30 minutes between visits (session timeout)
2. Clear localStorage: `localStorage.clear()`
3. Try in incognito/private browsing mode

### Rate Limit Errors

If you see 429 errors:
- Wait 1 minute
- Adjust rate limits in `/api/visit-count.ts`

## 💰 Pricing

### Vercel KV Free Tier
- **30,000 commands/month** (more than enough for most portfolios)
- **256 MB storage**
- **Daily backups**

For a typical portfolio:
- 1,000 visits/month = ~2,000 commands
- Well within free tier limits

### Upgrade If Needed
- Pro: $20/month for 500,000 commands
- Only needed for high-traffic sites

## 🔐 Security

### What's Protected
- ✅ Rate limiting per IP
- ✅ CORS configured
- ✅ Input validation
- ✅ Error handling
- ✅ Environment variables secured

### Best Practices
- Never commit `.env.local`
- Use Vercel's environment variables
- Monitor usage in Vercel dashboard

## 📚 Additional Resources

- [Vercel KV Documentation](https://vercel.com/docs/storage/vercel-kv)
- [Redis Commands](https://redis.io/commands/)
- [Vercel API Routes](https://vercel.com/docs/functions/serverless-functions)

## 🎉 You're Done!

Your portfolio now has a production-ready visit counter powered by Vercel KV. No database hosting needed!

---

**Need Help?** Check the Vercel documentation or open an issue in your repository.
