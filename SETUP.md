# MuseAI Setup Guide 🚀

Follow these simple steps to get MuseAI running on your machine!

---

## Step 1: Install Dependencies

### Backend Setup
```bash
cd backend
npm install
```

### Frontend Setup
```bash
cd frontend
npm install
```

---

## Step 2: Configure API Key

1. Navigate to the `backend` folder
2. Create a file named `.env` (exactly like that, including the dot)
3. Add the following content:

```
GOOGLE_API_KEY=your_google_api_key_here
PORT=3001
```

Replace `your_google_api_key_here` with your actual Google AI Studio API key.

⚠️ **Important Security Note**: 
- Get your FREE API key from: https://aistudio.google.com/app/apikey
- Never commit the `.env` file to version control
- The `.gitignore` file already protects it

---

## Step 3: Run the Application

You need **TWO terminal windows**:

### Terminal 1 - Backend
```bash
cd backend
npm start
```

✅ Look for: `🚀 MuseAI Backend running on http://localhost:3001`

### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```

✅ Look for: `Local: http://localhost:3000`

---

## Step 4: Open in Browser

Navigate to: **http://localhost:3000**

---

## 🎉 You're all set!

Start generating amazing content with AI!

### Quick Test:
1. Select "Blog Ideas" as content type
2. Enter "productivity tips for remote workers" in the prompt
3. Choose "Professional" tone
4. Click "Generate Content"
5. Watch the magic happen! ✨

---

## Need Help?

- Check if both servers are running
- Verify your API key in the `.env` file
- Make sure you have OpenAI credits available
- See troubleshooting in main README.md

