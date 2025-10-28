import React, { useState, useEffect } from 'react';
import { HiX, HiTrash, HiStar, HiClipboardCopy, HiCheck } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { getHistory, clearHistory, deleteHistoryItem, toggleFavorite } from '../utils/storage';

const History = ({ isOpen, onClose, refreshTrigger }) => {
  const [history, setHistory] = useState([]);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    if (isOpen) {
      loadHistory();
    }
  }, [isOpen, refreshTrigger]);

  const loadHistory = () => {
    const items = getHistory();
    setHistory(items);
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all history?')) {
      clearHistory();
      loadHistory();
    }
  };

  const handleDelete = (id) => {
    deleteHistoryItem(id);
    loadHistory();
  };

  const handleToggleFavorite = (id) => {
    toggleFavorite(id);
    loadHistory();
  };

  const handleCopy = async (content, id) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMs = now - date;
    const diffInHours = diffInMs / (1000 * 60 * 60);

    if (diffInHours < 1) {
      const minutes = Math.floor(diffInMs / (1000 * 60));
      return `${minutes} min${minutes !== 1 ? 's' : ''} ago`;
    } else if (diffInHours < 24) {
      const hours = Math.floor(diffInHours);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="glass rounded-2xl w-full max-w-3xl max-h-[80vh] overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold gradient-text">History</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {history.length} {history.length === 1 ? 'item' : 'items'}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {history.length > 0 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClearAll}
                    className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 
                             text-white text-sm font-medium transition-all"
                  >
                    Clear All
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                >
                  <HiX className="text-xl" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            {history.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl mb-4"
                >
                  📝
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  No history yet
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Start generating content to see your history here
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {history.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white/50 dark:bg-slate-700/50 rounded-xl p-4 
                             hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 
                                       text-blue-700 dark:text-blue-400 text-xs font-medium">
                            {item.contentType}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 
                                       text-purple-700 dark:text-purple-400 text-xs font-medium">
                            {item.tone}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {formatDate(item.timestamp)}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleToggleFavorite(item.id)}
                          className="p-2 rounded-lg hover:bg-white dark:hover:bg-slate-600 transition-all"
                        >
                          <HiStar
                            className={`text-lg ${
                              item.isFavorite
                                ? 'text-yellow-500 fill-current'
                                : 'text-slate-400'
                            }`}
                          />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleCopy(item.content, item.id)}
                          className="p-2 rounded-lg hover:bg-white dark:hover:bg-slate-600 transition-all"
                        >
                          {copiedId === item.id ? (
                            <HiCheck className="text-lg text-green-500" />
                          ) : (
                            <HiClipboardCopy className="text-lg text-slate-600 dark:text-slate-400" />
                          )}
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleDelete(item.id)}
                          className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 transition-all"
                        >
                          <HiTrash className="text-lg text-red-500" />
                        </motion.button>
                      </div>
                    </div>

                    <div className="mb-2">
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                        Prompt:
                      </p>
                      <p className="text-sm text-slate-700 dark:text-slate-300 italic">
                        "{item.prompt}"
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                        Generated:
                      </p>
                      <p className="text-sm text-slate-700 dark:text-slate-300 line-clamp-3">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default History;

