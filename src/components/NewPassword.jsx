import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';

export default function NewPassword({  }) {
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
   const [accessToken, setAccessToken] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    if (!password ) {
      setError('Please fill in the field');
      return;
    }
  
    setLoading(true);
    try {
         await apiService.post(`/api/auth/reset-password?token=${accessToken}&new_password=${password}`);
      setMessage('Password has been reset successfully. You can now log in.');
      window.location.href = '/'; 
    } catch (err) {
      setError('Failed to reset password. Please try again.');
    } finally {
      setLoading(false);
    }
  };
   useEffect(() => {

    const hash = window.location.hash.substring(1); // Remove the '#' from the beginning
    const params = new URLSearchParams(hash);
    const error = params.get('error');
    
    if (error) {
      const errorDes = params.get('error_description');
      let errorArr = errorDes.split('+');
      let errorStr = errorArr.join(' ');
      setError(errorStr);
    }
    const token = params.get('access_token');
    if (token) {
      setError(null);
      setAccessToken(token); 
      console.log('Access Token:', token);
    }      
    
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div className="border rounded shadow p-4" style={{ width: '100%', maxWidth: 380, background: '#fff' }}>
        <div className="mb-4 text-center">
          <h4><strong>New Password</strong></h4>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        {!accessToken && !error ? <div className="alert alert-danger">Unable to change password, try again!</div> : null}
        {error || !accessToken ? null : 
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">New Password</label>
            <input
              type="password"
              className="form-control" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {/* <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
          </div> */}
          <button type="submit" className="btn btn-success w-100" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Resetting...
              </>
            ) : (
              'Set Password'
            )}
          </button>
        </form>}
      </div>
    </div>
  );
}
