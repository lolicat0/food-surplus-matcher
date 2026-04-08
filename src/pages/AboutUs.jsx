import { motion } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';

const AboutUs = () => {
  const darkModeContext = useDarkMode();
  const darkMode = darkModeContext?.darkMode || false;

  return (
    <div 
      className="page-container"
      style={{
        background: darkMode 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' 
          : 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #f8fafc 100%)'
      }}
    >
      <div className="page-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="page-header"
        >
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            FoodSurplus Matcher was founded to eliminate food waste and feed communities in need. 
            We connect donors — restaurants, grocery stores, and individuals — with volunteers 
            who deliver surplus food to shelters, schools, and families facing hunger.
          </p>
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          <div 
            className="professional-card text-left"
            style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
          >
            <div className="flex items-center mb-6">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 
                className="text-2xl font-bold"
                style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
              >
                Our Mission
              </h3>
            </div>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
            >
              To create a world where no food goes to waste and no one goes hungry. We believe that 
              surplus food should be a resource, not waste, and that technology can bridge the gap 
              between abundance and need.
            </p>
          </div>

          <div 
            className="professional-card text-left"
            style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
          >
            <div className="flex items-center mb-6">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                style={{ background: 'linear-gradient(135deg, var(--accent), #8b5cf6)' }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 
                className="text-2xl font-bold"
                style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
              >
                Our Vision
              </h3>
            </div>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
            >
              A future where every community has a thriving food sharing network that eliminates 
              waste, reduces hunger, and strengthens local connections through the power of 
              technology and human compassion.
            </p>
          </div>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="professional-card"
          >
            <h3 className="card-value primary">12,450+</h3>
            <p className="card-label">Meals Saved</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="professional-card"
          >
            <h3 className="card-value secondary">387</h3>
            <p className="card-label">Active Donors</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="professional-card"
          >
            <h3 className="card-value accent">219</h3>
            <p className="card-label">Volunteers</p>
          </motion.div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 
            className="text-3xl font-bold text-center mb-12"
            style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
          >
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="professional-card text-center"
              style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-light))' }}
              >
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
              >
                Donors Post Food
              </h3>
              <p 
                style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
              >
                Restaurants, grocery stores, and individuals post surplus food with details about 
                quantity, type, and pickup location.
              </p>
            </div>

            <div 
              className="professional-card text-center"
              style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'linear-gradient(135deg, var(--accent), #3b82f6)' }}
              >
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
              >
                Volunteers Claim
              </h3>
              <p 
                style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
              >
                Volunteers browse available food donations and claim pickups that match their 
                location and schedule.
              </p>
            </div>

            <div 
              className="professional-card text-center"
              style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'linear-gradient(135deg, #8b5cf6, #a855f7)' }}
              >
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
              >
                Food Delivered
              </h3>
              <p 
                style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
              >
                Volunteers pick up the food and deliver it to local shelters, food banks, or 
                families in need within their community.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h2 
            className="text-3xl font-bold mb-8"
            style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
          >
            Our Team
          </h2>
          <p 
            className="text-lg max-w-3xl mx-auto mb-12"
            style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
          >
            We're a passionate team of developers, designers, and community advocates working 
            together to solve food waste and hunger through innovative technology solutions.
          </p>
          <div 
            className="professional-card max-w-2xl mx-auto"
            style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
          >
            <div className="flex items-center justify-center mb-6">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mr-6"
                style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
              >
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 
                  className="text-xl font-bold"
                  style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
                >
                  DevSpark Team
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: darkMode ? '#94a3b8' : '#64748b' }}
                >
                  Full-Stack Development Team
                </p>
              </div>
            </div>
            <p 
              className="text-center"
              style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
            >
              Committed to building technology that makes a real difference in communities 
              around the world.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs; 