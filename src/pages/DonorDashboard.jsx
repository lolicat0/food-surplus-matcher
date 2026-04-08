import { motion } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useState } from 'react';

const DonorDashboard = () => {
  const { darkMode } = useDarkMode();
  const [showPostForm, setShowPostForm] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const handlePostFood = () => {
    setShowPostForm(true);
  };

  const handleViewAnalytics = () => {
    setShowAnalytics(true);
  };

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
          <h1 className="page-title">Donor Dashboard</h1>
          <p className="page-subtitle">
            Post your surplus food and help feed those in need. Make a difference in your community today.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div 
            className="professional-card text-center"
            style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-light))' }}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 
              className="text-xl font-bold mb-4"
              style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
            >
              Post New Food
            </h3>
            <p 
              className="mb-6"
              style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
            >
              Have surplus food? Post it here and help feed someone in need.
            </p>
            <button 
              className="btn btn-primary w-full"
              onClick={handlePostFood}
            >
              Post Food Now
            </button>
          </div>

          <div 
            className="professional-card text-center"
            style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: 'linear-gradient(135deg, var(--accent), #3b82f6)' }}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 
              className="text-xl font-bold mb-4"
              style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
            >
              View Analytics
            </h3>
            <p 
              className="mb-6"
              style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
            >
              Track your impact and see how many meals you've helped provide.
            </p>
            <button 
              className="btn btn-secondary w-full"
              onClick={handleViewAnalytics}
            >
              View Analytics
            </button>
          </div>
        </motion.div>

        {/* Your Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 
            className="text-3xl font-bold text-center mb-12"
            style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
          >
            Your Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="professional-card"
            >
              <h3 className="card-value primary">47</h3>
              <p className="card-label">Posts This Month</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="professional-card"
            >
              <h3 className="card-value secondary">234</h3>
              <p className="card-label">Meals Donated</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="professional-card"
            >
              <h3 className="card-value accent">18</h3>
              <p className="card-label">Families Helped</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Recent Posts */}
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
            Recent Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Fresh Vegetables", 
                quantity: "15 lbs", 
                status: "Claimed", 
                time: "2 hours ago",
                type: "vegetables"
              },
              { 
                title: "Bread & Pastries", 
                quantity: "25 items", 
                status: "Available", 
                time: "4 hours ago",
                type: "bakery"
              },
              { 
                title: "Prepared Meals", 
                quantity: "12 servings", 
                status: "Claimed", 
                time: "6 hours ago",
                type: "meals"
              }
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="professional-card text-left"
                style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 
                    className="text-lg font-bold"
                    style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
                  >
                    {post.title}
                  </h3>
                  <span 
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.status === 'Claimed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {post.status}
                  </span>
                </div>
                <p 
                  className="text-sm mb-2"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  Quantity: {post.quantity}
                </p>
                <p 
                  className="text-xs"
                  style={{ color: darkMode ? '#94a3b8' : '#64748b' }}
                >
                  Posted {post.time}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tips for Donors */}
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
            Donation Tips
          </h2>
          <div 
            className="professional-card max-w-4xl mx-auto text-left"
            style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 
                  className="text-xl font-bold mb-4"
                  style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
                >
                  Best Practices
                </h3>
                <ul 
                  className="space-y-2"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  <li>• Post food as soon as you know it's surplus</li>
                  <li>• Include clear descriptions and quantities</li>
                  <li>• Set realistic pickup timeframes</li>
                  <li>• Keep food properly stored until pickup</li>
                </ul>
              </div>
              <div>
                <h3 
                  className="text-xl font-bold mb-4"
                  style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
                >
                  What We Accept
                </h3>
                <ul 
                  className="space-y-2"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  <li>• Fresh fruits and vegetables</li>
                  <li>• Prepared meals and leftovers</li>
                  <li>• Bakery items and bread</li>
                  <li>• Non-perishable food items</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Post Food Modal */}
      {showPostForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div 
            className="bg-white rounded-lg p-6 w-full max-w-md"
            style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
          >
            <h3 
              className="text-xl font-bold mb-4"
              style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
            >
              Post New Food
            </h3>
            <form className="space-y-4">
              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  Food Type
                </label>
                <select 
                  className="w-full p-3 border rounded-lg"
                  style={{ 
                    background: darkMode ? '#334155' : '#ffffff',
                    borderColor: darkMode ? '#475569' : '#e2e8f0',
                    color: darkMode ? '#f8fafc' : '#0f172a'
                  }}
                >
                  <option>Fresh Vegetables</option>
                  <option>Bakery Items</option>
                  <option>Prepared Meals</option>
                  <option>Fruits</option>
                  <option>Dairy Products</option>
                </select>
              </div>
              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  Quantity
                </label>
                <input 
                  type="text" 
                  placeholder="e.g., 50 lbs, 25 items"
                  className="w-full p-3 border rounded-lg"
                  style={{ 
                    background: darkMode ? '#334155' : '#ffffff',
                    borderColor: darkMode ? '#475569' : '#e2e8f0',
                    color: darkMode ? '#f8fafc' : '#0f172a'
                  }}
                />
              </div>
              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  Expiry Time
                </label>
                <select 
                  className="w-full p-3 border rounded-lg"
                  style={{ 
                    background: darkMode ? '#334155' : '#ffffff',
                    borderColor: darkMode ? '#475569' : '#e2e8f0',
                    color: darkMode ? '#f8fafc' : '#0f172a'
                  }}
                >
                  <option>1 hour</option>
                  <option>2 hours</option>
                  <option>4 hours</option>
                  <option>1 day</option>
                  <option>2 days</option>
                </select>
              </div>
              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  Description
                </label>
                <textarea 
                  placeholder="Describe the food items..."
                  rows="3"
                  className="w-full p-3 border rounded-lg"
                  style={{ 
                    background: darkMode ? '#334155' : '#ffffff',
                    borderColor: darkMode ? '#475569' : '#e2e8f0',
                    color: darkMode ? '#f8fafc' : '#0f172a'
                  }}
                />
              </div>
              <div className="flex space-x-3">
                <button 
                  type="button"
                  className="btn btn-primary flex-1"
                  onClick={() => {
                    alert('Food posted successfully! Volunteers will be notified.');
                    setShowPostForm(false);
                  }}
                >
                  Post Food
                </button>
                <button 
                  type="button"
                  className="btn btn-secondary flex-1"
                  onClick={() => setShowPostForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Analytics Modal */}
      {showAnalytics && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div 
            className="bg-white rounded-lg p-6 w-full max-w-2xl"
            style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
          >
            <h3 
              className="text-xl font-bold mb-4"
              style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
            >
              Your Impact Analytics
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div 
                className="p-4 rounded-lg text-center"
                style={{ background: darkMode ? '#334155' : '#f8fafc' }}
              >
                <div 
                  className="text-2xl font-bold"
                  style={{ color: darkMode ? '#10b981' : '#059669' }}
                >
                  127
                </div>
                <div 
                  className="text-sm"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  Meals Donated
                </div>
              </div>
              <div 
                className="p-4 rounded-lg text-center"
                style={{ background: darkMode ? '#334155' : '#f8fafc' }}
              >
                <div 
                  className="text-2xl font-bold"
                  style={{ color: darkMode ? '#3b82f6' : '#2563eb' }}
                >
                  23
                </div>
                <div 
                  className="text-sm"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  Posts This Month
                </div>
              </div>
              <div 
                className="p-4 rounded-lg text-center"
                style={{ background: darkMode ? '#334155' : '#f8fafc' }}
              >
                <div 
                  className="text-2xl font-bold"
                  style={{ color: darkMode ? '#f59e0b' : '#d97706' }}
                >
                  89%
                </div>
                <div 
                  className="text-sm"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  Pickup Rate
                </div>
            </div>
              <div 
                className="p-4 rounded-lg text-center"
                style={{ background: darkMode ? '#334155' : '#f8fafc' }}
              >
                <div 
                  className="text-2xl font-bold"
                  style={{ color: darkMode ? '#ef4444' : '#dc2626' }}
                >
                  4.8
            </div>
                <div 
                  className="text-sm"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  Average Rating
            </div>
          </div>
        </div>
            <button 
              className="btn btn-primary w-full"
              onClick={() => setShowAnalytics(false)}
            >
              Close
            </button>
      </div>
        </div>
      )}
    </div>
  );
};

export default DonorDashboard;