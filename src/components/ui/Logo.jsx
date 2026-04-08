import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDarkMode } from '../../contexts/DarkModeContext';

const Logo = () => {
  const { darkMode } = useDarkMode();

  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Logo Icon */}
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
          style={{
            background: darkMode 
              ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' 
              : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            boxShadow: darkMode 
              ? '0 4px 20px rgba(16, 185, 129, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
              : '0 4px 20px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" 
            />
          </svg>
        </div>

        {/* Animated Ring */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-emerald-400 opacity-0 group-hover:opacity-100"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <motion.h1 
          className="text-xl font-bold leading-tight"
          style={{
            color: darkMode ? '#f9fafb' : '#1f2937'
          }}
          whileHover={{ x: 2 }}
        >
          FoodSurplus
        </motion.h1>
        <motion.p 
          className="text-xs font-medium leading-tight"
          style={{
            color: darkMode ? '#9ca3af' : '#6b7280'
          }}
          whileHover={{ x: 2 }}
        >
          Matcher
        </motion.p>
      </div>
    </Link>
  );
};

export default Logo;
