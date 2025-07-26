import React from "react";
import Lottie from "lottie-react";
import FAQAnimation from '../assets/animations/FrequentlyAskedQuestions.json';
import { Col, Row } from "react-bootstrap";

const FAQSection = () => {
  return (
    <div>
        <Row className="g-4 mt-4 about-card p-4 border" style={{ margin: '5rem auto', borderRadius: '20px', background: '#fff' }}>
          <Col lg={12}>
            <h2 className="fw-bold text-primary fs-3 mb-4" style={{ letterSpacing: 1 }}>Frequently Asked Questions</h2>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item mb-3 border-0">
                <h2 className="accordion-header" id="faq1">
                  <button className="accordion-button fw-semibold text-primary bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                    What is Valuation Tool?
                  </button>
                </h2>
                <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
                  <div className="accordion-body text-muted" style={{ fontSize: '1.08rem' }}>
                    Valuation Tool is a modern platform designed to simplify complex financial data, providing actionable insights for professionals and businesses.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3 border-0">
                <h2 className="accordion-header" id="faq2">
                  <button className="accordion-button collapsed fw-semibold text-primary bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                    Who can benefit from using Valuation Tool?
                  </button>
                </h2>
                <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
                  <div className="accordion-body text-muted" style={{ fontSize: '1.08rem' }}>
                    Our platform is ideal for analysts, investors, business owners, and anyone seeking reliable market intelligence and financial insights.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3 border-0">
                <h2 className="accordion-header" id="faq3">
                  <button className="accordion-button collapsed fw-semibold text-primary bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                    How secure is my data on Valuation Tool?
                  </button>
                </h2>
                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#faqAccordion">
                  <div className="accordion-body text-muted" style={{ fontSize: '1.08rem' }}>
                    We prioritize security and privacy, using industry best practices to ensure your data is protected and confidential at all times.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3 border-0">
                <h2 className="accordion-header" id="faq4">
                  <button className="accordion-button collapsed fw-semibold text-primary bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                    How do I get started?
                  </button>
                </h2>
                <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#faqAccordion">
                  <div className="accordion-body text-muted" style={{ fontSize: '1.08rem' }}>
                    Simply click the "Get Started" button above or contact our support team for a personalized onboarding experience.
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* <Col lg={4} className='d-flex flex-column justify-content-center align-items-center'>
            <Lottie
              animationData={FAQAnimation}
              loop={true}
              autoplay={true}
            />
          </Col> */}
        </Row>
    </div>
  );
}

export default FAQSection;