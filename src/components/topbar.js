import React, { useState, useEffect } from 'react';
import { Menu, Bell, MessageCircle, ChevronDown } from 'lucide-react';

const TopBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const role = localStorage.getItem('userRole') || 'Guest';
    setUserRole(role);
  }, []);

  const handleRoleChange = (role) => {
    setUserRole(role);
    localStorage.setItem('userRole', role);
    setShowDropdown(false);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#1e293b',
      color: '#fff',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Menu size={24} />
        <h2 style={{ margin: 0 }}>CreditSea</h2>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', position: 'relative' }}>
        <Bell size={20} />
        <MessageCircle size={20} />
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <img src="https://via.placeholder.com/30" alt="profile" style={{ borderRadius: '50%' }} />
          <span>{userRole}</span>
          <ChevronDown size={16} />
        </div>
        {showDropdown && (
          <div style={{
            position: 'absolute',
            top: '45px',
            right: '0',
            backgroundColor: '#fff',
            color: '#000',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '150px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: '10px' }}>
              <li onClick={() => handleRoleChange('Guest')} style={{ padding: '8px', cursor: 'pointer', color: 'red' }}>Logout</li>
              <li onClick={() => handleRoleChange('Admin')} 
              style={{
              padding: '8px',
              cursor: 'pointer',
              fontWeight: userRole === 'Admin' ? 'bold' : 'normal',
            }}
>
  Admin
</li>

            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
