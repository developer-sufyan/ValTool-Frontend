import React, { use, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import apiService from '../../services/apiService';
import { Link } from 'react-router-dom';

export default function ProjectList() {
  const [loading , setLoading] = React.useState(false);
  const [error , seterror] = React.useState(false);
  const [projects , setProjects] = React.useState([]);

  const user = JSON.parse(localStorage.getItem("user_data"));
  const userId = user?.id;

  console.log('User ID:', userId);


  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      seterror(false);

      try {
        const response = await apiService.get('/api/projects');
        console.log('Projects fetched:', response);
        setProjects(response.items || []);
      } catch (err) {
        console.error('Fetch error:', err);
        seterror(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); 

  return (
    <div className="container py-4" style={{ fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif" }}>
      <div className="d-flex justify-content-end mb-3">
        <Button
          variant="primary"
          className="border border-secondary fw-bold"
          style={{
            borderRadius: 8,
            letterSpacing: '1px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            transition: 'background 0.2s, color 0.2s'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#000000"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#000000"; e.currentTarget.style.color = "#fff"; }}
        >
          <Link to="/new-project" className='text-decoration-none text-success'> + Add New Project</Link>
        </Button>
      </div>

      <Table
        responsive
        striped
        bordered
        hover
        className="bg-white shadow-sm"
        style={{ borderRadius: 12, overflow: 'hidden', fontSize: '1rem' }}
      >
        <thead className="bg-primary text-white">
          <tr>
            <th>Project Name</th>
            <th>Description</th>
            
            <th>Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4" className="text-center py-5">
                <div style={{ fontSize: '1.2rem', color: '#888', fontWeight: 500 }}>
                  Loading...
                </div>
              </td>
            </tr>
          ) : (() => {
            const userProjects = projects.filter(project => String(project.user_id) === String(userId));
            if (userProjects.length === 0) {
              return (
                <tr>
                  <td colSpan="4" className="text-center py-5">
                    <div style={{ fontSize: '1.2rem', color: '#888', fontWeight: 500 }}>
                      You don't have any projects yet.
                    </div>
                  </td>
                </tr>
              );
            }
            return userProjects.map(project => (
              <tr key={project.id} style={{ transition: 'background 0.2s' }}>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>
                  <span className="badge bg-warning text-dark fw-semibold" style={{ fontSize: '0.95rem' }}>{project.status}</span>
                </td>
                <td className="text-center">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="fw-bold"
                    style={{ borderRadius: 6, transition: 'background 0.2s, color 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#051c38"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#051c38"; }}
                  >
                    <Link to={`/project/detail/${project.id}`} className='text-decoration-none text-primary'>View Details</Link>
                  </Button>
                </td>
              </tr>
            ));
          })()}
        </tbody>
      </Table>
    </div>
  );
}
