# Local Testing Guide

## ⚠️ Important: API Routes Don't Work with `npm run dev`

The visit counter API route (`/api/visit-count.ts`) **only works** when:
1. Deployed to Vercel (production/preview)
2. Running with Vercel CLI locally

Regular `npm run dev` (Vite) cannot execute serverless functions.

---

## 🚀 Option 1: Deploy to Vercel (Recommended)

This is the fastest way to see it working:

### Step 1: Add Environment Variable to Vercel

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add:
   - Name: `REDIS_URL`
   - Value: `redis://default:kYqFF3ptBIOwSrm9ZE9k5C60kE55DqQT@redis-13749.c55.eu-central-1-1.ec2.cloud.redislabs.com:13749`
   - Select: All environments
5. Save

### Step 2: Deploy

```bash
git add .
git commit -m "Add Redis visit counter"
git push
```

**Done!** Visit your deployed site and the counter will work.

---

## 🔧 Option 2: Test Locally with Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Link Your Project

```bash
vercel link
```

Follow the prompts to link to your existing project.

### Step 4: Pull Environment Variables

```bash
vercel env pull .env.local
```

This downloads your production environment variables.

### Step 5: Run with Vercel Dev

```bash
vercel dev
```

This starts a local server that can execute API routes.

**Note:** Vercel dev will ask you to build the project. Answer the prompts:
- Build command: `npm run build`
- Output directory: `dist`
- Development command: `npm run dev`

---

## 🐛 Debugging

### Check if API works:

After deploying or running `vercel dev`:

```bash
curl http://localhost:3000/api/visit-count
```

Should return:
```json
{"count":0,"success":true}
```

### Check browser console:

Open DevTools (F12) → Console tab

You should see:
```
Footer render: { visitCount: 1, isLoading: false, error: null }
```

---

## ✅ Quick Test Checklist

- [ ] Redis URL added to Vercel environment variables
- [ ] Code pushed to Git
- [ ] Vercel deployed successfully
- [ ] Visit deployed site
- [ ] Check footer for counter
- [ ] Check browser console for debug logs

---

## 💡 Why This Happens

- **Vite** (`npm run dev`) is a frontend build tool
- **API routes** are serverless functions that need a backend runtime
- **Vercel** provides this runtime in production and via their CLI
- **Solution**: Deploy to Vercel or use `vercel dev` locally

---

## 🎯 Recommended Workflow

1. **Development**: Use `npm run dev` for frontend changes
2. **API Testing**: Deploy to Vercel preview (automatic on push)
3. **Production**: Merge to main branch

The counter will work perfectly in production! 🚀
