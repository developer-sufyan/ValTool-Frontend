import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaChartLine, FaShieldAlt, FaUsers, FaStar, FaArrowRight, FaPlay, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Lottie from 'lottie-react';
import analyticAnimation from '../assets/animations/DataAnalysis.json';
import CallToAction from './CallToAction';
import CountUp from 'react-countup';

export default function ModernHomepage() {
  return (
    <>
          <Header/>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>
        
        <Container className="hero-content">
          <Row className="align-items-center">
            <Col lg={7} className="py-5">
              <div className="mb-4">
                <span className="badge bg-accent text-dark px-3 py-2 px-2 rounded-pill mb-1">
                  ✨ Premium Financial Intelligence
                </span>
              </div>
              
              <h1 className="hero-title mb-4">
                Smart Valuations for
                <span className="text-success d-inline">&nbsp;Modern Businesses</span>
              </h1>
              
              <p className="hero-subtitle mb-5">
                Transform your financial decisions with AI-powered valuation tools, 
                real-time market data, and premium analytics that drive results.
              </p>
              
              <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
                <Button className="hero-cta btn btn-primary btn-outline-primary text-success" size="lg">
                  Start Free Trial
                  <FaArrowRight className="ms-2" />
                </Button>
                <Button variant="outline-success" className="hero-secondary-btn text-primary" size="lg">
                  <FaPlay className="me-2 text-primary" />
                  Watch Demo
                </Button>
              </div>
              
              <div className="d-flex align-items-center text-muted">
                <div className="d-flex me-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-warning me-1" />
                  ))}
                </div>
                <span>Trusted by 10,000+ professionals</span>
              </div>
            </Col>
            
            <Col lg={5} className="d-flex flex-column align-items-center text-center">
            {/* <Lottie
                animationData={analyticAnimation}
                loop={true}
                autoplay={true}
                style={{ width: 300}}
              /> */}
              <div className="position-relative">
                <div className="bg-light rounded-4 p-4 shadow-md" style={{ background: 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%)' }}>
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="bg-white rounded-3 p-3 shadow-sm text-center">
                        <FaChartLine className="text-success fs-1 mb-2" />
                        <h6 className="mb-1">Revenue Growth</h6>
                        <h4 className="text-success mb-0">+24.5%</h4>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-white rounded-3 p-3 shadow-sm text-center">
                        <FaUsers className="text-primary fs-1 mb-2" />
                        <h6 className="mb-1">Active Users</h6>
                        <h4 className="text-primary mb-0">10K+</h4>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="bg-success text-white rounded-3 p-3">
                        <h6 className="mb-1">Valuation Accuracy</h6>
                        <h3 className="mb-0">98.7%</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold text-dark mb-3">
                Everything you need for smart valuations
              </h2>
              <p className="fs-5 text-muted">
                Powerful tools designed for modern financial professionals
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={4}>
              <div className="feature-card text-center">
                <div className="feature-icon mx-auto">
                  <FaChartLine className="text-white fs-2" />
                </div>
                <h4 className="fw-bold mb-3">Real-time Analytics</h4>
                <p className="text-muted">
                  Get instant insights with live market data and advanced analytics 
                  that update in real-time for accurate decision making.
                </p>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="feature-card text-center">
                <div className="feature-icon mx-auto">
                  <FaShieldAlt className="text-white fs-2" />
                </div>
                <h4 className="fw-bold mb-3">Enterprise Security</h4>
                <p className="text-muted">
                  Bank-level security with end-to-end encryption, compliance standards, 
                  and secure data handling for your peace of mind.
                </p>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="feature-card text-center">
                <div className="feature-icon mx-auto">
                  <FaUsers className="text-white fs-2" />
                </div>
                <h4 className="fw-bold mb-3">Team Collaboration</h4>
                <p className="text-muted">
                  Work seamlessly with your team using shared workspaces, 
                  real-time collaboration, and comprehensive project management.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5 bg-primary text-white">
      <Container>
        <Row className="text-center">
          <Col lg={3} md={6} className="mb-4">
            <div className="stat-card">
              <span className="stat-number">
                <CountUp end={10000} duration={2.5} separator="," suffix="+" />
              </span>
              <span className="stat-label d-block mt-2">Active Users</span>
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <div className="stat-card">
              <span className="stat-number">
                <CountUp end={40000} duration={2.5} separator="," suffix="+" />
              </span>
              <span className="stat-label d-block mt-2">Company Benchmark Data</span>
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <div className="stat-card">
              <span className="stat-number">
                <CountUp end={2.1} duration={2.5} decimals={1} prefix="$" suffix="B" />
              </span>
              <span className="stat-label d-block mt-2">Assets Valued</span>
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <div className="stat-card">
              <span className="stat-number">
                <CountUp end={150} duration={2.5} suffix="+" />
              </span>
              <span className="stat-label d-block mt-2">Countries</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold text-dark mb-3">
                Trusted by industry leaders
              </h2>
              <p className="fs-5 text-muted">
                See what our customers have to say about their experience
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col lg={4}>
              <div className="testimonial-card">
                <p className="mb-4 fs-5">
                  "The valuation accuracy is unprecedented. We've improved our 
                  decision-making speed by 300% since implementing this platform."
                </p>
                <div className="d-flex align-items-center">
                  <div className="d-flex bg-success rounded-circle me-3 justify-content-center align-items-center" style={{ width: '3rem', height: '3rem' }}>
                    <FaUser className="text-light fs-4" />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">Sarah Chen</h6>
                    <small className="text-muted">CFO, TechCorp</small>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={4}>
              <div className="testimonial-card">
                <p className="mb-4 fs-5">
                  "Outstanding platform with exceptional support. The insights 
                  we get are invaluable for our investment strategies."
                </p>
                <div className="d-flex align-items-center">
                  <div className="d-flex bg-success rounded-circle me-3 justify-content-center align-items-center" style={{ width: '3rem', height: '3rem' }}>
                    <FaUser className="text-light fs-4" />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">Michael Torres</h6>
                    <small className="text-muted">Investment Director</small>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={4}>
              <div className="testimonial-card">
                <p className="mb-4 fs-5">
                  "The real-time data and analytics have transformed how we 
                  approach valuations. Highly recommended for any serious firm."
                </p>
                <div className="d-flex align-items-center">
                  <div className="d-flex bg-success rounded-circle me-3 justify-content-center align-items-center" style={{ width: '3rem', height: '3rem' }}>
                    <FaUser className="text-light fs-4" />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">Emma Rodriguez</h6>
                    <small className="text-muted">Senior Analyst</small>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
  
  
  <Row className="g-4 mt-4">
    <Col lg={4}>
      <div className="testimonial-card">
        <p className="mb-4 fs-5">
          "Our team's productivity has doubled. The seamless integration and intuitive 
          interface make it a must-have for data teams."
        </p>
        <div className="d-flex align-items-center">
          <div className="d-flex bg-success rounded-circle me-3 justify-content-center align-items-center" style={{ width: '3rem', height: '3rem' }}>
            <FaUser className="text-light fs-4" />
          </div>
          <div>
            <h6 className="mb-0 fw-bold">Anika Sharma</h6>
            <small className="text-muted">VP Data, CloudNova</small>
          </div>
        </div>
      </div>
    </Col>
    
    <Col lg={4}>
      <div className="testimonial-card">
        <p className="mb-4 fs-5">
          "We've reduced errors in reporting by 75%. It's fast, reliable, and 
          backed by excellent customer support and handle by a good team ."
        </p>
        <div className="d-flex align-items-center">
          <div className="d-flex bg-success rounded-circle me-3 justify-content-center align-items-center" style={{ width: '3rem', height: '3rem' }}>
            <FaUser className="text-light fs-4" />
          </div>
          <div>
            <h6 className="mb-0 fw-bold">David Lin</h6>
            <small className="text-muted">Head of Operations, FinAxis</small>
          </div>
        </div>
      </div>
    </Col>
    
    <Col lg={4}>
      <div className="testimonial-card">
        <p className="mb-4 fs-5">
          "An essential platform for any growing enterprise. The insights we've 
          gained have led to smarter strategies and faster decisions."
        </p>
        <div className="d-flex align-items-center">
          <div className="d-flex bg-success rounded-circle me-3 justify-content-center align-items-center" style={{ width: '3rem', height: '3rem' }}>
            <FaUser className="text-light fs-4" />
          </div>
          <div>
            <h6 className="mb-0 fw-bold">Julia Nguyen</h6>
            <small className="text-muted">Chief Strategist, VisionLoop</small>
          </div>
        </div>
      </div>
    </Col>
  </Row>
</Container>

      </section>

      {/* CTA Section */}
      {/* <CallToAction /> */}
      <div className='my-5'></div>
      <Footer />
    </>
  );
}
