import Lottie from 'lottie-react';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questionLottie from '../../assets/images/questionLotties/Corporation Stickers Business.json';

export default function QuestionTwelve() {
  const [isConcession, setIsConcession] = useState('no');
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('question 11', isConcession);
    console.log('question 11:', isConcession);
    navigate('/question/13');
  };

  return (
    <Fragment>
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
          Is this a concession company?
        </h2>
        <div style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center', maxWidth: 400 }}>
          Company granted exclusive rights to build and operate assets under long-term government agreement.
        </div>
        <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <label style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="radio"
              name="concession"
              value="yes"
              checked={isConcession === 'yes'}
              onChange={() => setIsConcession('yes')}
              style={{ accentColor: '#295be7' }}
            />
            Yes
          </label>
          <label style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="radio"
              name="concession"
              value="no"
              checked={isConcession === 'no'}
              onChange={() => setIsConcession('no')}
              style={{ accentColor: '#295be7' }}
            />
            No
          </label>
        </div>
        <div style={{ width: 320, maxWidth: '90%', margin: '0 auto 1rem auto' }}>
          <button
            onClick={handleNext}
            style={{ background: '#295be7', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1.5rem', fontWeight: 600, fontSize: '1rem', boxShadow: '0 2px 8px rgba(41,91,231,0.08)', cursor: 'pointer', width: '100%' }}
          >
            Next
          </button>
        </div>
        
      </div>
    </Fragment>
  );
}
