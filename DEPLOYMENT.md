# Vercel Deployment Guide for visittirupati.online

This guide will help you deploy your Explore Tirupati app to Vercel and connect your domain `visittirupati.online`.

---

## Prerequisites

1. ✅ GitHub account
2. ✅ Domain purchased: `visittirupati.online`
3. ✅ MongoDB Atlas account (free cluster)

---

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **+** → **New repository**
3. Name: `visittirupati` or `explore-tirupati`
4. Select **Public** (or Private if you prefer)
5. Click **Create repository**
6. **DO NOT** initialize with README (we'll push existing code)

---

## Step 2: Push Code to GitHub

Open terminal in your project folder and run:

```bash
# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Explore Tirupati app"

# Add GitHub remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 3: Set Up MongoDB Atlas (Free)

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for free account
3. Create free cluster:
   - Select **Free Tier** (M0)
   - Provider: **AWS**
   - Region: **Mumbai** (ap-south-1) - closest to Tirupati
4. Create database user:
   - Username: `tirupatiadmin`
   - Password: `Tirupati@123` (remember this!)
5. **Network Access**: Click "Network Access" → Add IP → Allow from anywhere (0.0.0.0/0)
6. **Get Connection String**:
   - Click "Database" → "Connect" → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your password
   - Format: `mongodb+srv://tirupatiadmin:Tirupati@123@cluster0.xxxxx.mongodb.net/`

---

## Step 4: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. **Environment Variables** - Add these:
   ```
   MONGODB_URI = mongodb+srv://tirupatiadmin:Tirupati@123@cluster0.xxxxx.mongodb.net/
   CLOUDINARY_CLOUD_NAME = your_cloud_name
   CLOUDINARY_API_KEY = your_api_key
   CLOUDINARY_API_SECRET = your_api_secret
   ADMIN_PASSWORD = tirupati123
   ```
5. Click **Deploy**

---

## Step 5: Connect Custom Domain

1. In Vercel dashboard → your project → **Settings** → **Domains**
2. Add `visittirupati.online`
3. Vercel will give you DNS records to add:

   **Option A (If using same registrar):**
   - Add CNAME: `visittirupati.online` → `cname.vercel-dns.com`

   **Option B (Use Vercel nameservers):**
   - Get nameservers from Vercel
   - Update at your domain registrar

4. Wait 5-10 minutes for SSL to generate (automatic)
5. Visit `https://visittirupati.online` ✅

---

## Step 6: Verify Everything Works

| Check | URL |
|-------|-----|
| Home page | https://visittirupati.online |
| Places | https://visittirupati.online/places |
| Blog | https://visittirupati.online/blog |
| FAQ | https://visittirupati.online/faq |
| Health | https://visittirupati.online/api/health |
| Sitemap | https://visittirupati.online/sitemap.xml |
| Admin | https://visittirupati.online/admin |

---

## Step 7: Submit to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `visittirupati.online`
3. Verify via DNS or HTML file
4. Submit sitemap: `https://visittirupati.online/sitemap.xml`

---

## Troubleshooting

### Build Fails
- Check environment variables in Vercel
- Ensure MongoDB Atlas network access allows all IPs

### Images Not Loading
- Check Cloudinary API keys are correct
- Verify CLOUDINARY_CLOUD_NAME is set

### Domain Not Working
- Wait 10-15 minutes for DNS propagation
- Check DNS settings at domain registrar

### 500 Error on Pages
- Check `/api/health` - should show database connected
- Verify MONGODB_URI is correct

---

## Admin Panel Access

- URL: `https://visittirupati.online/admin`
- Password: `tirupati123` (or whatever you set in ADMIN_PASSWORD)

---

## Next Steps After Launch

1. **Add more content** - More places and blogs for SEO
2. **Google Analytics** - Track visitors
3. **Google AdSense** - Apply for ads (your ad slots are ready!)
4. **Social Media** - Share on Facebook, Twitter, WhatsApp

---

## Need Help?

If you face any issues during deployment, share:
- Error messages (if any)
- Which step you're stuck on
- Screenshot of Vercel settings