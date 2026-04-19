import React from 'react';
import { useAuth } from '../AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-navy)]">Agent Dashboard</h2>
        <button 
          onClick={logout} 
          className="text-sm bg-[var(--color-navy)] text-white py-2 px-4 rounded-lg hover:bg-opacity-90"
        >
          Logout
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-xs uppercase tracking-wider text-slate-500">Active Leads</p>
          <p className="text-3xl font-bold text-[var(--color-navy)]">24</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-xs uppercase tracking-wider text-slate-500">Pending Deals</p>
          <p className="text-3xl font-bold text-[var(--color-gold)]">12</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-xs uppercase tracking-wider text-slate-500">Conversion Rate</p>
          <p className="text-3xl font-bold text-green-600">68%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;