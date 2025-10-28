# MuseAI ✨

> **AI-Powered Content Generator** - Create blog ideas, social captions, summaries, and more with the power of AI.

A beautiful, modern web application that helps students, content creators, and marketers generate creative content using **Google Gemini AI** - completely **FREE**!

![MuseAI Banner](https://img.shields.io/badge/AI-Powered-blue?style=for-the-badge) ![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react) ![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)

---

## ✨ Features

### 🎨 Content Generation
- **6 Content Types**: Blog ideas, social captions, summaries, short posts, email subjects, product descriptions
- **8 Tone Options**: Professional, casual, friendly, enthusiastic, persuasive, witty, informative, inspirational
- **Smart AI**: Powered by Google Gemini 2.5 Flash - **FREE Tier Available!** 🎉

### 💾 History Management
- **LocalStorage**: Automatic saving of all generations
- **Favorites**: Star your best creations
- **Easy Copy**: One-click copy to clipboard
- **Quick Delete**: Remove unwanted items

### 🎭 Beautiful UI
- **Dark/Light Mode**: Automatic theme switching with system preference detection
- **Smooth Animations**: Powered by Framer Motion
- **Glassmorphism**: Modern glass-effect design
- **Responsive**: Perfect on mobile, tablet, and desktop
- **Gradient Accents**: Beautiful blue-purple gradient theme

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Google AI Studio API Key** - [Get one FREE here](https://aistudio.google.com/app/apikey)

### Installation

1. **Clone or download this repository**

2. **Set up the Backend**

```bash
cd backend
npm install
```

3. **Configure your API key**

Create a `.env` file in the `backend` folder:

```env
GOOGLE_API_KEY=your_google_api_key_here
PORT=3001
```

⚠️ **Important**: Replace `your_google_api_key_here` with your actual Google AI Studio API key!

4. **Set up the Frontend**

```bash
cd ../frontend
npm install
```

---

## 🎯 Running the Application

You need to run **both** the backend and frontend:

### Terminal 1 - Start Backend Server

```bash
cd backend
npm start
```

You should see: `🚀 MuseAI Backend running on http://localhost:3001`

### Terminal 2 - Start Frontend

```bash
cd frontend
npm run dev
```

You should see: `Local: http://localhost:3000`

### Open Your Browser

Navigate to **http://localhost:3000** and start creating! 🎉

---

## 📁 Project Structure

```
MuseAI/
├── backend/
│   ├── server.js              # Express server with OpenAI integration
│   ├── package.json
│   ├── .env                   # Your API key (DO NOT COMMIT!)
│   └── .env.example           # Example environment file
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx           # App header with dark mode
│   │   │   ├── Generator.jsx        # Main content generator
│   │   │   ├── ResultCard.jsx       # Display generated content
│   │   │   ├── LoadingAnimation.jsx # Loading state
│   │   │   └── History.jsx          # History modal
│   │   │
│   │   ├── utils/
│   │   │   ├── api.js              # API calls
│   │   │   └── storage.js          # LocalStorage management
│   │   │
│   │   ├── constants/
│   │   │   └── contentTypes.js     # Content types & tones
│   │   │
│   │   ├── App.jsx                 # Main app component
│   │   ├── main.jsx                # Entry point
│   │   └── index.css               # Global styles
│   │
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── README.md
```

---

## 🎨 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Icons** - Beautiful icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **Google Gemini AI** - AI content generation (FREE tier!)
- **CORS** - Cross-origin resource sharing

---

## 💡 Usage Tips

### Keyboard Shortcuts
- **Ctrl/Cmd + Enter** in the prompt box to generate content quickly

### Best Practices
1. **Be Specific**: The more detailed your prompt, the better the AI output
2. **Choose the Right Type**: Select the content type that matches your need
3. **Experiment with Tones**: Try different tones for varied results
4. **Save Favorites**: Star the best generations for quick access later

### Example Prompts

**Blog Ideas**
```
"Travel tips for budget backpackers in Southeast Asia"
```

**Social Caption**
```
"Announcing my new coffee shop opening in downtown Portland"
```

**Product Description**
```
"Eco-friendly bamboo toothbrush - sustainable, biodegradable, pack of 4"
```

---

## 🔒 Security Notes

1. **Never commit your `.env` file** - It contains your API key
2. **Free Tier** - Google Gemini offers FREE tier with 15 requests/min, 1500/day! Monitor usage at [aistudio.google.com](https://aistudio.google.com/)
3. **Rate Limiting** - The backend handles basic error responses for rate limits
4. **Environment Variables** - Always use `.env` for sensitive data

---

## 🎯 Features Overview

### Content Types

| Type | Icon | Best For |
|------|------|----------|
| Blog Ideas | 📝 | Content planning, brainstorming topics |
| Social Caption | 📱 | Instagram, Twitter, LinkedIn posts |
| Text Summary | 📄 | Condensing articles, reports |
| Short Post | ✍️ | Quick thoughts, announcements |
| Email Subject | 📧 | Marketing emails, newsletters |
| Product Description | 🛍️ | E-commerce, product listings |

### Tone Options

- 💼 **Professional** - Formal, business-appropriate
- 😊 **Casual** - Relaxed, conversational
- 🤝 **Friendly** - Warm, approachable
- 🎉 **Enthusiastic** - Energetic, excited
- 🎯 **Persuasive** - Convincing, sales-oriented
- 😄 **Witty** - Clever, humorous
- 📚 **Informative** - Educational, fact-based
- ✨ **Inspirational** - Motivating, uplifting

---

## 🐛 Troubleshooting

### Backend won't start
- ✅ Check if port 3001 is available
- ✅ Verify your `.env` file exists and has a valid API key
- ✅ Run `npm install` in the backend folder

### Frontend won't start
- ✅ Check if port 3000 is available
- ✅ Run `npm install` in the frontend folder
- ✅ Make sure backend is running first

### "Failed to generate content"
- ✅ Verify backend is running on port 3001
- ✅ Check your Google API key is valid
- ✅ Verify your API key at [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
- ✅ Check browser console for detailed errors

### Content not saving to history
- ✅ Check if LocalStorage is enabled in your browser
- ✅ Clear browser cache and try again

---

## 🚀 Future Enhancements

- [ ] User authentication and cloud storage
- [ ] Export history to PDF/JSON
- [ ] Share generations via unique links
- [ ] Multiple AI model support (GPT-4, Claude, etc.)
- [ ] Batch generation mode
- [ ] Chrome extension version
- [ ] Mobile app (React Native)
- [ ] Team collaboration features

---

## 📝 API Usage - FREE Tier! 🎉

**Google Gemini Free Tier** (as of 2024):
- **15 requests per minute**
- **1,500 requests per day**
- **1 million tokens per minute**
- **Cost: $0.00 - Completely FREE!** 🆓

💡 **Tip**: No credit card needed to start using Google Gemini!

---

## 🤝 Contributing

This is a personal project, but feel free to:
1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes!

---

## 🙏 Acknowledgments

- **Google AI** - For the amazing Gemini API and FREE tier
- **Vercel** - For Vite and React
- **Tailwind Labs** - For Tailwind CSS
- **Framer** - For Framer Motion

---

## 📧 Support

Having issues? Check the troubleshooting section above or open an issue on GitHub.

---

**Built with ❤️ for creators by creators**

Enjoy creating amazing content with MuseAI! ✨

