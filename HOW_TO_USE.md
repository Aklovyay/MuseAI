# 📖 How to Use MuseAI

A simple guide to get you creating amazing content with AI!

---

## 🚀 Starting the App

### Step 1: Start Backend Server

**Windows:** Double-click `start-backend.bat`

**Or manually:**
```bash
cd backend
npm start
```

✅ Wait for: `🚀 MuseAI Backend running on http://localhost:3001`

### Step 2: Start Frontend

**Windows:** Double-click `start-frontend.bat`

**Or manually:**
```bash
cd frontend
npm run dev
```

✅ Wait for: `Local: http://localhost:3000`

### Step 3: Open Browser

Navigate to: **http://localhost:3000**

---

## 🎨 Using the Interface

### Main Screen Layout

```
┌─────────────────────────────────────────┐
│  MuseAI ✨        [⏰ History] [🌙 Dark] │ ← Header
├─────────────────────────────────────────┤
│                                         │
│  📝 [Blog] [Social] [Summary] [Post]   │ ← Content Types
│     [Email] [Product]                   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Enter your prompt here...       │   │ ← Prompt Input
│  │                                 │   │
│  └─────────────────────────────────┘   │
│                                         │
│  💼 Professional 😊 Casual 🤝 Friendly │ ← Tone Options
│                                         │
│  [✨ Generate Content]                  │ ← Generate Button
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  Your AI-generated content      │   │ ← Results
│  │  appears here!        [📋 Copy] │   │
│  └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

---

## 📝 Step-by-Step Usage

### Example 1: Generate Blog Ideas

1. **Click** "Blog Ideas" (📝) button
2. **Type** your topic:
   ```
   productivity tips for remote workers
   ```
3. **Select** tone: "Professional" (💼)
4. **Click** "✨ Generate Content" or press **Ctrl+Enter**
5. **Wait** 2-5 seconds for AI magic ✨
6. **View** your generated blog ideas
7. **Click** 📋 to copy to clipboard

### Example 2: Create Social Media Caption

1. **Click** "Social Media Caption" (📱)
2. **Type** what your post is about:
   ```
   launching my new handmade jewelry collection
   ```
3. **Select** tone: "Enthusiastic" (🎉)
4. **Click** "✨ Generate Content"
5. **Copy** and paste into your social media!

### Example 3: Summarize Text

1. **Click** "Text Summary" (📄)
2. **Paste** long text you want summarized
3. **Select** tone: "Informative" (📚)
4. **Click** "✨ Generate Content"
5. **Get** concise summary in seconds!

---

## 🎯 Content Types Explained

| Icon | Type | When to Use | Example Prompt |
|------|------|-------------|----------------|
| 📝 | Blog Ideas | Need post topics | "digital marketing trends 2025" |
| 📱 | Social Caption | Instagram/Twitter | "new product launch announcement" |
| 📄 | Summary | Condense text | [paste long article] |
| ✍️ | Short Post | Quick thoughts | "tips for better sleep" |
| 📧 | Email Subject | Newsletter titles | "weekly fitness newsletter" |
| 🛍️ | Product Description | E-commerce | "organic cotton t-shirt features" |

---

## 🎭 Tone Guide

Choose the right tone for your audience:

- **💼 Professional** - Business reports, LinkedIn, formal emails
- **😊 Casual** - Personal blog, friendly updates
- **🤝 Friendly** - Customer service, community posts
- **🎉 Enthusiastic** - Product launches, celebrations
- **🎯 Persuasive** - Sales copy, marketing campaigns
- **😄 Witty** - Entertainment, creative writing
- **📚 Informative** - Educational content, tutorials
- **✨ Inspirational** - Motivational posts, coaching

---

## 📚 History Features

### Viewing History

1. **Click** the ⏰ icon in the header
2. **See** all your past generations
3. **Scroll** through your content library

### Managing History

| Action | How To | Icon |
|--------|--------|------|
| **Copy** | Click clipboard icon | 📋 |
| **Favorite** | Click star icon | ⭐ |
| **Delete** | Click trash icon | 🗑️ |
| **Clear All** | Click "Clear All" button | - |

### History Details

Each item shows:
- Your original prompt
- Generated content
- Content type used
- Tone selected
- Timestamp ("2 hours ago")

---

## 🌓 Dark Mode

### Toggle Theme

1. **Click** the 🌙/☀️ icon in header
2. **Watch** smooth theme transition
3. Your preference is **saved automatically**

### Auto-Detection

- First visit detects your system preference
- Switches automatically if you change OS theme

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **Ctrl+Enter** (Windows) | Generate content |
| **Cmd+Enter** (Mac) | Generate content |

💡 Works when cursor is in the prompt box!

---

## 💡 Pro Tips

### For Best Results

1. **Be Specific**
   - ❌ Bad: "write something about food"
   - ✅ Good: "5 quick healthy breakfast recipes for busy professionals"

2. **Include Context**
   - ❌ Bad: "new product"
   - ✅ Good: "launching eco-friendly water bottle for hikers"

3. **Experiment with Tones**
   - Try the same prompt with different tones
   - Compare results
   - Pick the best one

4. **Use History**
   - Star your favorites
   - Build a content library
   - Reuse successful patterns

5. **Iterate**
   - Not perfect? Try again with tweaked prompt
   - Add more details
   - Change the tone

---

## 🎨 UI Features

### Copy to Clipboard

1. **Click** 📋 icon on any content
2. **See** green checkmark ✓
3. **Paste** anywhere you need it

### Loading State

- Watch the ✨ animation while AI works
- "Creating magic..." message appears
- Progress bar shows activity

### Error Handling

If something goes wrong:
- Clear error message appears
- Red warning box shows the issue
- Try again after fixing the problem

---

## 🐛 Common Issues & Solutions

### "Failed to generate content"

**Possible causes:**
1. Backend server not running
   - → Start `start-backend.bat`
2. No OpenAI credits
   - → Check [platform.openai.com](https://platform.openai.com)
3. Invalid API key
   - → Check `backend/.env` file

### Content not appearing

1. Wait 5-10 seconds (API can be slow)
2. Check browser console (F12)
3. Verify both servers are running

### History not saving

1. Clear browser cache
2. Check if LocalStorage is enabled
3. Try incognito mode to test

---

## 📱 Mobile Usage

MuseAI works great on mobile!

### Tips for Mobile:
- Tap content type cards to select
- Swipe to scroll through tones
- History modal is touch-optimized
- Dark mode saves battery

---

## 🎯 Example Workflows

### Content Creator Morning Routine

1. Generate 5 blog ideas for the week
2. Star the best ones
3. Create social captions for each
4. Copy all to notes app

### Marketing Email Campaign

1. Write product description
2. Generate 5 email subject lines
3. Create social announcements
4. Test different tones
5. Star favorites

### Student Study Helper

1. Paste lecture notes
2. Generate summary
3. Use different tones for different subjects
4. Build study guide library

---

## 🚀 Quick Reference

### Essential Actions

```
1. Choose content type → 📝 Click card
2. Enter prompt → ✍️ Type in box
3. Select tone → 💼 Click option
4. Generate → ✨ Click button or Ctrl+Enter
5. Copy result → 📋 Click icon
6. View history → ⏰ Click header icon
7. Toggle dark mode → 🌙 Click header icon
```

---

## 🎉 You're Ready!

Now you know how to:
- ✅ Start the application
- ✅ Generate all content types
- ✅ Use different tones
- ✅ Manage history
- ✅ Use keyboard shortcuts
- ✅ Toggle dark mode
- ✅ Copy content
- ✅ Troubleshoot issues

**Start creating amazing content!** ✨

---

## 📚 More Help

- **Full documentation**: See `README.md`
- **Feature list**: See `FEATURES.md`
- **Setup help**: See `SETUP.md`
- **Quick start**: See `QUICKSTART.md`

---

**Happy Creating! 🚀**

