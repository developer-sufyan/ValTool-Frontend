import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const EmailVerificationPrompt = ({ children }) => {
  const { emailVerified, user, checkEmailVerification } = useAuth();
  const [checking, setChecking] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Auto-check verification status when component mounts
  useEffect(() => {
    const autoCheckVerification = async () => {
      // Check if we might be returning from email verification link
      const urlParams = new URLSearchParams(window.location.search);
      const hasVerificationParams = urlParams.has('token') || urlParams.has('type');
      
      if (hasVerificationParams && user?.email) {
        // Small delay to allow any redirects to complete
        setTimeout(async () => {
          setChecking(true);
          setMessage('Checking email verification status...');
          
          try {
            const result = await checkEmailVerification();
            if (result.success && result.email_verified) {
              setMessage('✅ Email verified successfully! Redirecting to dashboard...');
              setTimeout(() => {
                navigate('/dashboard');
              }, 1500);
            } else {
              setMessage('');
            }
          } catch (error) {
            setMessage('');
          } finally {
            setChecking(false);
          }
        }, 1000);
      }
    };

    autoCheckVerification();
  }, [user?.email, checkEmailVerification, navigate]);

  const handleCheckVerification = async () => {
    setChecking(true);
    setMessage('');
    
    try {
      const result = await checkEmailVerification();
      if (result.success) {
        if (result.email_verified) {
          setMessage('✅ Email verified successfully! Redirecting to dashboard...');
          setTimeout(() => {
            navigate('/dashboard'); // Navigate to dashboard after verification
          }, 1500);
        } else {
          setMessage('❌ Email not yet verified. Please check your inbox and click the verification link.');
        }
      } else {
        setMessage('❌ Failed to check email verification status.');
      }
    } catch (error) {
      setMessage('❌ Error checking verification status.');
    } finally {
      setChecking(false);
    }
  };

  if (!emailVerified) {
    return (
      <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
        <div className="card shadow-lg border-0" style={{ maxWidth: '500px', width: '100%' }}>
          <div className="card-body p-5 text-center">
            <div className="mb-4">
              <i className="fas fa-envelope-open text-warning" style={{ fontSize: '4rem' }}></i>
            </div>
            <h3 className="card-title text-dark mb-3">Verify Your Email</h3>
            <p className="text-muted mb-4">
              We've sent a verification email to <strong>{user?.email}</strong>. 
              Please check your inbox and click the verification link to continue.
            </p>
            
            {message && (
              <div className={`alert ${message.includes('✅') ? 'alert-success' : 'alert-warning'} mb-3`}>
                {message}
              </div>
            )}
            
            <div className="d-grid gap-2">
              <button 
                className="btn btn-primary"
                onClick={handleCheckVerification}
                disabled={checking}
              >
                {checking ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    Checking...
                  </>
                ) : (
                  'Check Email Verification Status'
                )}
              </button>
              <button 
                className="btn btn-outline-secondary"
                onClick={() => {
                  // Here you would call resend verification email API
                  alert('Verification email resent!');
                }}
              >
                Resend Verification Email
              </button>
              <a href="/" className="btn btn-link text-muted">
                Back to Homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default EmailVerificationPrompt;
