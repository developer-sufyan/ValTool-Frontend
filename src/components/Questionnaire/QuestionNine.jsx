import Lottie from 'lottie-react';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import question9 from '../../assets/images/questionLotties/Corporation Stickers Business.json';

export default function QuestionNine() {
  const [coreFunction, setCoreFunction] = useState('');
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('delted question', coreFunction);
    console.log('question extra :', coreFunction);
    navigate('/question/10');
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
          What is the core function of the Target company?
        </h2>
        <div style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center', maxWidth: 400 }}>
          Please describe the main business activity or function of the target company (e.g., manufacturing, software development, consulting, retail, etc.).
        </div>
        <input
          type="text"
          placeholder="Enter the core function of the company"
          value={coreFunction}
          onChange={e => setCoreFunction(e.target.value)}
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
              cursor: coreFunction ? 'pointer' : 'not-allowed',
              width: '100%',
              opacity: coreFunction ? 1 : 0.6
            }}
            disabled={!coreFunction}
          >
            Next
          </button>
        </div>
      </div>
    </Fragment>
  );
}
