import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const AuthDebug = () => {
  const { user, token, isAuthenticated, emailVerified } = useAuth();

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      background: '#f8f9fa',
      border: '1px solid #dee2e6',
      borderRadius: '4px',
      padding: '10px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px'
    }}>
      <strong>Auth Debug:</strong>
      <div>Authenticated: {isAuthenticated() ? '✅' : '❌'}</div>
      <div>Email Verified: {emailVerified ? '✅' : '❌'}</div>
      <div>Token: {token ? '✅ Present' : '❌ Missing'}</div>
      <div>User: {user ? JSON.stringify(user, null, 2) : '❌ No user'}</div>
      <div>LocalStorage Token: {localStorage.getItem('access_token') ? '✅' : '❌'}</div>
      <div>LocalStorage Email Verified: {localStorage.getItem('email_verified') || '❌'}</div>
    </div>
  );
};

export default AuthDebug;
