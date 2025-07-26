import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Banner from '../assets/images/banner2.jpg'
import AboutAnimation from '../assets/animations/CreatingApplication.json';
import { Button, Col, Row } from 'react-bootstrap';
import Lottie from 'lottie-react';
import Arrow from '../assets/images/arrow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import FAQSection from './FAQSection';

// Example data for recharts
const data = [
  { year: '2019', growth: 12 },
  { year: '2020', growth: 18 },
  { year: '2021', growth: 22 },
  { year: '2022', growth: 28 },
  { year: '2023', growth: 35 },
];

export default function AboutUs() {
  return (
    <div className="container-fluid bg-light">
      <div className="container py-5">
        <Row className='g-3'>
          <Col lg={5} className='d-flex flex-column justify-content-center align-items-center'>
            <Lottie
              animationData={AboutAnimation}
              loop={true}
              autoplay={true}
              style={{ width: 450 }}
            />
          </Col>
          <Col lg={7} className='d-flex flex-column justify-content-center'>
            <div className='about-card p-4 border'>
              <div className='d-flex justify-content-between align-items-center mb-3'>
                <h2 className="fw-bold text-primary fs-3 m-0" style={{ letterSpacing: 1 }}>About Us</h2>
                <p className="text-muted fs-6 m-0">
                  Empowering professionals with trusted market intelligence.
                </p>
              </div>
              <p className="text-muted m-0" style={{ fontSize: '1.13rem', lineHeight: 1.7 }}>
                <span className="fw-semibold text-primary">Valuation Tool</span> is a modern platform built by a passionate team of analysts, engineers, and visionaries. We simplify complex financial data, making it accessible and actionable for professionals and businesses.
              </p>
            </div>
            <div className='about-card p-4 border mt-3'>
              <h2 className="fw-bold text-primary fs-3" style={{ letterSpacing: 1 }}>Who We Are</h2>
              <p className="text-muted m-0" style={{ fontSize: '1.13rem', lineHeight: 1.7 }}>
                A modern platform built by a passionate team of analysts, engineers, and visionaries. We simplify complex financial data, making it accessible and actionable for professionals and businesses.
              </p>
            </div>
          </Col>
        </Row>
        <Row className='gx-4 mt-0'>
          <Col lg={6}>
            <div className='border p-5 d-flex flex-column justify-content-between' style={{ borderRadius: '20px', height: '25rem', backgroundColor: '#fff' }}>
              <div className='d-flex justify-content-between align-items-start mb-3'>
                <h2 className="fw-bold text-primary display-3" style={{ letterSpacing: 1 }}>Our Mission</h2>
                <img src={Arrow} alt="Arrow Icon" style={{ width: '9rem', height: '9rem', filter: 'invert(49%) sepia(87%) saturate(646%) hue-rotate(89deg) brightness(92%) contrast(85%)' }} />
              </div>
              <p className="text-muted fs-3 m-0">
                To empower confident decision making in fast moving markets with reliable, real-time insights.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className='border p-5 d-flex flex-column justify-content-center' style={{ borderRadius: '20px', height: '25rem', backgroundColor: '#22C55E' }}>
              <div className='d-flex justify-content-between align-items-start mb-4'>
                <h2 className="fw-bold text-light display-6" style={{ letterSpacing: 1 }}>Innovation, accuracy, transparency, and user experience.</h2>
              </div>
              <Button className="about-cta btn btn-primary btn-outline-primary text-light" size="lg">
                Get Started
                <FontAwesomeIcon icon={faSquareArrowUpRight} className="ms-2" />
              </Button>
            </div>
          </Col>
        </Row>


        {/* <div className="row align-items-center g-5">
          <div className="col-12 col-lg-6">
            <div className="rounded-4 shadow-sm p-4" style={{ background: 'transparent' }}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} barCategoryGap={28}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="year" tick={{ fontWeight: 600, fill: "#1d5080" }} />
                  <YAxis tick={{ fontWeight: 500, fill: "#1d5080" }} />
                  <Tooltip
                    contentStyle={{ borderRadius: 10, border: 'none', boxShadow: '0 2px 12px rgba(79,140,255,0.10)' }}
                    labelStyle={{ fontWeight: 600, color: "#4f8cff" }}
                  />
                  <Legend iconType="circle" />
                  <Bar
                    dataKey="growth"
                    fill="#22C55E"
                    radius={[10, 10, 0, 0]}
                    maxBarSize={36}
                    label={{ position: 'top', fill: '#4f8cff', fontWeight: 600, fontSize: 14 }}
                    name="Growth (%)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="col-12 col-lg-6 d-flex align-items-center">
            <div>
              <h3 className="fw-bold mb-3 text-primary" style={{ fontSize: '2rem', letterSpacing: 1 }}>Who We Are</h3>
              <p className="text-muted mb-3" style={{ fontSize: '1.13rem', lineHeight: 1.7 }}>
                <span className="fw-semibold text-primary">Valuation Tool</span> is a modern platform built by a passionate team of analysts, engineers, and visionaries. We simplify complex financial data, making it accessible and actionable for professionals and businesses.
              </p>
              <div className="mb-3">
                <span className="badge bg-primary me-2 mb-2">Mission</span>
                <span className="text-muted" style={{ fontSize: '1.05rem' }}>
                  To empower confident decision-making in fast-moving markets with reliable, real-time insights.
                </span>
              </div>
              <div className="mb-3">
                <span className="badge bg-primary me-2 mb-2">Our Values</span>
                <span className="text-muted" style={{ fontSize: '1.05rem' }}>
                  Innovation, accuracy, transparency, and user experience.
                </span>
              </div>
              <ul className="list-unstyled mt-4">
                <li className="mb-2 d-flex align-items-center">
                  <span className="badge bg-primary me-2" style={{ width: 18, height: 18, borderRadius: '50%' }}>&nbsp;</span>
                  <span className="text-muted">Data-driven insights for every decision</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <span className="badge bg-primary me-2" style={{ width: 18, height: 18, borderRadius: '50%' }}>&nbsp;</span>
                  <span className="text-muted">Secure, reliable, and scalable platform</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <span className="badge bg-primary me-2" style={{ width: 18, height: 18, borderRadius: '50%' }}>&nbsp;</span>
                  <span className="text-muted">Dedicated support and continuous innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="container d-flex flex-column align-items-center justify-content-center p-4" style={{margin: '5rem auto', height: '30rem', overflow: 'hidden', position: 'relative', borderRadius: '1rem', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#111827', backgroundBlendMode: 'darken' }}>
          <img src={Banner} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem', opacity: 0.1, zIndex: 1 }} />

          <div className="container mb-4" style={{ position: 'relative', zIndex: 2 }}>
            <h1 className='text-center text-capitalize fw-bold display-6' style={{ color: "#fff", letterSpacing: 1 }}>
              The most comprehensive, timely, reliable data to help you master the evolving financial market.
            </h1>
          </div>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center" style={{ position: 'relative', zIndex: 2 }}>
            <Button as={Link} to="/register" className="hero-cta btn btn-dark btn-outline-primary text-success" size="lg">
              Start Your Free Trial
              <FaArrowRight className="ms-2" />
            </Button>
            <Button as={Link} to="/contact" variant="outline-success" className="hero-secondary-btn text-light " size="lg">
              Contact Sales
            </Button>
          </div>
        </div>

        <FAQSection />
      </div>
    </div>
  );
}

