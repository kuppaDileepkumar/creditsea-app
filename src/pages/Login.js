import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === 'admin') navigate('/admin/dashboard');
    else if (role === 'user') navigate('/user/dashboard');
    else if (role === 'verifier') navigate('/verifier/dashboard');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={() => handleLogin('admin')}>Login as Admin</button>
      <button onClick={() => handleLogin('user')}>Login as User</button>
      <button onClick={() => handleLogin('verifier')}>Login as Verifier</button>
    </div>
  );
}

export default Login;
