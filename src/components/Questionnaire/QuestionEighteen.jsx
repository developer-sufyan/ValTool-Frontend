import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuestionEighteen() {
  const [canProvide, setCanProvide] = useState('yes');
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('question 17', canProvide);
    console.log('question 17 :', canProvide);
    navigate('/question/19');
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
        <h2 style={{ fontWeight: 700, marginBottom: '0.7rem', fontSize: '2.2rem', textAlign: 'center' }}>
          Can you provide year to date Financial Statement of 01 July 2022 to 31 January 2025?
        </h2>
        <div style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center', maxWidth: 480 }}>
          Please indicate if you are able to provide a year-to-date financial statement for the period 01 July 2022 to 31 January 2025.
        </div>
        <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <label style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="radio"
              name="canProvide"
              value="yes"
              checked={canProvide === 'yes'}
              onChange={() => setCanProvide('yes')}
              style={{ accentColor: '#295be7' }}
            />
            Yes
          </label>
          <label style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="radio"
              name="canProvide"
              value="no"
              checked={canProvide === 'no'}
              onChange={() => setCanProvide('no')}
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
