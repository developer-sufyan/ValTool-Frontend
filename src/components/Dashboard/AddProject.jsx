import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Header from '../Header';
import DashboardSidebar from './DashboardSidebar';
import DashboardNavbar from './DashboardNavbar';
import apiService from '../../services/apiService';
import {useNavigate } from 'react-router-dom';

export default function AddProject() {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try{
       await apiService.post('/api/projects/', {
        "name": projectName,
        "description": description,
        "industry": "string",
        "company_size": "string",
        "country": "string",
        "currency": "USD",
        "valuation_method": "dcf"
      });
      console.log('Project added:', projectName, description);
      setLoading(false);
      // ##navigate  to the questionnaire page after successful project addition in two seconds 
      setTimeout(() => {
      navigate('/questionnaire');
      }, 3000);
    }
    catch(err) {
      setError('Failed to add project. Please try again.');
      setLoading(false);
      return;
    }
    

  };

  return (
    <div className="d-flex" style={{ minHeight: '100vh', background: 'linear-gradient(90deg, #f8faff 60%, #eaf1fb 100%)' }}>
      <DashboardSidebar />
      <div style={{ flex: 1, minHeight: '100vh', background: 'transparent' }}>
        <DashboardNavbar />
        <div className="container py-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
          <div className="card shadow-lg border-0" style={{ maxWidth: 540, width: '100%', borderRadius: 18, background: '#fff', padding: '2.5rem 2rem' }}>
            <div className="mb-4 text-center">
              <h2 className="fw-bold mb-2 text-success" style={{ color: '#', fontSize: '2.2rem', letterSpacing: '1px' }}>Add New Project</h2>
              <p className="text-muted" style={{ fontSize: '1.08rem' }}>Create a new project to manage and track your business initiatives.</p>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4" controlId="projectName">
                <Form.Label className="fw-semibold" style={{ fontSize: '1.1rem' }}>Project Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter project name"
                  value={projectName}
                  onChange={e => setProjectName(e.target.value)}
                  required
                  style={{ fontSize: '1.08rem', borderRadius: 8, padding: '0.7rem 1rem' }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="description">
                <Form.Label className="fw-semibold" style={{ fontSize: '1.1rem' }}>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter project description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  required
                  style={{ fontSize: '1.08rem', borderRadius: 8, padding: '0.7rem 1rem' }}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button type="submit" variant="primary" className="fw-bold px-4 py-2" style={{ borderRadius: 8, fontSize: '1.15rem', letterSpacing: '1px' }}>
                 {loading ? "Loading" : "Add Project"}
                 
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
