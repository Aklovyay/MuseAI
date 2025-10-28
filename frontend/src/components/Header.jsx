import React from 'react';
import { HiMoon, HiSun, HiClock } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Header = ({ darkMode, toggleDarkMode, onShowHistory }) => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="glass rounded-2xl p-4 mb-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="text-3xl"
          >
            ✨
          </motion.div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold gradient-text">
              MuseAI
            </h1>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              AI-Powered Content Generator
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onShowHistory}
            className="p-2.5 rounded-xl glass hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all"
            title="View History"
          >
            <HiClock className="text-xl text-slate-700 dark:text-slate-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl glass hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all"
            title="Toggle Theme"
          >
            {darkMode ? (
              <HiSun className="text-xl text-yellow-400" />
            ) : (
              <HiMoon className="text-xl text-slate-700" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

