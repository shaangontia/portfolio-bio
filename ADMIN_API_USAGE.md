# Admin API Usage Guide

## 🔐 Setup Admin Secret

### Step 1: Add Admin Secret to Vercel

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add new variable:
   - **Name:** `ADMIN_SECRET`
   - **Value:** Choose a strong secret (e.g., `my-super-secret-admin-key-12345`)
   - **Environment:** All (Production, Preview, Development)
3. Save and redeploy

---

## 🛠️ Admin API Endpoints

### 1. View All Redis Keys

**Endpoint:** `GET /api/admin/get-all-keys`

**Usage:**
```bash
curl -X GET https://yoursite.vercel.app/api/admin/get-all-keys \
  -H "Authorization: Bearer your-admin-secret"
```

**Response:**
```json
{
  "success": true,
  "keys": 2,
  "data": {
    "portfolio_visit_count": "42",
    "rate_limit:192.168.1.1": "3"
  }
}
```

---

### 2. Reset Counter to 0

**Endpoint:** `POST /api/admin/reset-counter`

**Usage:**
```bash
curl -X POST https://yoursite.vercel.app/api/admin/reset-counter \
  -H "Authorization: Bearer your-admin-secret" \
  -H "Content-Type: application/json"
```

**Response:**
```json
{
  "success": true,
  "message": "Counter reset to 0",
  "count": 0
}
```

---

### 3. Set Counter to Specific Value

**Endpoint:** `POST /api/admin/reset-counter`

**Usage:**
```bash
curl -X POST https://yoursite.vercel.app/api/admin/reset-counter \
  -H "Authorization: Bearer your-admin-secret" \
  -H "Content-Type: application/json" \
  -d '{"value": 1000}'
```

**Response:**
```json
{
  "success": true,
  "message": "Counter set to 1000",
  "count": 1000
}
```

---

## 🌐 Using from Browser Console

### View Current Data:
```javascript
fetch('https://yoursite.vercel.app/api/admin/get-all-keys', {
  headers: {
    'Authorization': 'Bearer your-admin-secret'
  }
})
.then(r => r.json())
.then(data => console.log(data));
```

### Reset Counter:
```javascript
fetch('https://yoursite.vercel.app/api/admin/reset-counter', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your-admin-secret',
    'Content-Type': 'application/json'
  }
})
.then(r => r.json())
.then(data => console.log(data));
```

### Set Counter to 500:
```javascript
fetch('https://yoursite.vercel.app/api/admin/reset-counter', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your-admin-secret',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ value: 500 })
})
.then(r => r.json())
.then(data => console.log(data));
```

---

## 🎯 Option 3: Using Redis CLI

If you have Redis CLI installed locally:

```bash
# Connect to your Redis instance
redis-cli -h redis-13749.c55.eu-central-1-1.ec2.cloud.redislabs.com \
  -p 13749 \
  -a kYqFF3ptBIOwSrm9ZE9k5C60kE55DqQT

# View current count
GET portfolio_visit_count

# Set to specific value
SET portfolio_visit_count 100

# Reset to 0
SET portfolio_visit_count 0

# View all keys
KEYS *

# Delete a key
DEL portfolio_visit_count
```

---

## 🔒 Security Notes

1. **Never commit** your `ADMIN_SECRET` to Git
2. **Use strong secrets** in production (at least 32 characters)
3. **Keep your Redis password** secure
4. Admin endpoints are **protected** by the secret
5. Only share the secret with trusted team members

---

## 📊 Quick Actions

### Reset Counter for Testing:
```bash
curl -X POST https://yoursite.vercel.app/api/admin/reset-counter \
  -H "Authorization: Bearer your-secret"
```

### Check Current Value:
```bash
curl https://yoursite.vercel.app/api/visit-count
```

### Set to High Number for Demo:
```bash
curl -X POST https://yoursite.vercel.app/api/admin/reset-counter \
  -H "Authorization: Bearer your-secret" \
  -H "Content-Type: application/json" \
  -d '{"value": 10000}'
```

---

## 🐛 Troubleshooting

### 401 Unauthorized Error:
- Check your `ADMIN_SECRET` is set in Vercel
- Verify you're using the correct secret in the Authorization header
- Make sure format is: `Bearer your-secret` (with space)

### 500 Internal Server Error:
- Check Vercel function logs
- Verify `REDIS_URL` is set correctly
- Test Redis connection separately

---

## ✅ Deployment Checklist

- [ ] Add `ADMIN_SECRET` to Vercel environment variables
- [ ] Deploy the new admin endpoints
- [ ] Test with curl or browser console
- [ ] Save your admin secret securely (password manager)
- [ ] Document the secret location for your team

---

**Remember:** These admin endpoints are powerful. Keep your `ADMIN_SECRET` secure! 🔐
