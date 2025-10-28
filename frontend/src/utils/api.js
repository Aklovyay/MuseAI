// API utility functions

// Use Render backend in production, localhost in development
const API_BASE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:8080/api'
  : 'https://museai-ce1s.onrender.com/api';

export const generateContent = async (prompt, contentType, tone) => {
  try {
    const response = await fetch(`${API_BASE_URL}/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        contentType,
        tone,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to generate content');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const checkAPIHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    const data = await response.json();
    return data.status === 'ok';
  } catch (error) {
    console.error('Health check failed:', error);
    return false;
  }
};

