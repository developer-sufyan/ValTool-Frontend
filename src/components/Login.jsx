import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login: authLogin } = useAuth();

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

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      const result = await authLogin(formData.email, formData.password);

      if (result.success) {
        if (result.data.email_verified) {
          window.location.href = '/dashboard';
        } else {
          window.location.href = '/verify-email';
        }
      } else {
        setError(result.error || 'Login failed');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login triggered');
    // Add your Google login logic here
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
          {/* Left Quote Section */}
          <div className="col-md-6 d-none d-md-flex justify-content-end align-items-center" style={{ minHeight: 600, padding: '2rem' }}>
          <div style={{ maxWidth: 500 }}>
            <h1 className="display-3 fw-bold text-white mb-4" style={{ lineHeight: 1.1, letterSpacing: '1px' }}>
              Valuation Made Easy
            </h1>
            <div
              style={{
                // background: 'rgba(255,255,255,0.08)',
                // borderRadius: 12,
                // padding: '1.2rem 1.5rem',
                // marginBottom: '1.2rem'
              }}
            >
              <p className="lead fw-normal text-dark mb-2" style={{ fontSize: '2rem', color: '#222', lineHeight: 1.5 }}>
                Discover a smarter way to understand your assets and investments.<br />
                Our intuitive platform empowers you to make confident decisions—fast, accurate, and effortless.
              </p>
            </div>
            <p className="text-muted mt-2" style={{ fontSize: '1.1rem' }}>
              Join thousands of users who trust our cutting-edge valuation tools to gain insights that matter.
            </p>
          </div>
        </div>


          {/* Right Login Form Section */}
          <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ minHeight: 600 }}>
            <div className="border rounded shadow p-4 my-5" style={{ width: '100%', maxWidth: 400, background: '#fff' }}>
              <div className="mb-4 text-center">
                <h4><strong>Welcome Back</strong></h4>
              </div>

              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSubmit}>
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

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="remember" />
                    <label className="form-check-label" htmlFor="remember">Remember me</label>
                  </div>
                  <a href="/forgot-password" className="text-decoration-none text-success">Forgot Password?</a>
                </div>

                <button type="submit" className="btn btn-success w-100" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Logging in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>

              <div className="text-center my-3">Or continue with</div>

              <button className="btn btn-outline-success w-100 mb-2" onClick={handleGoogleLogin}>
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="me-2" />
                Google
              </button>

              <div className="text-center mt-3">
                <p className="mb-2">
                  Don't have an account?{' '}
                  <a href="/register" className="text-decoration-none fw-bold text-success">
                    Register
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
