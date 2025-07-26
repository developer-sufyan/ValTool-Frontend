import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuestionFifteen() {
  const [revenue, setRevenue] = useState('yes');
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('question 14', revenue);
    console.log('question 14:', revenue);
    navigate('/question/16');
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
        <h2 style={{ fontWeight: 700, marginBottom: '0.7rem', fontSize: '2.5rem', textAlign: 'center' }}>
          Has the Target company generated revenue over the last 2 years?
        </h2>
        <div style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center', maxWidth: 400 }}>
          Please indicate if the target company has generated any revenue in the past two years.
        </div>
        <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <label style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="radio"
              name="revenue"
              value="yes"
              checked={revenue === 'yes'}
              onChange={() => setRevenue('yes')}
              style={{ accentColor: '#295be7' }}
            />
            Yes
          </label>
          <label style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="radio"
              name="revenue"
              value="no"
              checked={revenue === 'no'}
              onChange={() => setRevenue('no')}
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
