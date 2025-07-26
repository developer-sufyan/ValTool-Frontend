import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

const AuthButton = ({ className = "" }) => {
  const { isAuthenticated, user, logout } = useAuth();

  if (isAuthenticated()) {
    return (
      <Dropdown>
        <Dropdown.Toggle 
          className="btn btn-lg btn-dark  text-success d-flex align-items-center border-0"
          style={{
            // background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
            fontWeight:400,
            // fontFamily: 'poppins, sans-serif',
            borderRadius: '10px',
            padding: '0.5rem 1.5rem', 
            fontSize: '1rem',
          }}
          id="authDropdown"
        >
          <i className="fas fa-user me-2"></i>
          {user?.full_name || 'Dashboard'}
        </Dropdown.Toggle>

        <Dropdown.Menu className="border-0 shadow-lg" style={{ borderRadius: '15px' }}>
          <Dropdown.Item as={Link} to="/dashboard" className="py-2">
            <i className="fas fa-tachometer-alt me-2 text-success"></i>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/profile" className="py-2">
            <i className="fas fa-user-cog me-2 text-success"></i>
            Profile
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item 
            onClick={() => {
              logout();
              window.location.href = '/';
            }}
            className="text-danger py-2"
          >
            <i className="fas fa-sign-out-alt me-2"></i>
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  return (
    <div className="d-flex gap-2">
      <Link 
        to="/login" 
        className="btn btn-outline-secondary"
        style={{
          borderColor: '#D1D5DB',
          color: '#374151',
          fontWeight: 600,
          borderRadius: '10px',
          padding: '0.3rem 1rem',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={e => {
          e.target.style.borderColor = '#22C55E';
          e.target.style.color = '#22C55E';
          e.target.style.background = 'rgba(34, 197, 94, 0.05)';
        }}
        onMouseLeave={e => {
          e.target.style.borderColor = '#D1D5DB';
          e.target.style.color = '#374151';
          e.target.style.background = 'transparent';
        }}
      >
        Login
      </Link>
      <Link 
        to="/register" 
        className="btn btn-success"
        style={{
          background: "#000000",
          border: 'none',
          fontWeight: 600,
          borderRadius: '10px',
          padding: '0.3rem 1rem',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 10px rgba(34, 197, 94, 0.2)',
          color:"#22C55E",
        }}
        onMouseEnter={e => {
          e.target.style.transform = 'translateY(-1px)';
          e.target.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.3)';
        }}
        onMouseLeave={e => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 2px 10px rgba(34, 197, 94, 0.2)';
        }}
      >
        Get Started
      </Link>
    </div>
  );
};

export default AuthButton;
