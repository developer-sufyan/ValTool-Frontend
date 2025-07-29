import Lottie from 'lottie-react';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import question10 from '../../assets/images/questionLotties/Corporation Stickers Business.json';
import DashboardNavbar from '../Dashboard/DashboardNavbar';
import DashboardSidebar from '../Dashboard/DashboardSidebar';

export default function QuestionTen() {
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('question 9', description);
    console.log('question 9:', description);
    navigate('/question/11');
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
          Write business description of the Target company
        </h2>
        <div style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center', maxWidth: 400 }}>
          Please provide a brief business description of the target company, including its products, services, market, and any other relevant details.
        </div>
        <textarea
          placeholder="Enter the business description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          style={{
            width: 320,
            maxWidth: '90%',
            padding: '0.5rem 1rem',
            borderRadius: 9,
            border: '1px solid #ccc',
            fontSize: '1rem',
            marginBottom: '1rem',
            outline: '#2c3e50',
            minHeight: 80,
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
              cursor: description ? 'pointer' : 'not-allowed',
              width: '100%',
              opacity: description ? 1 : 0.6
            }}
            disabled={!description}
          >
            Next
          </button>
        </div>
        
      </div>
    </Fragment>
  );
}
