// API utility for making authenticated requests
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  getAuthHeaders() {
    const token = localStorage.getItem('access_token');
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: this.getAuthHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      // Handle token expiration
      if (response.status === 401) {
        // Try to refresh token
        const refreshResult = await this.refreshToken();
        if (refreshResult.success) {
          // Retry the original request with new token
          config.headers = this.getAuthHeaders();
          const retryResponse = await fetch(url, config);
          return this.handleResponse(retryResponse);
        } else {
          // Refresh failed, logout user
          this.handleAuthError();
          throw new Error('Authentication failed');
        }
      }

      return this.handleResponse(response);
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async handleResponse(response) {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ 
        detail: `HTTP ${response.status}: ${response.statusText}` 
      }));
      throw new Error(errorData.detail || 'Request failed');
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return response;
  }

  async refreshToken() {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        return { success: false, error: 'No token available' };
      }

      const response = await fetch(`${this.baseURL}/api/auth/refresh`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('expires_in', data.expires_in);
        return { success: true, data };
      } else {
        return { success: false, error: 'Token refresh failed' };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  handleAuthError() {
    // Clear auth data and redirect to login
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_type');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('user_data');
    window.location.href = '/login';
  }

  // Convenience methods
  async get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
}

export default new ApiService();
