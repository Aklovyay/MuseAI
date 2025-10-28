import React, { useState } from 'react';
import { HiClipboardCopy, HiCheck } from 'react-icons/hi';
import { motion } from 'framer-motion';

const ResultCard = ({ result }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const formatContent = (content) => {
    // Split by newlines and format
    return content.split('\n').map((line, index) => {
      if (!line.trim()) return null;
      return (
        <p key={index} className="mb-2 last:mb-0">
          {line}
        </p>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="glass rounded-2xl p-6 relative"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1">
            Generated Content
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
              {result.contentType}
            </span>
            <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">
              {result.tone}
            </span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCopy}
          className="p-2.5 rounded-xl bg-white dark:bg-slate-700 
                   hover:bg-blue-50 dark:hover:bg-slate-600
                   transition-all shadow-md"
          title="Copy to clipboard"
        >
          {copied ? (
            <HiCheck className="text-xl text-green-500" />
          ) : (
            <HiClipboardCopy className="text-xl text-slate-600 dark:text-slate-300" />
          )}
        </motion.button>
      </div>

      {/* Content */}
      <div className="bg-white/50 dark:bg-slate-700/50 rounded-xl p-4 mb-4">
        <div className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
          {formatContent(result.content)}
        </div>
      </div>

      {/* Original Prompt */}
      <div className="border-t border-slate-200 dark:border-slate-600 pt-4">
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
          Original Prompt:
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400 italic">
          "{result.prompt}"
        </p>
      </div>

      {/* Success indicator animation */}
      {copied && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg"
        >
          Copied! ✓
        </motion.div>
      )}
    </motion.div>
  );
};

export default ResultCard;

