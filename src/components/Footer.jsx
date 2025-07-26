import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer py-5 bg-primary text-white">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-3">
            <h5 className="fw-bold text-success">Valuation Tools</h5>
            <p className="text-light">Reliable financial data and valuation tools for better decision making.</p>
          </Col>
          <Col md={4} className="mb-3">
            <h5 className="fw-bold text-white">Quick Links</h5>
            <NavList />
          </Col>
          <Col md={4} className="mb-3">
            <h5 className="fw-bold text-white">Contact</h5>
            <p className="mb-1 text-light">Email: info@valuationtools.com</p>
            <p className="mb-1 text-light">Phone: +123 456 7890</p>
            <p className="text-light">Address: 123 Valuation St, Karachi</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center text-muted border-top border-secondary pt-4 text-white">
            &copy; {new Date().getFullYear()} Valuation Tools. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

// Separate component for links to avoid duplication
function NavList() {
  const links = ['/', '/our-services', '/about', '/pricing', '/contact'];
  const labels = ['Home', 'Services', 'About', 'Pricing', 'Contact'];
  return (
    <ul className="list-unstyled">
      {links.map((to, idx) => (
        <li key={to}>
          <Link to={to} className="text-decoration-none text-light" style={{ transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#22C55E'}
                onMouseLeave={e => e.target.style.color = '#D1D5DB'}>
            {labels[idx]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
  