import React from 'react';
import { useAuth } from '../AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <h2 className="text-2xl font-bold text-[#1A237E]">Agent Dashboard</h2>
        <button 
          onClick={logout} 
          className="text-sm bg-[#1A237E] text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all"
        >
          Logout
        </button>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.card}>
          <p className="text-xs uppercase tracking-wider text-slate-500">Active Leads</p>
          <p className="text-3xl font-bold text-[#1A237E]">24</p>
        </div>
        <div className={styles.card}>
          <p className="text-xs uppercase tracking-wider text-slate-500">Pending Deals</p>
          <p className="text-3xl font-bold text-[#D4AF37]">12</p>
        </div>
        <div className={styles.card}>
          <p className="text-xs uppercase tracking-wider text-slate-500">Conversion Rate</p>
          <p className="text-3xl font-bold text-green-600">68%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;