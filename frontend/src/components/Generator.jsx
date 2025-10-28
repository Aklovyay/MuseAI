import React, { useState } from 'react';
import { HiSparkles, HiRefresh } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTENT_TYPES, TONE_OPTIONS } from '../constants/contentTypes';
import { generateContent } from '../utils/api';
import { saveToHistory } from '../utils/storage';
import ResultCard from './ResultCard';
import LoadingAnimation from './LoadingAnimation';

const Generator = ({ onGenerate }) => {
  const [prompt, setPrompt] = useState('');
  const [contentType, setContentType] = useState('blog-ideas');
  const [tone, setTone] = useState('professional');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const selectedContentType = CONTENT_TYPES.find(ct => ct.value === contentType);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await generateContent(prompt, contentType, tone);
      
      const newResult = {
        prompt,
        content: data.content,
        contentType,
        tone,
      };

      setResult(newResult);
      saveToHistory(newResult);
      
      if (onGenerate) {
        onGenerate();
      }
    } catch (err) {
      setError(err.message || 'Failed to generate content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleGenerate();
    }
  };

  return (
    <div className="space-y-6">
      {/* Content Type Selector */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-2xl p-6"
      >
        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          What do you want to create?
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {CONTENT_TYPES.map((type) => (
            <motion.button
              key={type.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setContentType(type.value)}
              className={`p-3 rounded-xl text-left transition-all ${
                contentType === type.value
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/50 dark:bg-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-700/80'
              }`}
            >
              <div className="text-2xl mb-1">{type.icon}</div>
              <div className="text-sm font-medium">{type.label}</div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Prompt Input */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-2xl p-6"
      >
        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          {selectedContentType?.description}
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder={selectedContentType?.placeholder}
          rows="4"
          className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-slate-700/80 
                   border-2 border-slate-200 dark:border-slate-600
                   focus:border-blue-500 dark:focus:border-purple-500 
                   focus:outline-none transition-colors
                   text-slate-900 dark:text-slate-100
                   placeholder:text-slate-400 dark:placeholder:text-slate-500
                   resize-none"
        />
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
          💡 Tip: Press Ctrl/Cmd + Enter to generate
        </p>
      </motion.div>

      {/* Tone Selector */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="glass rounded-2xl p-6"
      >
        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Choose a tone
        </label>
        <div className="flex flex-wrap gap-2">
          {TONE_OPTIONS.map((option) => (
            <motion.button
              key={option.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTone(option.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                tone === option.value
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/50 dark:bg-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-700/80'
              }`}
            >
              <span className="mr-1">{option.emoji}</span>
              {option.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Generate Button */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleGenerate}
        disabled={loading || !prompt.trim()}
        className="w-full py-4 px-6 rounded-2xl font-semibold text-white
                 bg-gradient-to-r from-blue-600 to-purple-600
                 hover:from-blue-700 hover:to-purple-700
                 disabled:opacity-50 disabled:cursor-not-allowed
                 shadow-lg hover:shadow-xl transition-all
                 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <HiRefresh className="text-xl animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <HiSparkles className="text-xl" />
            Generate Content
          </>
        )}
      </motion.button>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass rounded-xl p-4 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
          >
            <p className="text-red-600 dark:text-red-400 text-sm">
              ⚠️ {error}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Animation */}
      {loading && <LoadingAnimation />}

      {/* Result */}
      <AnimatePresence mode="wait">
        {result && !loading && (
          <ResultCard result={result} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Generator;

