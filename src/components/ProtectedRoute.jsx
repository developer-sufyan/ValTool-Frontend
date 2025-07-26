import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, redirectTo = '/' }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated()) {
    window.location.href = redirectTo;
    return null;
  }

  return children;
};

export default ProtectedRoute;
