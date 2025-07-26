// Home3.jsx
import React from 'react';
import company1 from '../assets/images/companies/shopify-logo.svg';
import company2 from '../assets/images/companies/atlassian-logo.svg';
import company3 from '../assets/images/companies/generalMill.webp';
import company4 from '../assets/images/companies/download.webp';
import company5 from '../assets/images/companies/pitchbook.brightspotcdn.webp';
import useFadeInOnScroll from '../components/FadeInOnScroll';

const companies = [
  { src: company1, alt: 'Shopify' },
  { src: company5, alt: 'Pitchbook' },
  { src: company4, alt: 'Download' },
  { src: company2, alt: 'Atlassian' },
  { src: company3, alt: 'General Mill' },
];

// ✅ Create a child component that uses the hook properly
const CompanyLogo = ({ src, alt }) => {
  const ref = useFadeInOnScroll(); // Hook at top level
  return (
    <div className="company-logo-item fade-in-on-scroll" ref={ref}>
      <img src={src} alt={alt} className="img-fluid company-logo-img" />
    </div>
  );
};

export default function Home3() {
  return (
    <div className="container  py-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2 className="fw-bold text-primary display-6 mb-3" style={{ letterSpacing: 1 }}>
            We believe trust is earned—and we’re here to earn yours
          </h2>
          <p className="text-muted fs-5 mb-0">
            Our commitment to delivering crucial information at every stage of your journey keeps our clients returning.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="company-logos-scroll d-flex align-items-center gap-4 justify-content-center">
            {companies.map((company) => (
              <CompanyLogo key={company.alt} src={company.src} alt={company.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
