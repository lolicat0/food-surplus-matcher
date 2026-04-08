import { motion } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';
import GoogleMap from '../components/map/GoogleMap';
import { useState } from 'react';

const VolunteerDashboard = () => {
  const { darkMode } = useDarkMode();
  const [claimedPickups, setClaimedPickups] = useState(new Set());

  const handleClaimPickup = (pickupId) => {
    if (claimedPickups.has(pickupId)) {
      alert('This pickup has already been claimed!');
      return;
    }
    
    setClaimedPickups(prev => new Set([...prev, pickupId]));
    alert(`Pickup #${pickupId} claimed successfully! You will receive pickup details via email.`);
  };

  const handleContactSupport = () => {
    window.open('mailto:support@foodsurplus.com?subject=Volunteer Support Request', '_blank');
  };

  // Sample food donation locations - Hotels and Bakeries with ping animations
  const foodMarkers = [
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
    },
    {
      id: 9,
      lat: 40.7282,
      lng: -73.7949,
      foodName: "Luxury Resort",
      description: "Fine Dining Surplus",
      status: "available",
      quantity: "40 meals",
      expiry: "2 hours",
      type: "hotel",
      category: "hotel"
    },
    {
      id: 10,
      lat: 40.6892,
      lng: -74.0445,
      foodName: "Morning Glory Bakery",
      description: "Muffins & Breakfast Items",
      status: "available",
      quantity: "30 items",
      expiry: "4 hours",
      type: "bakery",
      category: "bakery"
    }
  ];

  const handleMarkerClick = (marker) => {
    console.log('Marker clicked:', marker);
    // You can add modal or detailed view here
    alert(`${marker.foodName}\n${marker.description}\nQuantity: ${marker.quantity}\nExpires: ${marker.expiry}`);
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
          <h1 className="page-title">Volunteer Dashboard</h1>
          <p className="page-subtitle">
            See nearby food donations and accept pickups with one click. Help make a difference in your community.
          </p>
        </motion.div>

        {/* Live Map Section */}
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
            Live Food Map
          </h2>
          <div 
            className="professional-card p-0 overflow-hidden"
            style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
          >
            <div className="relative h-96 w-full">
              {/* Real Google Map */}
              <GoogleMap 
                markers={foodMarkers} 
                onMarkerClick={handleMarkerClick}
              />


              {/* Map Info Overlay */}
              <div 
                className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 z-10"
                style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span 
                    className="text-xs font-medium"
                    style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
                  >
                    Live Updates
                  </span>
                </div>
                <p 
                  className="text-xs"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  {foodMarkers.length} locations available
                </p>
              </div>

              {/* Map Legend */}
              <div 
                className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 z-10"
                style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
              >
                <h4 
                  className="text-sm font-bold mb-2"
                  style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
                >
                  Locations
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500 animate-ping"></div>
                    <span 
                      className="text-xs font-medium"
                      style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                    >
                      Hotels
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-orange-500 animate-ping"></div>
                    <span 
                      className="text-xs font-medium"
                      style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                    >
                      Bakeries
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Available Pickups */}
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
            Available Pickups
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 101,
                title: "Fresh Vegetables",
                donor: "Green Grocery Store",
                location: "2.3 miles away",
                quantity: "15 lbs",
                time: "Pickup by 6:00 PM",
                status: "Available"
              },
              {
                id: 102,
                title: "Bread & Pastries",
                donor: "Corner Bakery",
                location: "1.8 miles away",
                quantity: "25 items",
                time: "Pickup by 8:00 PM",
                status: "Available"
              },
              {
                id: 103,
                title: "Prepared Meals",
                donor: "Tony's Restaurant",
                location: "3.1 miles away",
                quantity: "12 servings",
                time: "Pickup by 7:30 PM",
                status: "Available"
              },
              {
                id: 104,
                title: "Fruits & Smoothies",
                donor: "Health Food Cafe",
                location: "1.2 miles away",
                quantity: "8 containers",
                time: "Pickup by 5:00 PM",
                status: "Available"
              },
              {
                id: 105,
                title: "Sandwiches",
                donor: "Subway",
                location: "0.9 miles away",
                quantity: "20 sandwiches",
                time: "Pickup by 9:00 PM",
                status: "Available"
              },
              {
                id: 106,
                title: "Salad Bar Items",
                donor: "Fresh Market",
                location: "2.7 miles away",
                quantity: "30 portions",
                time: "Pickup by 6:30 PM",
                status: "Available"
              }
            ].map((pickup, index) => (
              <motion.div
                key={pickup.id}
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
                    {pickup.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {pickup.status}
                  </span>
                </div>
                <p 
                  className="text-sm mb-2"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  🏪 {pickup.donor}
                </p>
                <p 
                  className="text-sm mb-2"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  📍 {pickup.location}
                </p>
                <p 
                  className="text-sm mb-2"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  📦 {pickup.quantity}
                </p>
                <p 
                  className="text-sm mb-4"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  ⏰ {pickup.time}
                </p>
                <button 
                  className={`btn w-full text-sm py-2 ${
                    claimedPickups.has(pickup.id) 
                      ? 'btn-secondary' 
                      : 'btn-primary'
                  }`}
                  onClick={() => handleClaimPickup(pickup.id)}
                  disabled={claimedPickups.has(pickup.id)}
                >
                  {claimedPickups.has(pickup.id) ? 'Claimed ✓' : 'Claim Pickup'}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Your Volunteer Stats */}
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
            Your Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="professional-card"
            >
              <h3 className="card-value primary">23</h3>
              <p className="card-label">Pickups Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="professional-card"
            >
              <h3 className="card-value secondary">156</h3>
              <p className="card-label">Meals Delivered</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="professional-card"
            >
              <h3 className="card-value accent">12</h3>
              <p className="card-label">Families Helped</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 
            className="text-3xl font-bold text-center mb-12"
            style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
          >
            Recent Activity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                action: "Delivered",
                item: "Fresh Vegetables",
                location: "Hope Community Center",
                time: "2 hours ago",
                status: "completed"
              },
              {
                action: "Picked up",
                item: "Bread & Pastries",
                location: "Corner Bakery",
                time: "4 hours ago",
                status: "completed"
              },
              {
                action: "Delivered",
                item: "Prepared Meals",
                location: "Sunrise Shelter",
                time: "6 hours ago",
                status: "completed"
              },
              {
                action: "Claimed",
                item: "Fruits & Smoothies",
                location: "Health Food Cafe",
                time: "8 hours ago",
                status: "in-progress"
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="professional-card text-left"
                style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 
                    className="text-lg font-bold"
                    style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
                  >
                    {activity.action} {activity.item}
                  </h3>
                  <span 
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      activity.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {activity.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </div>
                <p 
                  className="text-sm mb-2"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  📍 {activity.location}
                </p>
                <p 
                  className="text-xs"
                  style={{ color: darkMode ? '#94a3b8' : '#64748b' }}
                >
                  {activity.time}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Volunteer Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <h2 
            className="text-3xl font-bold mb-8"
            style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
          >
            Volunteer Resources
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
                  Safety Guidelines
                </h3>
                <ul 
                  className="space-y-2"
                  style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                >
                  <li>• Always wear gloves when handling food</li>
                  <li>• Check food temperature and quality</li>
                  <li>• Follow proper hygiene practices</li>
                  <li>• Report any food safety concerns</li>
                </ul>
              </div>
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
                  <li>• Arrive on time for pickups</li>
                  <li>• Communicate with donors clearly</li>
                  <li>• Handle food with care during transport</li>
                  <li>• Update pickup status promptly</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t" style={{ borderColor: darkMode ? '#334155' : '#e2e8f0' }}>
              <h3 
                className="text-lg font-bold mb-4"
                style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
              >
                Need Help?
              </h3>
              <p 
                className="text-sm mb-4"
                style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
              >
                Contact our volunteer support team for assistance with pickups, deliveries, or any questions.
              </p>
              <button 
                className="btn btn-secondary"
                onClick={handleContactSupport}
              >
                Contact Support
              </button>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;