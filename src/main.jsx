import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './AuthContext'
import PrivateRoute from './PrivateRoute'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Default Route: Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Public Route: Login */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes: Dashboard */}
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />

          {/* Fallback (404) */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)