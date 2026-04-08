import { motion } from 'framer-motion';

const Button = ({ children, className = '', ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-3 rounded-lg font-medium text-white shadow-md transition-all ${
        className
      }`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;