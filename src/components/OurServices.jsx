import React from 'react';
import { FaChartLine, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import Banner from '../assets/images/banner1.jpg';

export default function OurServices() {
  return (
    <div className="container-fluid bg-light pt-4">
      <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary display-5" style={{ letterSpacing: 1 }}>Our Services</h2>
        <p className="text-muted fs-5">
          Empowering your financial strategies with modern, data-driven solutions.
        </p>
      </div>

      <div className="row g-4 justify-content-center mb-5">
        {/* Service 1 */}
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <div className="feature-card text-center "   >
            <div className="feature-icon mx-auto" >
              
              <FaChartLine className="fs-1 text-white" />
            </div>
            <h5 className="fw-bold text-center mb-2 text-primary">Real-Time Market Analytics</h5>
            <p className="text-center text-black mb-0" style={{ fontSize: '1rem' }}>
              Access up-to-the-minute financial data to stay ahead of market trends and make timely, confident decisions.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <div className="feature-card text-center " >
            <div className="feature-icon mx-auto" >
              <FaDatabase className="fs-1 text-white" style={{ color: '#' }} />
            </div>
            <h5 className="fw-bold text-center mb-2 text-primary" >Data Aggregation & Insights</h5>
            <p className="text-center text-black mb-0" style={{ fontSize: '1rem' }}>
              We compile and analyze industry-wide financial data for a holistic, reliable, and actionable view of the market.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <div className="feature-card text-center " >
            <div className="feature-icon mx-auto" >
              <FaShieldAlt className="fs-1 text-white" />
            </div>
            <h5 className="fw-bold text-center text-primary mb-2" >Secure & Reliable Platform</h5>
            <p className="text-center text-black mb-0" style={{ fontSize: '1rem' }}>
              Built with robust security and uptime in mind, ensuring trust and consistency with every session.
            </p>
          </div>
        </div>
      </div>
    </div>
      <div className="container" style={{height: '20rem', overflow: 'hidden', position: 'relative', borderRadius: '1rem', backgroundImage: `url(${Banner})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
    </div>
  );
}
