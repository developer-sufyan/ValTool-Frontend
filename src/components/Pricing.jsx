import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaStar, FaCrown, FaGem, FaShieldAlt, FaQuestionCircle, FaUsers, FaRocket, FaHeadset, FaChartLine, FaLock, FaCloudDownloadAlt, FaMobile, FaInfinity, FaLightbulb, FaFileAlt, FaChartBar } from 'react-icons/fa';
import CallToAction from './CallToAction';
import FAQSection from './FAQSection';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = {
    monthly: {
      starter: { price: 19, period: '/month' },
      professional: { price: 49, period: '/month' },
      enterprise: { price: 99, period: '/month' }
    },
    yearly: {
      starter: { price: 190, period: '/year', savings: 'Save 17%' },
      professional: { price: 490, period: '/year', savings: 'Save 17%' },
      enterprise: { price: 990, period: '/year', savings: 'Save 17%' }
    }
  };

  const features = {
    starter: [
      { text: 'Up to 100 valuations per month', included: true },
      { text: 'Basic market data access', included: true },
      { text: 'Standard reporting tools', included: true },
      { text: 'Email support', included: true },
      { text: 'Mobile app access', included: true },
      { text: 'PDF export', included: true },
      { text: 'Advanced analytics', included: false },
      { text: 'Custom branding', included: false },
      { text: 'API access', included: false },
      { text: 'Priority support', included: false }
    ],
    professional: [
      { text: 'Up to 500 valuations per month', included: true },
      { text: 'Premium market data access', included: true },
      { text: 'Advanced reporting & analytics', included: true },
      { text: 'Priority email & chat support', included: true },
      { text: 'Mobile app access', included: true },
      { text: 'PDF & Excel export', included: true },
      { text: 'Custom branding', included: true },
      { text: 'Team collaboration (5 users)', included: true },
      { text: 'API access (limited)', included: true },
      { text: 'Phone support', included: false }
    ],
    enterprise: [
      { text: 'Unlimited valuations', included: true },
      { text: 'Real-time market data & news', included: true },
      { text: 'Advanced AI-powered insights', included: true },
      { text: '24/7 dedicated support', included: true },
      { text: 'Mobile & desktop apps', included: true },
      { text: 'All export formats', included: true },
      { text: 'Full custom branding', included: true },
      { text: 'Unlimited team members', included: true },
      { text: 'Full API access', included: true },
      { text: 'Dedicated account manager', included: true }
    ]
  };

  return (
    <div className='container-fluid bg-light'>
      {/* Hero Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 bg-white rounded-pill px-4 py-2 shadow-sm mb-4">
            <FaRocket className="text-success" />
            <span className="fw-semibold text-success">Transparent Pricing</span>
          </div>
          <h1 className="fw-bold display-4 mb-4" style={{ letterSpacing: '-0.02em' }}>
            Choose Your Perfect Plan
          </h1>
          <p className="text-muted fs-5 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
           Unlock powerful valuation tools tailored for financial analysts, investors, and businesses—get started today with flexible pricing that fits your needs.
          </p>
          
          {/* Billing Toggle */}
          <div className="d-inline-flex bg-white rounded-pill p-1 shadow-sm mb-5">
            <button 
              className={`btn rounded-pill px-4 py-2 fw-semibold transition-all ${billingCycle === 'monthly' ? 'btn-success shadow-sm' : 'btn-link text-muted'}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`btn rounded-pill px-4 py-2 fw-semibold position-relative ${billingCycle === 'yearly' ? 'btn-success shadow-sm' : 'btn-link text-muted'}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly
              <span className="position-absolute top-0 start-100 translate-middle badge bg-warning text-dark rounded-pill" style={{ fontSize: '0.65rem' }}>
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row g-4 justify-content-center align-items-stretch mb-5">
          {/* Starter Plan */}
          <div className="col-12 col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="card-body p-5 text-center">
                <div className="mb-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle" style={{ width: '80px', height: '80px' }}>
                    <FaStar size={32} className="text-primary" />
                  </div>
                </div>
                <h4 className="fw-bold mb-2">Starter</h4>
                <p className="text-muted mb-4">Perfect for individual professionals</p>
                <div className="mb-4">
                  <h2 className="fw-bold mb-0" style={{ color: '#4f8cff' }}>
                    ${pricingPlans[billingCycle].starter.price}
                    <span className="fs-6 text-muted fw-normal">{pricingPlans[billingCycle].starter.period}</span>
                  </h2>
                  {pricingPlans[billingCycle].starter.savings && (
                    <small className="text-success fw-semibold">{pricingPlans[billingCycle].starter.savings}</small>
                  )}
                </div>
                <ul className="list-unstyled text-start mb-4">
                  {features.starter.map((feature, idx) => (
                    <li key={idx} className="d-flex align-items-center py-2">
                      {feature.included ? (
                        <FaCheckCircle className="text-success me-3 flex-shrink-0" />
                      ) : (
                        <FaTimesCircle className="text-muted me-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-dark' : 'text-muted'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-outline-primary w-100 rounded-pill fw-semibold py-3">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>

          {/* Professional Plan - Most Popular */}
          <div className="col-12 col-lg-4">
            <div className="card h-100 border-0 shadow-lg rounded-4 position-relative" 
                 style={{ transform: 'scale(1.05)', border: '3px solid #22c55e !important' }}>
              <div className="position-absolute top-0 start-50 translate-middle-x" style={{ marginTop: '-1rem' }}>
                <span className="badge bg-success px-4 py-2 rounded-pill shadow fw-semibold">
                  <FaCrown className="me-1" /> Most Popular
                </span>
              </div>
              <div className="card-body p-5 text-center mt-3">
                <div className="mb-4">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                       style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}>
                    <FaCrown size={32} className="text-white" />
                  </div>
                </div>
                <h4 className="fw-bold mb-2 text-success">Professional</h4>
                <p className="text-muted mb-4">For growing teams and businesses</p>
                <div className="mb-4">
                  <h2 className="fw-bold mb-0 text-success">
                    ${pricingPlans[billingCycle].professional.price}
                    <span className="fs-6 text-muted fw-normal">{pricingPlans[billingCycle].professional.period}</span>
                  </h2>
                  {pricingPlans[billingCycle].professional.savings && (
                    <small className="text-success fw-semibold">{pricingPlans[billingCycle].professional.savings}</small>
                  )}
                </div>
                <ul className="list-unstyled text-start mb-4">
                  {features.professional.map((feature, idx) => (
                    <li key={idx} className="d-flex align-items-center py-2">
                      {feature.included ? (
                        <FaCheckCircle className="text-success me-3 flex-shrink-0" />
                      ) : (
                        <FaTimesCircle className="text-muted me-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-dark' : 'text-muted'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-success w-100 rounded-pill fw-semibold py-3 shadow">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="col-12 col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="card-body p-5 text-center">
                <div className="mb-4">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                       style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #fbbf24, #f59e0b)' }}>
                    <FaGem size={32} className="text-white" />
                  </div>
                </div>
                <h4 className="fw-bold mb-2">Enterprise</h4>
                <p className="text-muted mb-4">For large organizations</p>
                <div className="mb-4">
                  <h2 className="fw-bold mb-0" style={{ color: '#f59e0b' }}>
                    ${pricingPlans[billingCycle].enterprise.price}
                    <span className="fs-6 text-muted fw-normal">{pricingPlans[billingCycle].enterprise.period}</span>
                  </h2>
                  {pricingPlans[billingCycle].enterprise.savings && (
                    <small className="text-warning fw-semibold">{pricingPlans[billingCycle].enterprise.savings}</small>
                  )}
                </div>
                <ul className="list-unstyled text-start mb-4">
                  {features.enterprise.map((feature, idx) => (
                    <li key={idx} className="d-flex align-items-center py-2">
                      <FaCheckCircle className="text-success me-3 flex-shrink-0" />
                      <span className="text-dark">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-warning w-100 rounded-pill fw-semibold py-3 text-white">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="row g-4 my-5">
          <div className="col-12">
            <div className="bg-white rounded-4 p-5 shadow-sm">
              <div className="text-center mb-4">
                <h3 className="fw-bold mb-3">Why Choose Our Platform?</h3>
                <p className="text-muted">Trusted by over 10,000+ professionals worldwide</p>
              </div>
              <div className="row g-4 mt-5">
                <div className="col-md-4 text-center">
                  <div className="mb-3">
                    <FaShieldAlt size={36} className="text-success" />
                  </div>
                  <h6 className="fw-bold">Secure & Reliable</h6>
                  <p className="text-muted small">Bank-level security with 99.9% uptime</p>
                </div>
                <div className="col-md-4 text-center">
                  <div className="mb-3">
                    <FaChartLine size={36} className="text-success" />
                  </div>
                  <h6 className="fw-bold">Real-time Data</h6>
                  <p className="text-muted small">Live market data from trusted sources</p>
                </div>
                <div className="col-md-4 text-center">
                  <div className="mb-3">
                    <FaHeadset size={36} className="text-success" />
                  </div>
                  <h6 className="fw-bold">Expert Support</h6>
                  <p className="text-muted small">24/7 support from valuation experts</p>
                </div>

                <div className="col-md-4 text-center">
                  <div className="mb-3">
                    <FaLightbulb size={36} className="text-success" />
                  </div>
                  <h6 className="fw-bold">Special Focus on Startups</h6>
                  <p className="text-muted small">Tailored insights to support early-stage growth</p>
                </div>

                <div className="col-md-4 text-center">
                  <div className="mb-3">
                    <FaChartBar size={36} className="text-success" />
                  </div>
                  <h6 className="fw-bold">Industry Forecast Available</h6>
                  <p className="text-muted small">Stay ahead with data-driven industry trends</p>
                </div>

                <div className="col-md-4 text-center">
                  <div className="mb-3">
                    <FaFileAlt size={36} className="text-success" />
                  </div>
                  <h6 className="fw-bold">Valuation Report</h6>
                  <p className="text-muted small">Professional reports for informed decision-making</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <CallToAction />
      </div>
    </div>
  );
}
