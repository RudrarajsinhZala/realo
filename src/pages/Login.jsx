import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import logo from '../assets/logo-light.png';
import styles from '../css/Login.module.css';

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
    <div className={styles.loginContainer}>
      <div className="fixed w-72 h-72 bg-blue-900/10 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="fixed w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl -bottom-20 -right-20"></div>

      <div className={styles.glass}>
        <div className="text-center mb-8">
          <img src={logo} alt="Realo Logo" className="w-20 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-[#1A237E]">REALO</h1>
          <p className="text-sm font-semibold text-[#D4AF37] uppercase tracking-widest mt-2">
            Secure Agent Access
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <input 
            type="email" 
            placeholder="example@email.com" 
            className={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className={styles.inputField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <div className="flex justify-between text-xs text-slate-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>

          <button type="submit" className={styles.btnGold}>
            Log in to Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;