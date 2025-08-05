import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Badge, Button } from 'react-bootstrap';
import apiService from '../../services/apiService';

export default function ProjectDetail() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [project, setProject] = useState(null);

  const projectId = window.location.pathname.split('/').pop();
  console.log('Project ID:', projectId);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await apiService.get(`/api/projects/${projectId}`);
        console.log(' Project details fetched:', response);
        setProject(response);
      } catch (err) {
        console.error(' project:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  console.log("👀 Current project state:", project);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading project.</p>;
  if (!project) return <p>No project found.</p>;

  return (
    <div className="container py-4">
      <Card>
        <Card.Body>
          <h2>{project.name}</h2>
          <p><strong>Description:</strong> {project.description}</p>
          <p><strong>Status:</strong> {project.status}</p>
          <p><strong>Industry:</strong> {project.industry}</p>
          <p><strong>Valuation Method:</strong> {project.valuation_method}</p>
          <p><strong>Files Count:</strong> {project.files_count}</p>
          <p><strong>Created At:</strong> {new Date(project.created_at).toLocaleString()}</p>
        </Card.Body>
      </Card>
    </div>
  );
}
