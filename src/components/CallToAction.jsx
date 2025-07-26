import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <h2 className="display-5 fw-bold text-dark mb-4">
                Ready to transform your valuation process?
              </h2>
              <p className="fs-5 text-muted mb-5">
                Join thousands of professionals who trust our platform for accurate, 
                real-time financial insights and premium analytics.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button as={Link} to="/register" className="hero-cta btn btn-dark btn-outline-primary text-success" size="lg">
                  Start Your Free Trial
                  <FaArrowRight className="ms-2" />
                </Button>
                <Button as={Link} to="/contact" variant="outline-success" className="hero-secondary-btn text-primary " size="lg">
                  Contact Sales
                </Button>
              </div>
              
              <div className="mt-4 text-muted">
                <small>Sign Up Free • No credit card required </small>
              </div>
            </Col>
          </Row>
        </Container>
  );
}

export default CallToAction;