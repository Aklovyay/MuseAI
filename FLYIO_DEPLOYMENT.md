# 🚀 Deploy Backend to Fly.io

## ✅ Why Fly.io?

- ✅ **FREE tier** - Generous limits
- ✅ **Perfect for Node.js/Express** - Runs your server 24/7
- ✅ **Global CDN** - Fast worldwide
- ✅ **Easy deployment** - Simple CLI
- ✅ **Auto-scaling** - Scales to 0 when not in use

---

## 📋 Prerequisites

1. **Fly.io account** (free): https://fly.io/signup
2. **Fly.io CLI installed**

---

## 🔧 Step 1: Install Fly.io CLI

### Windows (PowerShell):
```powershell
iwr https://fly.io/install.ps1 -useb | iex
```

### Mac/Linux:
```bash
curl -L https://fly.io/install.sh | sh
```

### Verify installation:
```bash
fly version
```

---

## 🔑 Step 2: Login to Fly.io

```bash
fly auth login
```

This will open your browser to login. Complete the authentication.

---

## 🚀 Step 3: Deploy Your Backend

### Navigate to backend folder:
```bash
cd C:\Users\Aklovya\Desktop\MuseAI\backend
```

### Launch the app (first time):
```bash
fly launch
```

**You'll be asked:**

1. **Choose an app name:** `museai-backend` (or any name you like)
2. **Choose region:** Select closest to you (e.g., `sjc` for San Jose)
3. **Would you like to set up a PostgreSQL database?** → **No**
4. **Would you like to set up a Redis database?** → **No**
5. **Would you like to deploy now?** → **No** (we need to set env vars first)

---

## 🔐 Step 4: Set Environment Variables

```bash
fly secrets set GOOGLE_API_KEY=AIzaSyCWwwQ-4aMGMNQqM6NaEj6gJjvd8g-u6po
```

**Important:** This command stores your API key securely!

---

## 🎯 Step 5: Deploy!

```bash
fly deploy
```

**What happens:**
- Builds Docker image
- Deploys to Fly.io
- Starts your server
- Takes 2-3 minutes

---

## ✅ Step 6: Verify Deployment

### Check status:
```bash
fly status
```

### View logs:
```bash
fly logs
```

### Open in browser:
```bash
fly open
```

### Get your app URL:
```bash
fly info
```

Look for: `Hostname = museai-backend.fly.dev`

---

## 🔗 Step 7: Test Your Backend

Your backend URL will be: `https://museai-backend.fly.dev`

Test the health endpoint:
```
https://museai-backend.fly.dev/api/health
```

Should return:
```json
{
  "status": "ok",
  "message": "MuseAI Backend is running"
}
```

---

## 🎨 Step 8: Update Frontend API URL

Now update your frontend to use the Fly.io backend:

### Edit `frontend/src/utils/api.js`:

```javascript
// Change from:
const API_BASE_URL = 'http://localhost:3001/api';

// To your Fly.io URL:
const API_BASE_URL = 'https://museai-backend.fly.dev/api';
```

### Commit and push:
```bash
git add frontend/src/utils/api.js backend/
git commit -m "Configure backend for Fly.io deployment"
git push
```

Vercel will auto-deploy the updated frontend! ✨

---

## 📊 Fly.io Free Tier Limits

| Resource | Free Tier |
|----------|-----------|
| **VMs** | 3 shared-cpu VMs |
| **RAM** | 256MB per VM |
| **Storage** | 3GB persistent volume |
| **Bandwidth** | 160GB outbound/month |
| **Compute** | ~2,200 shared-cpu hours/month |

**Perfect for MuseAI!** Your app will auto-sleep when not in use and wake instantly.

---

## 🛠️ Useful Fly.io Commands

### View logs (live):
```bash
fly logs -a museai-backend
```

### SSH into your app:
```bash
fly ssh console
```

### Scale your app:
```bash
fly scale count 1
```

### Stop your app:
```bash
fly apps stop museai-backend
```

### Start your app:
```bash
fly apps start museai-backend
```

### Update secrets:
```bash
fly secrets set GOOGLE_API_KEY=new_key_here
```

### Delete app (if needed):
```bash
fly apps destroy museai-backend
```

---

## 🔍 Troubleshooting

### App won't start:
```bash
fly logs
```
Check for errors in the logs.

### Environment variable issues:
```bash
fly secrets list
```
Verify GOOGLE_API_KEY is set.

### Deployment fails:
```bash
fly doctor
```
Checks your Fly.io setup.

### 500 errors:
Check logs:
```bash
fly logs --app museai-backend
```

---

## 🎯 Configuration Explained

### `fly.toml` - Main config file:
```toml
app = "museai-backend"           # Your app name
primary_region = "sjc"            # Region (San Jose)

[env]
  PORT = "8080"                   # Fly.io uses port 8080

[http_service]
  auto_stop_machines = true       # Saves money - stops when idle
  auto_start_machines = true      # Wakes up instantly
  min_machines_running = 0        # Can scale to 0
```

### `Dockerfile` - Builds your app:
```dockerfile
FROM node:18-alpine              # Lightweight Node.js
WORKDIR /app                     # Set directory
COPY package*.json ./            # Copy dependencies
RUN npm install --production     # Install packages
COPY . .                         # Copy code
EXPOSE 8080                      # Expose port
CMD ["npm", "start"]            # Start server
```

---

## 🆚 Fly.io vs Railway vs Render

| Feature | Fly.io | Railway | Render |
|---------|--------|---------|--------|
| **Free Tier** | ✅ Generous | ✅ $5/month credit | ✅ Limited |
| **Auto-sleep** | ✅ Yes | ❌ No | ✅ Yes |
| **Global CDN** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Setup** | CLI-based | Web UI | Web UI |
| **Docker** | ✅ Built-in | ✅ Supported | ✅ Supported |
| **Cold Start** | ~100ms | N/A | ~30s |

**Fly.io is perfect for MuseAI!** ✨

---

## 🔄 Updating Your Deployment

Whenever you make changes:

```bash
cd backend
fly deploy
```

Fly.io will rebuild and redeploy automatically!

---

## 🌐 Custom Domain (Optional)

Add your own domain:

```bash
fly certs add your-domain.com
```

Follow DNS instructions, then your app will be at `https://your-domain.com`

---

## 💰 Cost Management

Fly.io free tier is enough for MuseAI, but to monitor:

```bash
fly dashboard
```

View usage and billing in the web dashboard.

---

## ✅ Final Checklist

After deployment:

- [ ] Backend deployed to Fly.io
- [ ] Environment variable set (GOOGLE_API_KEY)
- [ ] Health endpoint responding
- [ ] Logs show no errors
- [ ] Frontend API URL updated
- [ ] Vercel redeployed
- [ ] Test content generation
- [ ] Success! 🎉

---

## 🎉 You're Live!

Your complete architecture:
```
User Browser
    ↓
Vercel (Frontend)
  https://your-project.vercel.app
    ↓
Fly.io (Backend)
  https://museai-backend.fly.dev
    ↓
Google Gemini AI
```

**Everything is running 100% FREE!** 🎊

---

## 📚 Learn More

- **Fly.io Docs:** https://fly.io/docs
- **Node.js on Fly.io:** https://fly.io/docs/languages-and-frameworks/node/
- **Pricing:** https://fly.io/docs/about/pricing/

---

## 🆘 Need Help?

1. Check logs: `fly logs`
2. Check status: `fly status`
3. Run diagnostics: `fly doctor`
4. Community: https://community.fly.io

---

**Happy Deploying!** 🚀

