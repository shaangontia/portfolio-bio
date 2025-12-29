# 🎛️ Admin Panel Guide

## What is it?

A floating admin panel on your website that lets you manage the visit counter directly from the browser.

## 🎯 How to Use

### Step 1: Find the Admin Button

After deploying, visit your website and look for a small **"Admin"** button in the **bottom-right corner**.

### Step 2: Open the Panel

Click the **"Admin"** button to open the admin panel.

### Step 3: Enter Admin Secret

Enter your admin secret: `my-super-secret-admin-key-12345`

(Or whatever you set as `ADMIN_SECRET` in Vercel environment variables)

### Step 4: Use the Controls

The panel has several buttons:

#### **Set to 1200** (Main Button)
- Click this to set the counter to exactly 1200
- Perfect for your use case!

#### **Custom Value**
- Enter any number in the text field
- Click "Set" to update to that value
- Example: Enter 5000 and click "Set"

#### **Reset to 0**
- Resets the counter back to 0
- Useful for testing

#### **View Data**
- Shows all Redis keys and their values
- Useful for debugging

### Step 5: Wait for Reload

After clicking any button:
1. You'll see a success message
2. The page will automatically reload in 1.5 seconds
3. The footer will show the new count

---

## 🔒 Security

- The panel is visible to everyone BUT...
- All actions require the **admin secret**
- Without the correct secret, nothing will work
- Keep your `ADMIN_SECRET` private!

---

## 🎨 Features

- ✅ **Floating button** - Doesn't interfere with your design
- ✅ **Collapsible** - Click "Close" to hide the panel
- ✅ **Styled to match** - Uses your portfolio's color scheme
- ✅ **Secure** - Protected by admin secret
- ✅ **Auto-reload** - Updates the page after changes
- ✅ **Error handling** - Shows clear error messages

---

## 🚀 Quick Actions

### Set to 1200 (Your Request):
1. Click "Admin" button (bottom-right)
2. Enter admin secret
3. Click "Set to 1200"
4. Done! ✅

### Set to Custom Value:
1. Click "Admin" button
2. Enter admin secret
3. Type your number (e.g., 5000)
4. Click "Set"

### Reset for Testing:
1. Click "Admin" button
2. Enter admin secret
3. Click "Reset to 0"

---

## 🐛 Troubleshooting

### "Please enter admin secret"
- You forgot to enter the secret in the password field

### "Invalid admin secret" (401 error)
- Check that `ADMIN_SECRET` is set in Vercel
- Make sure you're using the exact same secret
- Redeploy after adding the environment variable

### "Error connecting to API"
- Make sure you're on the deployed site (not localhost)
- Check that the admin API endpoints are deployed
- Verify your internet connection

### Button not showing
- Check bottom-right corner of the page
- Scroll to the bottom if needed
- Try refreshing the page

---

## 📝 Environment Setup

Make sure you have this in Vercel:

**Environment Variables:**
- `REDIS_URL` - Your Redis connection string ✅
- `ADMIN_SECRET` - Your admin secret (e.g., `my-super-secret-admin-key-12345`)

---

## 🎯 Example Workflow

**Scenario:** You want to show 1200 visits on your portfolio

1. Deploy your site with the admin panel
2. Visit your deployed site
3. Click the small "Admin" button (bottom-right)
4. Enter: `my-super-secret-admin-key-12345`
5. Click: **"Set to 1200"**
6. Wait for reload
7. Footer now shows: "Total visits: 1,200" 🎉

---

## 💡 Pro Tips

- **Bookmark the secret**: Save it in your password manager
- **Test first**: Try "Reset to 0" to verify it works
- **Custom values**: Use the custom field for any number
- **View data**: Check what's in Redis with "View Data"
- **Hide when done**: Click "Close" to hide the panel

---

## 🔐 Production Best Practices

1. **Change the default secret** to something stronger
2. **Don't share** your admin secret publicly
3. **Use a password manager** to store it
4. **Consider removing** the admin panel after setting your desired count
5. **Monitor usage** - Check Vercel logs if needed

---

## ✅ You're All Set!

The admin panel is now part of your website. Just deploy and use it! 🚀

**Remember:** The panel works on the deployed site, not on `localhost` (unless using Vercel dev).
