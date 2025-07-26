import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuestionTwentyOne() {
  const [years, setYears] = useState('1');
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('question 20', years);
    console.log('question 20 :', years);
    navigate('/question/complete');
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
          Do you have revenue projections for the Target company based on your internal estimates? If yes, for how many years?
        </h2>
        <div style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center', maxWidth: 480 }}>
          Please select the number of years for which you have internal revenue projections for the Target company.
        </div>
        <div style={{ marginBottom: '1.5rem', width: 320, maxWidth: '90%' }}>
          <select
            value={years}
            onChange={e => setYears(e.target.value)}
            style={{ width: '100%', padding: '0.7rem 1rem', borderRadius: 6, border: '1.5px solid #000000', fontSize: '1rem', color: '#000000', fontWeight: 600, background: '#fff', outline: 'none' }}
          >
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
            <option value="4">4 years</option>
            <option value="5">5 years</option>
            <option value="na">Not Available</option>
          </select>
        </div>
        <div style={{ width: 320, maxWidth: '90%', margin: '0 auto 1rem auto' }}>
          <button
            onClick={handleNext}
            style={{ background: '#295be7', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1.5rem', fontWeight: 600, fontSize: '1rem', boxShadow: '0 2px 8px rgba(41,91,231,0.08)', cursor: 'pointer', width: '100%' }}
          >
            Submit
          </button>
        </div>
      </div>
    </Fragment>
  );
}
