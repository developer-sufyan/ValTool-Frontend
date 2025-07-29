import Lottie from 'lottie-react';
import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import question1 from '../../assets/images/questionLotties/Corporation Stickers Business.json';
import DashboardNavbar from '../Dashboard/DashboardNavbar';
import DashboardSidebar from '../Dashboard/DashboardSidebar';

export default function QuestionOne() {
  const [companyName, setCompanyName] = useState(() => localStorage.getItem('companyName') || '');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('question 1', companyName);
    navigate('/question/2');
    console.log('question 1 :', companyName);
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
      {/* Lottie animation removed */}

      <h2 style={{ fontWeight: 700, marginBottom: '0.7rem', fontSize: '2.5rem', textAlign: 'center' }}>
        What is your company name?
      </h2>
      <div style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center', maxWidth: 400 }}>
        Please enter the full legal name of your company. This helps us personalize your experience and ensure your data is accurate.
      </div>

      <input
        type="text"
        placeholder="Enter your company name"
        value={companyName}
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
      {/* Question count removed */}
    </div>
   </Fragment>
  );
}
