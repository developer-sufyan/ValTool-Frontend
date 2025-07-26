import React, { useState } from 'react';
import apiService from '../services/apiService';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    if (!email) {
      setError('Please enter your registered email');
      setLoading(false);
      return;
    }
    try {
      // Replace endpoint with your actual API endpoint
      await apiService.post(`/api/auth/forgot-password?email=${email}`);
      console.log('Forgot password request sent');
      // Assuming the API returns a success message 
      setMessage('Email has been sent. Please check your inbox.');
    } catch (err) {
      setError('Failed to send email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div className="border rounded shadow p-4" style={{ width: '100%', maxWidth: 380, background: '#fff' }}>
        <div className="mb-4 text-center">
          <h4><strong>Forgot Password</strong></h4>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        {message && <div className="alert alert-success">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Sending...
              </>
            ) : (
              'Send Reset Link'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
