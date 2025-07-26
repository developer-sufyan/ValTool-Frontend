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
      <div className="row align-items-stretch g-5">
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
        <div className="col-12 col-lg-6 d-flex">
          <div className="p-4 bg-white rounded-4 shadow h-100 flex-fill d-flex flex-column justify-content-center">
            <h5 className="fw-bold mb-3 text-primary">Get in Touch</h5>
            <p className="text-muted mb-4">
              Have any questions or need assistance with our tools or services? Reach out and our team will respond promptly.
            </p>
            <ul className="list-unstyled mb-4 fs-6">
              <li className="mb-3 d-flex align-items-center">
                <FaEnvelope className="me-2 text-primary" /> <span><strong>Email:</strong> support@yourtool.com</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaPhoneAlt className="me-2 text-primary" /> <span><strong>Phone:</strong> +92 234 5678901</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaMapMarkerAlt className="me-2 text-primary" /> <span><strong>Address:</strong> Khalid Bin Walid Road, Dulara Business Corner, 6th Floor #603</span>
              </li>
            </ul>
            {/* Embedded Google Map */}
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d726.973033137973!2d67.06103311337314!3d24.87928038845914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fdc9c5a2c7f%3A0xd7dae08cfdfd2118!2sDulara%20Business%20Center!5e0!3m2!1sen!2s!4v1746961833134!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
