import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isUserRoute = location.pathname.startsWith('/user');
  if (isUserRoute) {
    return null; // Don't render sidebar for user pages
  }

  const menuItems = ['Dashboard', 'Loans', 'Reports', 'Settings', 'Verifier'];

  const handleClick = (item) => {
    if (item === 'Dashboard') {
      navigate('/admin/dashboard');
    } else if (item === 'Verifier') {
      navigate('/verifier/dashboard');
    } 
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '220px',
          height: '100vh',
          backgroundColor: '#f1f5f9',
          padding: '20px',
          borderRight: '1px solid #ddd',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <img src="https://via.placeholder.com/40" alt="profile" style={{ borderRadius: '50%' }} />
        </div>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => handleClick(item)}
              style={{
                padding: '10px',
                marginBottom: '8px',
                cursor: 'pointer',
                borderRadius: '4px',
                transition: 'background 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.background = '#e2e8f0')}
              onMouseOut={(e) => (e.target.style.background = 'transparent')}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
