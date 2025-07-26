import React from 'react';
import Lottie from 'lottie-react';
import thankyouAnimation from '../../assets/images/questionLotties/Corporation Stickers Business.json';
import { Link } from 'react-router-dom'; // add this import

export default function QuestionComplete() {
  const handleNext = () => {
    const loc = localStorage.removeItem(
      'question 1',
      'question 2',
      'question 3',
      'question 4',
      'question 5',
      'question 6', 
      'question 7',
      'question 8',
      'question 9',
      'question 10',
      'question 11',
      'question 12',
      'question 13',
      'question 14',
      'question 15',  
      'question 16',
      'question 17',
      'question 18',
      'question 19',
      'question 20',
    )
    window.location.href = '/dashboard'; // redirect to dashboard
    console.log('localStorage cleared and redirected to dashboard:', loc);
  };
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0,0,0,0.04)',
      padding: '2rem 1rem',
    }}>
      <div style={{ width: 220, height: 220, marginBottom: '1.5rem' }}>
        <Lottie
          animationData={thankyouAnimation}
          loop={false}
          autoplay
          style={{ width: '100%', maxWidth: '340px', height: 'auto' }}
        />
      </div>
      <h2 style={{ fontWeight: 700, marginBottom: '1.2rem', fontSize: '2.5rem', textAlign: 'center', color: '#295be7' }}>
        Thank You!
      </h2>
      <div style={{ color: '#333', fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center', maxWidth: 480 }}>
        We sincerely appreciate you taking the time to complete our valuation questionnaire.<br /><br />
        Your responses will help us provide a more accurate and tailored analysis for your needs.<br /><br />
        If you have any questions or need further assistance, please don't hesitate to contact us.<br /><br />
        <b>Have a wonderful day!</b>
      </div>
      <div style={{ width: '100%', maxWidth: 340, display: 'block' }}>
        <button
        onClick={handleNext}
          style={{
            width: '100%',
            padding: '1rem',
            fontSize: '0.9rem',
            fontWeight: 600,
            background: '#295be7',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(41,91,231,0.08)'
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
