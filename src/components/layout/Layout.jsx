  import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useAuth } from '../../contexts/AuthContext';
import Logo from '../ui/Logo';
import ThemeToggle from '../ui/ThemeToggle';
import { FaUserCircle } from 'react-icons/fa';

const Layout = ({ children }) => {
  const { darkMode } = useDarkMode();
  const { user, logout, loading } = useAuth();
  const location = useLocation();
  
  const tabs = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about-us', label: 'About Us', path: '/about' },
    { id: 'donor', label: 'Donor', path: '/donor' },
    { id: 'charity', label: 'Charity', path: '/charity' },
    { id: 'volunteer', label: 'Volunteer', path: '/volunteer' },
  ];

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{
        background: darkMode 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' 
          : 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #f8fafc 100%)'
      }}
    >
      {/* Professional Header */}
      <header 
        className="sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300"
        style={{
          background: darkMode 
            ? 'rgba(15, 23, 42, 0.8)' 
            : 'rgba(255, 255, 255, 0.8)',
          borderColor: darkMode ? '#334155' : '#e2e8f0'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left Side */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Navigation Tabs - Center/Right */}
            <nav className="hidden md:flex items-center space-x-1">
              {tabs.map((tab) => {
                const isActive = location.pathname === tab.path;
                return (
                <Link
                  key={tab.id}
                  to={tab.path}
                  style={{
                    backgroundColor: isActive 
                      ? (darkMode ? '#059669' : '#10b981') 
                      : 'transparent',
                    color: isActive 
                      ? '#ffffff' 
                      : (darkMode ? '#cbd5e1' : '#475569'),
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.target.style.backgroundColor = darkMode ? 'rgba(51, 65, 85, 0.5)' : '#e2e8f0';
                      e.target.style.color = darkMode ? '#ffffff' : '#000000';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = darkMode ? '#cbd5e1' : '#475569';
                    }
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-lg ${
                    isActive ? 'shadow-lg' : ''
                  }`}
                >
                  {tab.label}
                </Link>
                );
              })}
            </nav>

            {/* Theme Toggle & User Profile - Right Side */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              {/* User Profile or Login */}
              {loading ? (
                <div className="px-3 py-1.5 text-sm text-gray-500">
                  Loading...
                </div>
              ) : user ? (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/profile"
                    className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-80 flex items-center space-x-2"
                    style={{
                      background: darkMode ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                      color: darkMode ? '#10b981' : '#059669',
                      border: `1px solid ${darkMode ? '#10b981' : '#059669'}`
                    }}
                  >
                    <FaUserCircle className="text-base" />
                    <span>Hi, {user.name || user.email?.split('@')[0] || 'User'}</span>
                  </Link>
                  <button
                    onClick={logout}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 hover:opacity-80"
                    style={{
                      background: darkMode ? '#ef4444' : '#dc2626',
                      color: '#ffffff'
                    }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{
                    background: darkMode ? '#10b981' : '#059669',
                    color: '#ffffff'
                  }}
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden border-t py-2" style={{ borderColor: darkMode ? '#334155' : '#e2e8f0' }}>
            <div className="flex overflow-x-auto scrollbar-hide space-x-1">
              {tabs.map((tab) => {
                const isActive = location.pathname === tab.path;
                return (
                <Link
                  key={tab.id}
                  to={tab.path}
                  style={{
                    backgroundColor: isActive 
                      ? (darkMode ? '#059669' : '#10b981') 
                      : 'transparent',
                    color: isActive 
                      ? '#ffffff' 
                      : (darkMode ? '#cbd5e1' : '#475569'),
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.target.style.backgroundColor = darkMode ? 'rgba(51, 65, 85, 0.5)' : '#e2e8f0';
                      e.target.style.color = darkMode ? '#ffffff' : '#000000';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = darkMode ? '#cbd5e1' : '#475569';
                    }
                  }}
                  className={`flex-shrink-0 px-3 py-2 text-xs font-medium rounded-md ${
                    isActive ? '' : ''
                  }`}
                >
                  {tab.label}
                </Link>
                );
              })}
              
              {/* Mobile User Profile or Login */}
              {loading ? (
                <div className="px-2 py-1 text-xs text-gray-500 ml-2">
                  Loading...
                </div>
              ) : user ? (
                <div className="flex items-center space-x-2 ml-2">
                  <Link
                    to="/profile"
                    className="px-2 py-1 text-xs font-medium rounded-md transition-all duration-200 hover:opacity-80 flex items-center space-x-1"
                    style={{
                      background: darkMode ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                      color: darkMode ? '#10b981' : '#059669',
                      border: `1px solid ${darkMode ? '#10b981' : '#059669'}`
                    }}
                  >
                    <FaUserCircle className="text-sm" />
                    <span>Hi, {user.name || user.email?.split('@')[0] || 'User'}</span>
                  </Link>
                  <button
                    onClick={logout}
                    className="px-2 py-1 text-xs font-medium rounded-md transition-all duration-200 hover:opacity-80"
                    style={{
                      background: darkMode ? '#ef4444' : '#dc2626',
                      color: '#ffffff'
                    }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex-shrink-0 px-3 py-2 text-xs font-medium rounded-md transition-all duration-200"
                  style={{
                    background: darkMode ? '#10b981' : '#059669',
                    color: '#ffffff'
                  }}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content — Professional Layout */}
      <main className="container mx-auto px-4 pt-8 pb-16">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer 
        className="py-8 text-center text-sm border-t transition-colors duration-300"
        style={{
          background: darkMode ? '#0f172a' : '#ffffff',
          borderColor: darkMode ? '#334155' : '#e2e8f0',
          color: darkMode ? '#94a3b8' : '#64748b'
        }}
      >
        <div className="container mx-auto px-4">
          <p className="mb-2">© 2025 FoodSurplus Matcher — Turning Surplus into Hope</p>
          <p className="text-xs opacity-75">Connecting communities through food sharing</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;