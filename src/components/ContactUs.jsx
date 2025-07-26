import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="container py-5">
      {/* Section Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold display-5" style={{ letterSpacing: 1 }}>Contact Us</h2>
        <p className="text-muted fs-5">
          We’d love to hear from you. Whether you have questions, feedback, or partnership opportunities — we’re here to help.
        </p>
      </div>

      {/* Contact Content Row */}
      <div className="row align-items-stretch  justify-content-center g-5">
        {/* Contact Form */}
        <div className="col-12 col-lg-6 d-flex">
          <div className="bg-white rounded-4 shadow-sm p-4 flex-fill d-flex flex-column justify-content-center h-100">
            <h5 className="fw-bold mb-3 text-primary">Send Us a Message</h5>
            <form>
              <div className="mb-3">
                <label className="form-label fw-semibold text-primary">Name</label>
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold text-primary">Email</label>
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold text-primary">Message</label>
                <textarea className="form-control" rows={5} placeholder="Type your message..." required />
              </div>
              <button type="submit" className="btn btn-primary px-4 fw-bold rounded-pill">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Details */}
        
      </div>
    </div>
  );
}
