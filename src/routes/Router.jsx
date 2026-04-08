import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import LandingPage from '../pages/LandingPage';
import AboutUs from '../pages/AboutUs';
import DonorDashboard from '../pages/DonorDashboard';
import Charity from '../pages/Charity';
import VolunteerDashboard from '../pages/VolunteerDashboard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes wrapped in Layout */}
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/about" element={<Layout><AboutUs /></Layout>} />
        <Route path="/donor" element={<Layout><DonorDashboard /></Layout>} />
        <Route path="/charity" element={<Layout><Charity /></Layout>} />
        <Route path="/volunteer" element={<Layout><VolunteerDashboard /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/signup" element={<Layout><Signup /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />

        {/* Fallback route (catch-all) */}
        <Route path="*" element={<Layout><LandingPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;