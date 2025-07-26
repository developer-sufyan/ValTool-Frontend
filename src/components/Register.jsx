import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { register: authRegister } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.email || !formData.password || !formData.confirmPassword || !formData.fullName) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    try {
      const result = await authRegister(formData.email, formData.password, formData.fullName);

      if (result.success) {
        if (result.data.email_verified) {
          window.location.href = '/dashboard';
        } else {
          window.location.href = '/verify-email';
        }
      } else {
        setError(result.error || 'Registration failed');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    console.log("Google signup clicked");
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: '#22C55E',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
          {/* Left Section */}
          <div className="col-md-6 d-none d-md-flex justify-content-end align-items-center" style={{ minHeight: 600, padding: '2rem' }}>
            <div style={{ maxWidth: 500 }}>
              <h1 className="display-3 fw-bold text-white mb-4" style={{ lineHeight: 1.1, letterSpacing: '1px' }}>
                Join the Smart Valuers
              </h1>
              <div
                // style={{
                //   background: 'rgba(255,255,255,0.08)',
                //   borderRadius: 12,
                //   padding: '1.2rem 1.5rem',
                //   marginBottom: '1.2rem'
                // }}
              >
                <p className="lead fw-normal text-dark mb-2" style={{ fontSize: '2rem', color: '#222', lineHeight: 1.5 }}>
                  Build your future with smarter tools.<br />
                  From personal assets to business insights—get clarity, speed, and control all in one platform.
                </p>
              </div>
              <p className="text-muted mt-2" style={{ fontSize: '1.1rem' }}>
                Be part of a growing community making confident decisions every day.
              </p>
            </div>
          </div>

          {/* Right Register Form Section */}
          <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ minHeight: 600 }}>
            <div className="border rounded shadow p-4 my-5" style={{ width: '100%', maxWidth: 400, background: '#fff' }}>
              <div className="mb-4 text-center">
                <h4><strong>Create Your Account</strong></h4>
              </div>

              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-success w-100" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Registering...
                    </>
                  ) : (
                    'Sign Up'
                  )}
                </button>
              </form>

              <div className="text-center my-3">Or continue with</div>

              <button className="btn btn-outline-success w-100 mb-2" onClick={handleGoogleSignUp}>
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="me-2" />
                Google
              </button>

              <div className="text-center mt-3">
                <p className="mb-2">
                  Already have an account?{' '}
                  <a href="/login" className="text-decoration-none text-success fw-bold">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
