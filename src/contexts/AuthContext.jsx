import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [emailVerified, setEmailVerified] = useState(false);

  // API base URL
  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

  useEffect(() => {
    // Check for stored auth data on mount
    const storedToken = localStorage.getItem('access_token');
    const storedUser = localStorage.getItem('user_data');
    const storedEmailVerified = localStorage.getItem('email_verified');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      setEmailVerified(storedEmailVerified === 'true');
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Login failed');
      }

      const data = await response.json();
      
      // Store token and user data
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('token_type', data.token_type);
      localStorage.setItem('expires_in', data.expires_in);
      localStorage.setItem('email_verified', data.email_verified);
      
      // Store user info from response
      const userData = data.user || { email };
      localStorage.setItem('user_data', JSON.stringify(userData));
      
      setToken(data.access_token);
      setUser(userData);
      setEmailVerified(data.email_verified);
      
      return { success: true, data };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    }
  };

  const register = async (email, password, fullName) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          password, 
          full_name: fullName 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Registration failed');
      }

      const data = await response.json();
      
      // Store token and user data
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('token_type', data.token_type);
      localStorage.setItem('expires_in', data.expires_in);
      localStorage.setItem('email_verified', data.email_verified);
      
      // Store user info from response
      const userData = data.user || { email, full_name: fullName };
      localStorage.setItem('user_data', JSON.stringify(userData));
      
      setToken(data.access_token);
      setUser(userData);
      setEmailVerified(data.email_verified);
      
      return { success: true, data };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    // Clear all auth data
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_type');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('user_data');
    localStorage.removeItem('email_verified');
    
    setToken(null);
    setUser(null);
    setEmailVerified(false);
  };

  const refreshToken = async () => {
    try {
      const currentToken = localStorage.getItem('access_token');
      if (!currentToken) {
        throw new Error('No token available');
      }

      const response = await fetch(`${API_BASE_URL}/api/auth/refresh`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${currentToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Token refresh failed');
      }

      const data = await response.json();
      
      // Update stored token
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('expires_in', data.expires_in);
      
      setToken(data.access_token);
      
      return { success: true, data };
    } catch (error) {
      console.error('Token refresh error:', error);
      // If refresh fails, logout user
      logout();
      return { success: false, error: error.message };
    }
  };

  const isAuthenticated = () => {
    return !!token && !!user;
  };

  const getAuthHeaders = () => {
    const authToken = token || localStorage.getItem('access_token');
    return authToken ? {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    } : {
      'Content-Type': 'application/json',
    };
  };

  const checkEmailVerification = async () => {
    try {
      if (!user?.email) {
        return { success: false, error: 'User email not available' };
      }

      // Use the non-authenticated endpoint with email in request body
      const response = await fetch(`${API_BASE_URL}/api/auth/check-email-verification-by-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: user.email }),
      });

      if (!response.ok) {
        throw new Error('Failed to check email verification');
      }

      const data = await response.json();
      
      // Update local storage and state with new verification status
      localStorage.setItem('email_verified', data.email_verified);
      setEmailVerified(data.email_verified);
      
      return { success: true, email_verified: data.email_verified };
    } catch (error) {
      console.error('Email verification check error:', error);
      return { success: false, error: error.message };
    }
  };

  const value = {
    user,
    token,
    loading,
    emailVerified,
    login,
    register,
    logout,
    refreshToken,
    isAuthenticated,
    getAuthHeaders,
    checkEmailVerification,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
