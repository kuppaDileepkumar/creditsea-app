import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserDashboard from './pages/User/UserDashboard';
import VerifierDashboard from './pages/Verifier/VerifierDashboard';
import LoanStatus from './pages/User/ApplicationForm';
import TopBar from './components/topbar';
import Sidebar from './components/sidebar';

const DashboardLayout = ({ children }) => (
  <div>
    <TopBar />
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '20px', flex: 1 }}>
        {children}
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route (no layout) */}
        <Route path="/" element={<Login />} />

        {/* Dashboard routes (wrapped in layout) */}
        <Route
          path="/admin/dashboard"
          element={
            <DashboardLayout>
              <AdminDashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/user/dashboard"
          element={
            <DashboardLayout>
              <UserDashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/verifier/dashboard"
          element={
            <DashboardLayout>
              <VerifierDashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/user/status"
          element={
            <DashboardLayout>
              <LoanStatus />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
