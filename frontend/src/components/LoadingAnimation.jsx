import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="glass rounded-2xl p-8"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Animated sparkles */}
        <div className="relative w-20 h-20">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                delay: index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.span
                className="text-4xl"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.3,
                  repeat: Infinity,
                }}
              >
                ✨
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Loading text */}
        <div className="text-center">
          <motion.h3
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lg font-semibold gradient-text mb-2"
          >
            Creating magic...
          </motion.h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            AI is generating your content
          </p>
        </div>

        {/* Animated progress bar */}
        <div className="w-full max-w-xs h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ width: '50%' }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;

