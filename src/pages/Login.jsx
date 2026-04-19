import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import logo from '../assets/logo-light.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F5F5F5]">
      {/* Background Blobs for Atmosphere */}
      <div className="fixed w-72 h-72 bg-blue-900/10 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="fixed w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl -bottom-20 -right-20"></div>

      <div className="glass w-full max-w-md p-8 z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <img src={logo} alt="Realo Logo" className="w-20 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-[var(--color-navy)]">REALO</h1>
          <p className="text-sm font-semibold text-[var(--color-gold)] uppercase tracking-widest mt-2">
            Secure Agent Access
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <input 
              type="email" 
              placeholder="example@email.com" 
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <input 
              type="password" 
              placeholder="Password" 
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="flex justify-between text-xs text-slate-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>

          <button type="submit" className="btn-gold w-full mt-4">
            Log in to Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;