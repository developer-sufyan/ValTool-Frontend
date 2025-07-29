import Lottie from 'lottie-react';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questionLottie from '../../assets/images/questionLotties/Corporation Stickers Business.json';
import DashboardNavbar from '../Dashboard/DashboardNavbar';
import DashboardSidebar from '../Dashboard/DashboardSidebar';

export default function QuestionEleven() {
  const [industry, setIndustry] = useState('');
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('question 10', industry);
    console.log('question 10 :', industry);
    navigate('/question/12');
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
        {/* Lottie animation at the top */}
        
        <h2 style={{ fontWeight: 700, marginBottom: '0.7rem', fontSize: '2.5rem', textAlign: 'center' }}>
          What is industry related to the Target company?
        </h2>
        <div style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center', maxWidth: 400 }}>
          Please specify the industry sector that best describes the target company's business.
        </div>
        <select
          value={industry}
          onChange={e => setIndustry(e.target.value)}
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
        >
          <option value="">Choose industry...</option>
          <option value="one">Industry One</option>
          <option value="two">Industry Two</option>
          <option value="three">Industry Three</option>
          <option value="four">Industry Four</option>
        </select>
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
              cursor: industry ? 'pointer' : 'not-allowed',
              width: '100%',
              opacity: industry ? 1 : 0.6
            }}
            disabled={!industry}
          >
            Next
          </button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span style={{ color: '#888', fontSize: '1rem' }}>11 of 21</span>
        </div>
      </div>
    </Fragment>
  );
}
