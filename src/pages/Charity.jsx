import { motion } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useState } from 'react';

const Charity = () => {
  const { darkMode } = useDarkMode();
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const handleApplyToPartner = () => {
    setShowApplicationForm(true);
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
          <h1 className="page-title">Our Charity Partners</h1>
          <p className="page-subtitle">
            We partner with local shelters, food banks, and community centers to ensure every meal reaches those who need it most.
          </p>
        </motion.div>

        {/* Partner Organizations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 
            className="text-3xl font-bold text-center mb-12"
            style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
          >
            Partner Organizations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Hope Community Center",
                type: "Food Bank",
                location: "Downtown District",
                meals: "2,340",
                description: "Serving families in need with fresh meals and groceries"
              },
              {
                name: "Sunrise Shelter",
                type: "Homeless Shelter",
                location: "Eastside",
                meals: "1,890",
                description: "Providing warm meals and support to homeless individuals"
              },
              {
                name: "Kids First Foundation",
                type: "Children's Center",
                location: "Westside",
                meals: "1,650",
                description: "Ensuring children have access to nutritious meals"
              },
              {
                name: "Senior Care Network",
                type: "Senior Center",
                location: "Northside",
                meals: "1,200",
                description: "Supporting elderly community members with meal assistance"
              },
              {
                name: "Community Kitchen",
                type: "Soup Kitchen",
                location: "Central",
                meals: "3,200",
                description: "Daily meal service for anyone in need"
              },
              {
                name: "Family Support Services",
                type: "Social Services",
                location: "Southside",
                meals: "980",
                description: "Comprehensive support including food assistance"
              }
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="professional-card text-left"
                style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 
                    className="text-lg font-bold"
                    style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
                  >
                    {partner.name}
                  </h3>
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ 
                      background: darkMode ? '#334155' : '#f1f5f9',
                      color: darkMode ? '#cbd5e1' : '#475569'
                    }}
                  >
                    {partner.type}
                  </span>
                </div>
                <p 
                  className="text-sm mb-2"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  📍 {partner.location}
                </p>
                <p 
                  className="text-sm mb-3"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  {partner.description}
                </p>
                <div className="flex items-center justify-between">
                  <span 
                    className="text-xs font-medium"
                    style={{ color: darkMode ? '#94a3b8' : '#64748b' }}
                  >
                    Meals Served
                  </span>
                  <span 
                    className="text-lg font-bold"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {partner.meals}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statistics */}
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
            Community Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="professional-card"
            >
              <h3 className="card-value primary">12,450+</h3>
              <p className="card-label">Meals Delivered</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="professional-card"
            >
              <h3 className="card-value secondary">24</h3>
              <p className="card-label">Partner Organizations</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="professional-card"
            >
              <h3 className="card-value accent">6</h3>
              <p className="card-label">Districts Served</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Success Stories */}
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
            Success Stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div 
              className="professional-card"
              style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-light))' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 
                  className="text-xl font-bold"
                  style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
                >
                  Maria's Story
                </h3>
              </div>
              <p 
                className="text-sm leading-relaxed"
                style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
              >
                "Thanks to FoodSurplus Matcher, our shelter has been able to provide fresh, 
                nutritious meals to 50+ families every week. The partnership has transformed 
                how we serve our community."
              </p>
              <p 
                className="text-xs mt-3 font-medium"
                style={{ color: darkMode ? '#94a3b8' : '#64748b' }}
              >
                - Maria Rodriguez, Hope Community Center
              </p>
            </div>

            <div 
              className="professional-card"
              style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ background: 'linear-gradient(135deg, var(--accent), #3b82f6)' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 
                  className="text-xl font-bold"
                  style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
                >
                  Local Restaurant Impact
                </h3>
              </div>
              <p 
                className="text-sm leading-relaxed"
                style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
              >
                "We used to throw away 30% of our daily food. Now we donate it through 
                FoodSurplus Matcher and have helped feed over 200 families this month alone."
              </p>
              <p 
                className="text-xs mt-3 font-medium"
                style={{ color: darkMode ? '#94a3b8' : '#64748b' }}
              >
                - Tony's Bistro, Downtown District
              </p>
            </div>
          </div>
        </motion.div>

        {/* How to Partner */}
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
            Become a Partner
          </h2>
          <div 
            className="professional-card max-w-4xl mx-auto"
            style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
          >
            <p 
              className="text-lg mb-8"
              style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
            >
              Join our network of charity partners and help us reach more people in need.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-light))' }}
                >
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 
                  className="font-bold mb-2"
                  style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
                >
                  Apply Online
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  Complete our partnership application
                </p>
              </div>
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, var(--accent), #3b82f6)' }}
                >
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 
                  className="font-bold mb-2"
                  style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
                >
                  Verification
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  We verify your organization
                </p>
              </div>
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, #8b5cf6, #a855f7)' }}
                >
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 
                  className="font-bold mb-2"
                  style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
                >
                  Start Receiving
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  Begin receiving food donations
                </p>
              </div>
            </div>
            <button 
              className="btn btn-primary"
              onClick={handleApplyToPartner}
            >
              Apply to Partner
            </button>
          </div>
        </motion.div>
      </div>

      {/* Partnership Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
          <div 
            className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-2xl my-2 sm:my-4 shadow-2xl border"
            style={{ 
              background: darkMode ? '#1e293b' : '#ffffff',
              borderColor: darkMode ? '#334155' : '#e2e8f0'
            }}
          >
            <h3 
              className="text-2xl font-bold mb-6"
              style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
            >
              Partnership Application
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                  >
                    Organization Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
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
                    Organization Type *
                  </label>
                  <select 
                    required
                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    style={{ 
                      background: darkMode ? '#334155' : '#ffffff',
                      borderColor: darkMode ? '#475569' : '#e2e8f0',
                      color: darkMode ? '#f8fafc' : '#0f172a'
                    }}
                  >
                    <option value="">Select Type</option>
                    <option>Food Bank</option>
                    <option>Homeless Shelter</option>
                    <option>Community Center</option>
                    <option>Soup Kitchen</option>
                    <option>Church/Religious Organization</option>
                    <option>Non-Profit Organization</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                  >
                    Contact Person *
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
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
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    style={{ 
                      background: darkMode ? '#334155' : '#ffffff',
                      borderColor: darkMode ? '#475569' : '#e2e8f0',
                      color: darkMode ? '#f8fafc' : '#0f172a'
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                  >
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    required
                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
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
                    Website
                  </label>
                  <input 
                    type="url" 
                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    style={{ 
                      background: darkMode ? '#334155' : '#ffffff',
                      borderColor: darkMode ? '#475569' : '#e2e8f0',
                      color: darkMode ? '#f8fafc' : '#0f172a'
                    }}
                  />
                </div>
              </div>

              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  Address *
                </label>
                <textarea 
                  required
                  rows="3"
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
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
                  How many people do you serve daily? *
                </label>
                <select 
                  required
                  className="w-full p-3 border rounded-lg"
                  style={{ 
                    background: darkMode ? '#334155' : '#ffffff',
                    borderColor: darkMode ? '#475569' : '#e2e8f0',
                    color: darkMode ? '#f8fafc' : '#0f172a'
                  }}
                >
                  <option value="">Select Range</option>
                  <option>1-25 people</option>
                  <option>26-50 people</option>
                  <option>51-100 people</option>
                  <option>101-200 people</option>
                  <option>200+ people</option>
                </select>
              </div>

              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  Tell us about your organization and why you'd like to partner with us *
                </label>
                <textarea 
                  required
                  rows="4"
                  placeholder="Describe your organization's mission, current food programs, and how you would use donated food..."
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
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
                    alert('Application submitted successfully! We will review your application and contact you within 3-5 business days.');
                    setShowApplicationForm(false);
                  }}
                >
                  Submit Application
                </button>
                <button 
                  type="button"
                  className="btn btn-secondary flex-1"
                  onClick={() => setShowApplicationForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Charity;