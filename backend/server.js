import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Google Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: 'models/gemini-2.5-flash' });

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'MuseAI Backend is running' });
});

// Generate content endpoint
app.post('/api/generate', async (req, res) => {
  try {
    const { prompt, contentType, tone } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // Build system message based on content type and tone
    let systemMessage = `You are a creative AI assistant specialized in generating ${contentType || 'content'}.`;
    
    if (tone) {
      systemMessage += ` Write in a ${tone} tone.`;
    }

    // Add specific instructions based on content type
    const contentInstructions = {
      'blog-ideas': 'Generate 5 creative and engaging blog post ideas. Make each idea catchy and specific.',
      'social-caption': 'Create an engaging social media caption. Keep it concise, catchy, and include relevant context.',
      'summary': 'Provide a clear and concise summary of the given text. Capture the main points effectively.',
      'short-post': 'Write a short, compelling post. Make it attention-grabbing and easy to read.',
      'email-subject': 'Generate 5 compelling email subject lines that drive opens. Make them specific and engaging.',
      'product-description': 'Write a persuasive product description that highlights benefits and features.',
    };

    if (contentType && contentInstructions[contentType]) {
      systemMessage += ` ${contentInstructions[contentType]}`;
    }

    // Combine system message and user prompt for Gemini
    const fullPrompt = `${systemMessage}\n\nUser request: ${prompt}`;

    // Call Google Gemini API
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const generatedText = response.text();

    res.json({
      success: true,
      content: generatedText,
      usage: {
        model: 'gemini-2.5-flash',
        provider: 'Google AI'
      }
    });

  } catch (error) {
    console.error('Error generating content:', error);
    
    if (error.message?.includes('API key')) {
      return res.status(401).json({ error: 'Invalid API key. Please check your Google API key.' });
    }
    
    if (error.message?.includes('quota') || error.message?.includes('limit')) {
      return res.status(429).json({ error: 'Rate limit exceeded. Please try again later.' });
    }

    res.status(500).json({ 
      error: 'Failed to generate content',
      message: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 MuseAI Backend running on http://localhost:${PORT}`);
});

