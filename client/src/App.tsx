import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import MedicalHistory from './pages/MedicalHistory';
import SpecialistFinder from './pages/SpecialistFinder';
import DonationSystem from './pages/DonationSystem';
import TherapyServices from './pages/TherapyServices';
import DeviceRegistry from './pages/DeviceRegistry';
import CampaignPage from './pages/CampaignPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Patient Routes */}
              <Route path="/dashboard/patient" element={<PatientDashboard />} />
              <Route path="/medical-history" element={<MedicalHistory />} />
              <Route path="/specialists" element={<SpecialistFinder />} />
              <Route path="/therapy-services" element={<TherapyServices />} />
              
              {/* Doctor Routes */}
              <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
              
              {/* Admin Routes */}
              <Route path="/dashboard/admin" element={<AdminDashboard />} />
              <Route path="/devices-registry" element={<DeviceRegistry />} />
              
              {/* Public Routes */}
              <Route path="/donate" element={<DonationSystem />} />
              <Route path="/campaign" element={<CampaignPage />} />
              
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
