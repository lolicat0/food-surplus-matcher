
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import GoogleMap from '../components/map/GoogleMap';

const LandingPage = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  
  // Set document title with username
  useDocumentTitle('Home');

  // Sample food donation locations for homepage - Hotels and Bakeries with ping animations
  const homepageMarkers = [
    {
      id: 1,
      lat: 40.7128,
      lng: -74.0060,
      foodName: "Grand Central Hotel",
      description: "Buffet Leftovers & Continental Breakfast",
      status: "available",
      quantity: "45 meals",
      expiry: "2 hours",
      type: "hotel",
      category: "hotel",
      hasPing: true
    },
    {
      id: 2,
      lat: 40.7589,
      lng: -73.9851,
      foodName: "Artisan Bakery",
      description: "Fresh Bread & Pastries",
      status: "available",
      quantity: "60 items",
      expiry: "1 day",
      type: "bakery",
      category: "bakery",
      hasPing: true
    },
    {
      id: 3,
      lat: 40.7505,
      lng: -73.9934,
      foodName: "Plaza Hotel",
      description: "Room Service & Restaurant Surplus",
      status: "available",
      quantity: "35 meals",
      expiry: "3 hours",
      type: "hotel",
      category: "hotel",
      hasPing: true
    },
    {
      id: 4,
      lat: 40.7614,
      lng: -73.9776,
      foodName: "Sweet Dreams Bakery",
      description: "Cakes, Cookies & Desserts",
      status: "available",
      quantity: "25 items",
      expiry: "4 hours",
      type: "bakery",
      category: "bakery",
      hasPing: true
    },
    {
      id: 5,
      lat: 40.7282,
      lng: -73.7949,
      foodName: "Brooklyn Heights Hotel",
      description: "Breakfast Buffet & Lunch Surplus",
      status: "available",
      quantity: "40 meals",
      expiry: "1 hour",
      type: "hotel",
      category: "hotel",
      hasPing: true
    },
    {
      id: 6,
      lat: 40.6892,
      lng: -74.0445,
      foodName: "Corner Bakery",
      description: "Sandwiches & Fresh Bread",
      status: "available",
      quantity: "40 items",
      expiry: "2 hours",
      type: "bakery",
      category: "bakery"
    },
    {
      id: 7,
      lat: 40.7505,
      lng: -73.9934,
      foodName: "Boutique Hotel",
      description: "Breakfast Buffet & Snacks",
      status: "available",
      quantity: "30 meals",
      expiry: "1 hour",
      type: "hotel",
      category: "hotel"
    },
    {
      id: 8,
      lat: 40.7614,
      lng: -73.9776,
      foodName: "French Patisserie",
      description: "Croissants & French Pastries",
      status: "available",
      quantity: "35 items",
      expiry: "3 hours",
      type: "bakery",
      category: "bakery"
    }
  ];

  const handleMarkerClick = (marker) => {
    console.log('Homepage marker clicked:', marker);
    // Navigate to volunteer dashboard to see more details
    navigate('/volunteer');
  };

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{
        background: darkMode 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' 
          : 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #f8fafc 100%)'
      }}
    >
      {/* Hero */}
      <section className="relative px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
            style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
          >
            Turn{' '}
            <span 
              className="bg-gradient-to-r from-emerald-500 to-red-500 bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(90deg, #10b981 0%, #ef4444 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Surplus
            </span>{' '}
            into{' '}
            <span 
              className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Hope
            </span>
          </h1>

          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12"
            style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
          >
            Connect food donors with volunteers to reduce waste and feed those in need — instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/donor')}
              className="btn btn-primary"
            >
              Post Food
            </button>
            <button
              onClick={() => navigate('/volunteer')}
              className="btn btn-primary"
            >
              Find Food
            </button>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section 
        className="py-20"
        style={{ 
          background: darkMode ? '#1e293b' : '#ffffff',
          borderTop: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
          borderBottom: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            { value: '12,450', label: 'Meals Saved' },
            { value: '387', label: 'Active Donors' },
            { value: '219', label: 'Volunteers' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              className="stat-card"
            >
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Live Map */}
      <section 
        className="py-20"
        style={{ 
          background: darkMode ? '#0f172a' : '#f8fafc',
          borderTop: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`
        }}
      >
        <div className="container max-w-6xl mx-auto text-center px-4">
          <h2 
            className="text-4xl font-bold mb-6"
            style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
          >
            Live Food Network
          </h2>
          <p 
            className="text-lg mb-12 max-w-2xl mx-auto"
            style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
          >
            Real-time map showing nearby food donations and volunteer pickups.
          </p>
          <div 
            className="relative mx-auto w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border"
            style={{
              borderColor: darkMode ? '#334155' : '#e2e8f0'
            }}
          >
            {/* Real Google Map */}
            <GoogleMap 
              markers={homepageMarkers} 
              onMarkerClick={handleMarkerClick}
            />
            
            {/* Map Info Overlay */}
            <div 
              className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 z-10"
              style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
            >
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span 
                  className="text-xs font-medium"
                  style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
                >
                  Live Network
                </span>
              </div>
              <p 
                className="text-xs"
                style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
              >
                {homepageMarkers.length} active locations
              </p>
            </div>

            {/* Map Legend */}
            <div 
              className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 z-10"
              style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
            >
              <h4 
                className="text-xs font-bold mb-2"
                style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
              >
                Locations
              </h4>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500 animate-ping"></div>
                  <span 
                    className="text-xs"
                    style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                  >
                    Hotels
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500 animate-ping"></div>
                  <span 
                    className="text-xs"
                    style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                  >
                    Bakeries
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button 
            className="mt-12 btn btn-primary"
            onClick={() => window.open('https://maps.google.com', '_blank')}
          >
            View Full Map
          </button>
        </div>
      </section>

      {/* CTA — NOW LINKS TO LOGIN */}
      <section 
        className="py-24"
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' 
            : 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)'
        }}
      >
        <div className="container text-center max-w-4xl mx-auto px-4">
          <h2 
            className="text-4xl md:text-6xl font-bold mb-8"
            style={{ color: '#f8fafc' }}
          >
            Join the Movement
          </h2>
          <p 
            className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#cbd5e1' }}
          >
            Whether you have extra food or time to help — we connect you to someone who needs it.
          </p>
          <Link to="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary text-lg px-12 py-4"
            >
              Get Started Now
            </motion.button>
          </Link>
        </div>
      </section>

      
    </div>
  );
};

export default LandingPage;