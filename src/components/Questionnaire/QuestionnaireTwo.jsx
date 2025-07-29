import Lottie from 'lottie-react';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// TODO: Replace with your actual Lottie animation for question 2
import question2 from '../../assets/images/questionLotties/2nd.json';
import DashboardNavbar from '../Dashboard/DashboardNavbar';
import DashboardSidebar from '../Dashboard/DashboardSidebar';



export default function QuestionnaireTwo() {
  const navigate = useNavigate();
  const [purpose, setPurpose] = useState(() => localStorage.getItem('valuationPurpose') || '');

  const handleInputChange = (e) => {
    setPurpose(e.target.value);
  };

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('question 2', purpose);
    navigate('/question/3');
    console.log('question 2:', purpose);
  };
  return (
    <Fragment>
      <DashboardNavbar/>
      {/* <DashboardSidebar/> */}
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.04)',
        padding: '2rem 1rem',
      }}>
        {/* Lottie animation placeholder */}
        <div style={{ width: 220, height: 220, marginBottom: '1.5rem' }}>
          {/* <Lottie
            animationData={question2}
            loop
            autoplay
            style={{ width: '100%', maxWidth: '340px', height: 'auto' }}
          /> */}
        </div>

        <h2 style={{ fontWeight: 700, marginBottom: '0.7rem', fontSize: '2.5rem', textAlign: 'center' }}>
          What is the purpose of valuation?
        </h2>
        <div style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center', maxWidth: 400 }}>
          Please describe why you are seeking a valuation. This helps us tailor the process to your specific needs (e.g., investment, sale, compliance, etc.).
        </div>

        <input
          type="text" 
          placeholder="Enter the purpose of valuation"
          value={purpose}
          onChange={handleInputChange}
          style={{
            width: 320,
            maxWidth: '90%',
            padding: '0.5rem 1rem',
            borderRadius: 9,
            border: '1px solid #ccc',
            fontSize: '1rem',
            marginBottom: '1rem',
            outline: '#2c3e50',
          }}
        />

        <div style={{ width: 320, maxWidth: '90%', margin: '0 auto 1rem auto' }}>
          <button
            onClick={handleNext}
            style={{
              background: '#295be7',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '0.5rem 1.5rem',
              fontWeight: 600,
              fontSize: '1rem',
              boxShadow: '0 2px 8px rgba(41,91,231,0.08)',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Next
          </button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span style={{ color: '#888', fontSize: '1rem' }}>2 of 21</span>
        </div>
      </div>
    </Fragment>
  );
}
