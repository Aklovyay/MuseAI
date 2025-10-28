# 🔧 MuseAI Troubleshooting Guide

## Common Issues & Solutions

---

## 🚨 "Failed to execute 'json' on 'Response': Unexpected end of JSON input"

### Cause:
The backend server isn't running or crashed.

### Solution:
1. Check if backend is running: http://localhost:3001/api/health
2. If not, start the backend:
   ```bash
   cd backend
   npm start
   ```
3. Refresh your browser

---

## 🚨 "Error: listen EADDRINUSE: address already in use :::3001"

### Cause:
Port 3001 is already being used by another backend process.

### Solution:

**Easy Way (Windows):**
Double-click `kill-backend.bat` then restart backend.

**Manual Way:**

1. **Find the process:**
   ```bash
   netstat -ano | findstr :3001
   ```

2. **Kill it (replace PID with the number you found):**
   ```bash
   taskkill /PID <PID> /F
   ```

3. **Start backend again:**
   ```bash
   cd backend
   npm start
   ```

---

## 🚨 "Rate limit exceeded"

### Cause:
You hit Google Gemini's free tier limit (15 requests per minute).

### Solution:
- **Wait 1 minute** before trying again
- **Space out requests** - don't spam the generate button
- **Upgrade** to paid tier if needed (rarely necessary)

### Prevention:
- Don't click generate multiple times rapidly
- Wait for each request to complete
- Normal usage won't hit this limit

---

## 🚨 "Invalid API key"

### Cause:
Your Google API key is wrong or expired.

### Solution:

1. **Get a new API key:**
   - Go to: https://aistudio.google.com/app/apikey
   - Click "Create API Key"
   - Copy the key

2. **Update backend/.env file:**
   ```env
   GOOGLE_API_KEY=your_new_key_here
   PORT=3001
   ```

3. **Restart backend:**
   - Close the backend terminal (Ctrl+C)
   - Run `npm start` again

---

## 🚨 Backend won't start

### Possible Causes & Solutions:

**1. Port 3001 is busy:**
- Run `kill-backend.bat` or manually kill the process

**2. Dependencies not installed:**
```bash
cd backend
npm install
```

**3. Missing .env file:**
- Create `backend/.env` with:
  ```env
  GOOGLE_API_KEY=your_key_here
  PORT=3001
  ```

**4. Wrong directory:**
- Make sure you're in the `backend` folder
- Check with: `dir` (Windows) or `ls` (Mac/Linux)

---

## 🚨 Frontend won't start

### Possible Causes & Solutions:

**1. Port 3000 is busy:**
```bash
# Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**2. Dependencies not installed:**
```bash
cd frontend
npm install
```

**3. Backend not running:**
- Start backend first, then frontend

---

## 🚨 "Content not generating"

### Checklist:

1. **Backend running?**
   - Check: http://localhost:3001/api/health
   - Should show: `{"status":"ok","message":"MuseAI Backend is running"}`

2. **Frontend running?**
   - Check: http://localhost:3000
   - Should show the MuseAI interface

3. **API key valid?**
   - Verify at: https://aistudio.google.com/app/apikey
   - Check `backend/.env` file

4. **Browser console errors?**
   - Press F12 in browser
   - Check Console tab for errors
   - Look for red error messages

5. **Network issues?**
   - Check if you're online
   - Try refreshing the page

---

## 🚨 "History not saving"

### Solutions:

1. **Clear browser cache:**
   - Chrome: Ctrl+Shift+Delete
   - Clear "Cached images and files"
   - Try again

2. **Check LocalStorage:**
   - Press F12 → Application tab → Local Storage
   - Look for `museai_history`

3. **Try incognito mode:**
   - If it works there, clear your browser data

4. **Different browser:**
   - Try Chrome, Edge, or Firefox

---

## 🚨 "Dark mode not working"

### Solutions:

1. **Clear LocalStorage:**
   - Press F12 → Console
   - Type: `localStorage.clear()`
   - Press Enter
   - Refresh page

2. **Try manually:**
   - Click the 🌙/☀️ icon multiple times
   - Wait 2 seconds between clicks

---

## 🚨 Copy to clipboard not working

### Cause:
Browser security restrictions.

### Solution:

1. **Use HTTPS or localhost:**
   - Clipboard API only works on secure origins
   - Should work on localhost (you're already using this)

2. **Allow clipboard permission:**
   - Check browser address bar for permission prompts
   - Allow clipboard access

3. **Manual copy:**
   - Select the text
   - Ctrl+C (Windows) or Cmd+C (Mac)

---

## 🚨 Slow generation speed

### Possible Causes:

1. **Slow internet connection:**
   - Google Gemini API requires internet
   - Check your connection speed

2. **First request:**
   - First generation is always slower
   - Subsequent ones are faster

3. **Complex prompts:**
   - Very long prompts take longer
   - Keep prompts concise

### Normal Speed:
- **2-5 seconds** per generation is normal
- **< 10 seconds** for complex requests

---

## 🚨 Both servers are running but page is blank

### Solutions:

1. **Hard refresh:**
   - Ctrl+Shift+R (Windows)
   - Cmd+Shift+R (Mac)

2. **Clear cache and reload:**
   - Ctrl+F5

3. **Check browser console:**
   - F12 → Console tab
   - Look for errors

4. **Try different browser:**
   - Chrome, Edge, Firefox

---

## 🚨 Getting CORS errors

### Cause:
Backend and frontend can't communicate.

### Solution:

1. **Check backend is running:**
   - Should be on http://localhost:3001

2. **Check frontend is running:**
   - Should be on http://localhost:3000

3. **Restart both servers:**
   - Close both terminals
   - Start backend first
   - Then start frontend

---

## 💡 **Prevention Tips**

### To Avoid Future Issues:

1. **Always start backend first, then frontend**
2. **Only run ONE instance of each server**
3. **Use Ctrl+C to properly stop servers**
4. **Don't close terminal windows abruptly**
5. **Check port availability before starting**

### Proper Shutdown:

1. **Frontend:** Press Ctrl+C in terminal
2. **Backend:** Press Ctrl+C in terminal
3. **If stuck:** Use `kill-backend.bat`

### Proper Startup:

1. **Backend:**
   ```bash
   cd backend
   npm start
   ```
   Wait for: `🚀 MuseAI Backend running on http://localhost:3001`

2. **Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```
   Wait for: `Local: http://localhost:3000`

3. **Open browser:** http://localhost:3000

---

## 🆘 Still Having Issues?

### Debug Checklist:

- [ ] Node.js is installed (`node --version`)
- [ ] Both `node_modules` folders exist
- [ ] `backend/.env` file exists with valid API key
- [ ] Port 3001 is free
- [ ] Port 3000 is free
- [ ] Internet connection is working
- [ ] No firewall blocking localhost
- [ ] Browser is up to date

### Get More Info:

1. **Backend logs:** Check the backend terminal for errors
2. **Frontend logs:** F12 → Console in browser
3. **Network logs:** F12 → Network tab
4. **API status:** https://status.google.com

---

## 📚 Additional Resources

- **Google AI Studio:** https://aistudio.google.com
- **API Documentation:** https://ai.google.dev/docs
- **Node.js Help:** https://nodejs.org/en/docs/

---

## ✅ Quick Commands Reference

```bash
# Check if port is in use
netstat -ano | findstr :3001

# Kill process
taskkill /PID <PID> /F

# Start backend
cd backend && npm start

# Start frontend
cd frontend && npm run dev

# Check backend health
curl http://localhost:3001/api/health

# Clear npm cache (if dependencies issues)
npm cache clean --force
```

---

**Most issues are fixed by simply restarting the backend!** 🔄

