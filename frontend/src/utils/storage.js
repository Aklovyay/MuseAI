// LocalStorage utility functions for history management

const STORAGE_KEY = 'museai_history';
const MAX_HISTORY_ITEMS = 20;

export const saveToHistory = (item) => {
  try {
    const history = getHistory();
    const newItem = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...item
    };
    
    // Add to beginning of array
    const updatedHistory = [newItem, ...history];
    
    // Keep only the most recent items
    const trimmedHistory = updatedHistory.slice(0, MAX_HISTORY_ITEMS);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmedHistory));
    return newItem;
  } catch (error) {
    console.error('Error saving to history:', error);
    return null;
  }
};

export const getHistory = () => {
  try {
    const history = localStorage.getItem(STORAGE_KEY);
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error('Error reading history:', error);
    return [];
  }
};

export const clearHistory = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing history:', error);
    return false;
  }
};

export const deleteHistoryItem = (id) => {
  try {
    const history = getHistory();
    const updatedHistory = history.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
    return true;
  } catch (error) {
    console.error('Error deleting history item:', error);
    return false;
  }
};

export const toggleFavorite = (id) => {
  try {
    const history = getHistory();
    const updatedHistory = history.map(item => 
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
    return true;
  } catch (error) {
    console.error('Error toggling favorite:', error);
    return false;
  }
};

