# 🚀 MuseAI Quick Start

## Windows Users - Super Easy Method! 🎯

### Step 1: Setup (One-time only)

1. Make sure you have **Node.js** installed ([Download](https://nodejs.org/))
2. Verify the `.env` file exists in the `backend` folder with your API key

### Step 2: Run the App

**Method 1: Using Batch Files (Easiest)** 

1. **Double-click** `start-backend.bat` - Keep this window open
2. **Double-click** `start-frontend.bat` - Keep this window open
3. Open your browser to **http://localhost:3000**

**Method 2: Using PowerShell/Terminal**

Open **TWO** PowerShell windows:

**Window 1 (Backend):**
```powershell
cd backend
npm start
```

**Window 2 (Frontend):**
```powershell
cd frontend
npm run dev
```

Then open **http://localhost:3000** in your browser.

---

## 🎨 First Time Using MuseAI?

Try this to see it in action:

1. **Select**: "Blog Ideas" 📝
2. **Enter**: "productivity tips for remote workers"
3. **Choose**: "Professional" tone 💼
4. **Click**: "Generate Content" ✨
5. Watch the AI create amazing content!

---

## 💡 Tips

- Keep **both** terminal windows open while using the app
- Press **Ctrl+C** in each window to stop the servers
- History is saved automatically in your browser
- Click the ⏰ icon to view your generation history
- Click 🌙/☀️ to toggle dark/light mode

---

## 🐛 Issues?

**Backend won't start:**
- Check if `.env` file exists in `backend` folder
- Verify your OpenAI API key is valid

**Frontend won't start:**
- Make sure backend is running first
- Check if port 3000 is available

**"Failed to generate":**
- Ensure backend is running on port 3001
- Check your OpenAI account has credits

---

## 🎉 You're Ready!

Enjoy creating amazing content with MuseAI! ✨

For detailed documentation, see **README.md**

