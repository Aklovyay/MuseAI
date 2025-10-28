# 🚀 Deploying MuseAI

## ⚠️ Important: Split Deployment Required

MuseAI has two parts that need **separate hosting**:

```
Frontend (React) → Vercel ✅
Backend (Express) → Railway/Render/Heroku ⚠️
```

**Why?** Vercel doesn't support persistent Node.js servers (Express with `app.listen()`).

---

## 🎨 Deploy Frontend to Vercel

### ✅ Configuration Already Added

I've added:
- `vercel.json` - Tells Vercel where to find your React app
- `package.json` - Root-level build commands

### 📝 Steps:

1. **Push these new files to GitHub:**
```bash
git add vercel.json package.json DEPLOYMENT.md
git commit -m "Add Vercel deployment configuration"
git push
```

2. **Redeploy on Vercel:**
   - Go to your Vercel dashboard
   - Find your MuseAI project
   - Click "Redeploy" or it will auto-deploy from the new commit

3. **Wait for build** (~2-3 minutes)

4. **Frontend will be live!** 🎉

---

## ⚙️ Deploy Backend (Required!)

Your frontend needs the backend API to work. Choose one:

### Option A: Railway (Recommended - Free Tier)

1. **Go to:** https://railway.app
2. **Sign in** with GitHub
3. **New Project** → Deploy from GitHub repo
4. **Select:** `Aklovyay/MuseAI`
5. **Root Directory:** Set to `backend`
6. **Add Environment Variable:**
   ```
   GOOGLE_API_KEY=your_actual_api_key_here
   PORT=3001
   ```
7. **Deploy!**
8. **Copy the Railway URL** (e.g., `https://museai-backend.up.railway.app`)

### Option B: Render (Free Tier)

1. **Go to:** https://render.com
2. **New** → Web Service
3. **Connect GitHub** repo: `Aklovyay/MuseAI`
4. **Root Directory:** `backend`
5. **Build Command:** `npm install`
6. **Start Command:** `npm start`
7. **Add Environment Variable:**
   ```
   GOOGLE_API_KEY=your_actual_api_key_here
   ```
8. **Create Web Service**
9. **Copy the Render URL**

---

## 🔗 Connect Frontend to Backend

After deploying backend, update frontend API URL:

### Update `frontend/src/utils/api.js`:

```javascript
// Change this line:
const API_BASE_URL = 'http://localhost:3001/api';

// To your deployed backend URL:
const API_BASE_URL = 'https://your-backend-url.railway.app/api';
// OR
const API_BASE_URL = 'https://your-backend-url.onrender.com/api';
```

### Then commit and push:
```bash
git add frontend/src/utils/api.js
git commit -m "Update API URL for production"
git push
```

Vercel will auto-redeploy! ✨

---

## 🌐 Environment Variables on Vercel

Your frontend is static (no secrets), but if you need any:

1. **Go to:** Vercel Dashboard → Your Project
2. **Settings** → Environment Variables
3. **Add variables** (if needed)
4. **Redeploy**

---

## ✅ Final Checklist

After both deployments:

- [ ] Frontend deployed on Vercel
- [ ] Backend deployed on Railway/Render
- [ ] Frontend API URL updated to backend URL
- [ ] Backend has GOOGLE_API_KEY environment variable
- [ ] Test: Open Vercel URL and try generating content
- [ ] Success! 🎉

---

## 🔍 Troubleshooting

### Frontend shows 404
- ✅ Check `vercel.json` is in repository
- ✅ Check build succeeded in Vercel logs
- ✅ Verify `frontend/dist` folder is generated

### "Failed to generate content" error
- ✅ Backend is deployed and running
- ✅ Frontend API URL points to correct backend
- ✅ Backend has GOOGLE_API_KEY set
- ✅ Check CORS is enabled in backend (already done)

### Backend won't start
- ✅ Check environment variables are set
- ✅ Verify build logs for errors
- ✅ Check Google API key is valid

---

## 💡 Quick Start URLs

After deployment, you'll have:

- **Frontend:** `https://your-project.vercel.app`
- **Backend:** `https://your-project.railway.app` or `.onrender.com`
- **GitHub:** `https://github.com/Aklovyay/MuseAI`

---

## 🎯 Alternative: All-in-One Deployment

If you want everything in one place:

### Deploy to Render (Both frontend + backend)

1. Deploy backend as Web Service (see Option B above)
2. Deploy frontend as Static Site:
   - **Build Command:** `cd frontend && npm install && npm run build`
   - **Publish Directory:** `frontend/dist`
3. Update API URL in frontend to use same domain

---

## 📚 Understanding the Architecture

```
User's Browser
    ↓
Vercel (Frontend - React SPA)
    ↓ API Calls
Railway/Render (Backend - Express API)
    ↓
Google Gemini AI
```

**Why separate?**
- Vercel = Optimized for static sites
- Railway/Render = Support persistent servers
- Better performance and reliability

---

## 🚀 Ready to Deploy!

1. Push the config files to GitHub
2. Vercel will auto-deploy frontend
3. Deploy backend to Railway/Render  
4. Update API URL
5. Done! 🎉

**Need help? See TROUBLESHOOTING.md**

