
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/companies/shopify-logo.svg';
// You can replace logo192.png with your actual logo path
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer py-5" style={{ background: 'linear-gradient(90deg, #000000 0%, #000000 100%)', color: '#fff', fontFamily:  'sans-serif' }}>
      <Container>
        <Row className="mb-4 align-items-center">
          <Col md={4} className="mb-3 d-flex flex-column align-items-start">
            <div className="d-flex align-items-center mb-2">
              <img src={logo} alt="Valuation Tools Logo" style={{ width: 48, height: 48, borderRadius: 12, marginRight: 12, boxShadow: '0 2px 8px #22c55e33' }} />
              <span className="fw-bold" style={{ fontSize: 24, color: '#22C55E', letterSpacing: 1 }}>Valuation Tools</span>
            </div>
            <p className="text-light" style={{ opacity: 0.85, fontSize: 15 }}>Reliable financial data and valuation tools for better decision making.</p>
            <div className="mt-3">
              <SocialIcons />
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <h5 className="fw-bold text-white mb-3" style={{ letterSpacing: 1 }}>Quick Links</h5>
            <NavList />
          </Col>
          <Col md={4} className="mb-3">
            <h5 className="fw-bold text-white mb-3" style={{ letterSpacing: 1 }}>Contact</h5>
            <div className="mb-2 text-light" style={{ fontSize: 15 }}>
              <span className="fw-semibold">Email:</span> info@valuationtools.com
            </div>
            <div className="mb-2 text-light" style={{ fontSize: 15 }}>
              <span className="fw-semibold">Phone:</span> +123 456 7890
            </div>
            <div className="text-light" style={{ fontSize: 15 }}>
              <span className="fw-semibold">Address:</span> 123 Valuation St, XYZ
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center border-top pt-4" style={{ borderColor: '#334155 !important', color: '#cbd5e1', fontSize: 15 }}>
            &copy; {new Date().getFullYear()} <span style={{ color: '#22C55E', fontWeight: 600 }}>Valuation Tools</span>. All rights reserved.
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
    <ul className="list-unstyled d-flex flex-column gap-2">
      {links.map((to, idx) => (
        <li key={to}>
          <Link
            to={to}
            className="text-decoration-none fw-medium"
            style={{ color: '#cbd5e1', fontSize: 16, transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#22C55E'}
            onMouseLeave={e => e.target.style.color = '#cbd5e1'}
          >
            {labels[idx]}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function SocialIcons() {
  const icons = [
    { icon: <FaFacebookF />, url: 'https://facebook.com' },
    { icon: <FaTwitter />, url: 'https://twitter.com' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
    { icon: <FaInstagram />, url: 'https://instagram.com' },
  ];
  return (
    <div className="d-flex gap-3">
      {icons.map(({ icon, url }, idx) => (
        <a
          key={idx}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#cbd5e1',
            background: '#1e293b',
            borderRadius: '50%',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
            boxShadow: '0 2px 8px #22c55e22',
            transition: 'background 0.2s, color 0.2s',
            textDecoration: 'none',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#22C55E';
            e.currentTarget.style.color = '#1e293b';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#1e293b';
            e.currentTarget.style.color = '#cbd5e1';
          }}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
  