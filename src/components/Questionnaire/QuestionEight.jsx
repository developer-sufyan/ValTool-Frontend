import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';

// Import your animation JSON file (replace with your actual file)
import question8 from '../../assets/images/questionLotties/Corporation Stickers Business.json';

export default function QuestionEight() {
  const [percent, setPercent] = useState('');
  const navigate = useNavigate();

  const isValid = percent !== '' && !isNaN(percent) && Number(percent) >= 0.1 && Number(percent) <= 100;

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('question 8', percent);
    console.log('question 8:', percent);
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
        {/* Lottie animation at the top */}
        
        <h2 style={{ fontWeight: 700, marginBottom: '0.7rem', fontSize: '2.5rem', textAlign: 'center' }}>
          What is the percentage of equity interest to be valued?
        </h2>
        <div style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center', maxWidth: 400 }}>
          Our work will be based on the equity interest selected.
        </div>
        <input
          type="number"
          min="0.1"
          max="100"
          step="0.1"
          placeholder="Enter percentage (0.1% - 100%)"
          value={percent}
          onChange={e => setPercent(e.target.value)}
          style={{
            width: 320,
            maxWidth: '90%',
            padding: '0.5rem 1rem',
            borderRadius: 9,
            border: '1px solid #295be7',
            fontSize: '1rem',
            marginBottom: '1rem',
            outline: '#2c3e50',
            background: '#f8faff',
            color: '#2c3e50',
            boxShadow: '0 2px 8px rgba(41,91,231,0.08)',
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
              cursor: isValid ? 'pointer' : 'not-allowed',
              width: '100%',
              opacity: isValid ? 1 : 0.6
            }}
            disabled={!isValid}
          >
            Next
          </button>
        </div>
        
      </div>
    </Fragment>
  );
}
