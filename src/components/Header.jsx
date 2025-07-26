import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import AuthButton from './AuthButton';

export default function Header() {
  const location = useLocation();
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/our-services', label: 'Our Services' },
    { to: '/about', label: 'About Us' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <Navbar expand="lg" className="bg-white shadow-sm px-3 sticky-md-top border-bottom">
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center" style={{ fontSize: '1.6rem', letterSpacing: 1, color: '#111827' }}>
          Valuation <span style={{ fontWeight: 600, marginLeft: 6, color: '#22C55E' }}>Tools</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          {/* Navigation */}
          <Nav className="mx-auto gap-2">
            {navLinks.map(link => (
              <Nav.Link
                as={Link}
                to={link.to}
                key={link.to}
                className={`fw-semibold px-3 py-2 rounded-pill nav-link-modern ${location.pathname === link.to ? 'active' : ''}`}
                style={{
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                  fontWeight: location.pathname === link.to ? 700 : 500,
                  letterSpacing: 0.25,
                  color: location.pathname === link.to ? '#22C55E' : '#374151',
                  background: location.pathname === link.to ? 'rgba(34, 197, 94, 0.1)' : 'none'
                }}
                onMouseEnter={e => {
                  if (location.pathname !== link.to) {
                    e.target.style.color = '#22C55E';
                    e.target.style.background = 'rgba(34, 197, 94, 0.05)';
                  }
                }}
                onMouseLeave={e => {
                  if (location.pathname !== link.to) {
                    e.target.style.color = '#374151';
                    e.target.style.background = 'none';
                  }
                }}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          {/* Auth/CTA Buttons */}
          <div className="d-flex gap-2 ms-lg-4 mt-3 mt-lg-0">
            <AuthButton />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
