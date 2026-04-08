import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useAuth } from '../contexts/AuthContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Profile = () => {
  const { darkMode } = useDarkMode();
  const { user, logout, loading } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  
  // Set document title with username
  useDocumentTitle('My Profile');
  
  // Initialize profile data with user data
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    }
  });

  // Update profile data when user data changes
  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        role: user.role || '',
        address: user.address || {
          street: '',
          city: '',
          state: '',
          zipCode: ''
        }
      });
    }
  }, [user]);

  const handleSave = () => {
    // Here you would typically save to backend
    console.log('Saving profile:', profileData);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin': return '#ef4444';
      case 'donor': return '#10b981';
      case 'volunteer': return '#3b82f6';
      case 'charity': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'admin': return '👑';
      case 'donor': return '🍽️';
      case 'volunteer': return '🤝';
      case 'charity': return '🏢';
      default: return '👤';
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div 
        className="page-container flex items-center justify-center"
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' 
            : 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #f8fafc 100%)'
        }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p style={{ color: darkMode ? '#cbd5e1' : '#475569' }}>Loading profile...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    window.location.href = '/login';
    return null;
  }

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
          <h1 className="page-title">My Profile</h1>
          <p className="page-subtitle">
            Manage your account settings and personal information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div 
              className="professional-card text-center"
              style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
            >
              {/* Profile Image */}
              <div className="mb-6">
                <div 
                  className="w-32 h-32 rounded-full mx-auto flex items-center justify-center text-4xl font-bold text-white mb-4"
                  style={{ 
                    background: `linear-gradient(135deg, ${getRoleColor(profileData.role)}, ${getRoleColor(profileData.role)}dd)`
                  }}
                >
                  {getInitials(profileData.name)}
                </div>
                <button 
                  className="text-sm text-emerald-500 hover:text-emerald-400 transition-colors"
                  onClick={() => document.getElementById('imageUpload').click()}
                >
                  Change Photo
                </button>
                <input type="file" id="imageUpload" className="hidden" accept="image/*" />
              </div>

              {/* User Info */}
              <h2 
                className="text-2xl font-bold mb-2"
                style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
              >
                {profileData.name || 'User Name'}
              </h2>
              
              <div 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4"
                style={{
                  background: `${getRoleColor(profileData.role)}20`,
                  color: getRoleColor(profileData.role),
                  border: `1px solid ${getRoleColor(profileData.role)}40`
                }}
              >
                <span className="mr-2">{getRoleIcon(profileData.role)}</span>
                {profileData.role?.charAt(0).toUpperCase() + profileData.role?.slice(1) || 'User'}
              </div>

              <p 
                className="text-sm mb-6"
                style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
              >
                {profileData.email}
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="btn btn-primary w-full"
                >
                  {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                </button>
                <button
                  onClick={handleLogout}
                  className="btn btn-secondary w-full"
                  style={{
                    background: darkMode ? '#ef4444' : '#dc2626',
                    color: '#ffffff'
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </motion.div>

          {/* Profile Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div 
              className="professional-card"
              style={{ background: darkMode ? '#1e293b' : '#ffffff' }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 
                  className="text-xl font-bold"
                  style={{ color: darkMode ? '#f8fafc' : '#0f172a' }}
                >
                  Personal Information
                </h3>
                {isEditing && (
                  <button
                    onClick={handleSave}
                    className="btn btn-primary"
                  >
                    Save Changes
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                  >
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      style={{ 
                        background: darkMode ? '#334155' : '#ffffff',
                        borderColor: darkMode ? '#475569' : '#e2e8f0',
                        color: darkMode ? '#f8fafc' : '#0f172a'
                      }}
                    />
                  ) : (
                    <p 
                      className="p-3 rounded-lg"
                      style={{ 
                        background: darkMode ? '#334155' : '#f8fafc',
                        color: darkMode ? '#f8fafc' : '#0f172a'
                      }}
                    >
                      {profileData.name || 'Not provided'}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                  >
                    Email Address
                  </label>
                  <p 
                    className="p-3 rounded-lg"
                    style={{ 
                      background: darkMode ? '#334155' : '#f8fafc',
                      color: darkMode ? '#f8fafc' : '#0f172a'
                    }}
                  >
                    {profileData.email}
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                  >
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      style={{ 
                        background: darkMode ? '#334155' : '#ffffff',
                        borderColor: darkMode ? '#475569' : '#e2e8f0',
                        color: darkMode ? '#f8fafc' : '#0f172a'
                      }}
                    />
                  ) : (
                    <p 
                      className="p-3 rounded-lg"
                      style={{ 
                        background: darkMode ? '#334155' : '#f8fafc',
                        color: darkMode ? '#f8fafc' : '#0f172a'
                      }}
                    >
                      {profileData.phone || 'Not provided'}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                  >
                    Address
                  </label>
                  {isEditing ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Street"
                        value={profileData.address.street}
                        onChange={(e) => setProfileData({
                          ...profileData, 
                          address: {...profileData.address, street: e.target.value}
                        })}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        style={{ 
                          background: darkMode ? '#334155' : '#ffffff',
                          borderColor: darkMode ? '#475569' : '#e2e8f0',
                          color: darkMode ? '#f8fafc' : '#0f172a'
                        }}
                      />
                      <input
                        type="text"
                        placeholder="City"
                        value={profileData.address.city}
                        onChange={(e) => setProfileData({
                          ...profileData, 
                          address: {...profileData.address, city: e.target.value}
                        })}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        style={{ 
                          background: darkMode ? '#334155' : '#ffffff',
                          borderColor: darkMode ? '#475569' : '#e2e8f0',
                          color: darkMode ? '#f8fafc' : '#0f172a'
                        }}
                      />
                      <input
                        type="text"
                        placeholder="State"
                        value={profileData.address.state}
                        onChange={(e) => setProfileData({
                          ...profileData, 
                          address: {...profileData.address, state: e.target.value}
                        })}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        style={{ 
                          background: darkMode ? '#334155' : '#ffffff',
                          borderColor: darkMode ? '#475569' : '#e2e8f0',
                          color: darkMode ? '#f8fafc' : '#0f172a'
                        }}
                      />
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        value={profileData.address.zipCode}
                        onChange={(e) => setProfileData({
                          ...profileData, 
                          address: {...profileData.address, zipCode: e.target.value}
                        })}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        style={{ 
                          background: darkMode ? '#334155' : '#ffffff',
                          borderColor: darkMode ? '#475569' : '#e2e8f0',
                          color: darkMode ? '#f8fafc' : '#0f172a'
                        }}
                      />
                    </div>
                  ) : (
                    <p 
                      className="p-3 rounded-lg"
                      style={{ 
                        background: darkMode ? '#334155' : '#f8fafc',
                        color: darkMode ? '#f8fafc' : '#0f172a'
                      }}
                    >
                      {profileData.address.street && profileData.address.city 
                        ? `${profileData.address.street}, ${profileData.address.city}, ${profileData.address.state} ${profileData.address.zipCode}`
                        : 'Not provided'
                      }
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
