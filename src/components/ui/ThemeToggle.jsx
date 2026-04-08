import React from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="relative inline-flex items-center justify-center w-14 h-8 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
      style={{
        background: darkMode 
          ? 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' 
          : 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
        boxShadow: darkMode 
          ? '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
          : '0 4px 15px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      {/* Toggle Circle */}
      <motion.div
        className="absolute w-6 h-6 rounded-full shadow-lg flex items-center justify-center"
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)' 
            : 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
          boxShadow: darkMode 
            ? '0 2px 8px rgba(251, 191, 36, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
            : '0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
        }}
        animate={{
          x: darkMode ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {/* Icon */}
        <motion.div
          animate={{
            rotate: darkMode ? 180 : 0,
            scale: darkMode ? 0.8 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        >
          {darkMode ? (
            <svg 
              className="w-3 h-3 text-amber-600" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg 
              className="w-3 h-3 text-gray-600" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          )}
        </motion.div>
      </motion.div>

      {/* Background Pattern */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: darkMode 
              ? 'radial-gradient(circle at 30% 30%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)' 
              : 'radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)'
          }}
          animate={{
            scale: darkMode ? [1, 1.2, 1] : [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
