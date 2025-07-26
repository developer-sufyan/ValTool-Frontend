import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import projectionAnimation from '../../assets/images/questionLotties/Corporation Stickers Business.json';

export default function QuestionNineteen() {
  const [projection, setProjection] = useState('one');
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('question 18', projection);
    console.log('question 18 :', projection);
    console.log('question 11:', question11);
    if (projection === 'na') {
      navigate('/question/20');
    }else{
      navigate('/question/complete');
    }
  };
  const question11 = localStorage.getItem('question 11');

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
        {/* Lottie animation removed */}
        <h2 style={{ fontWeight: 700, marginBottom: '0.7rem', fontSize: '2.2rem', textAlign: 'center' }}>
          Can you provide the projected financial information or business plan? If yes, for how many years?
        </h2>
        <div style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center', maxWidth: 480 }}>
          Please select the number of years for which you can provide projected financial information or a business plan.
        </div>
        <div style={{ marginBottom: '1.5rem', width: 320, maxWidth: '90%' }}>
          <select
            value={projection}
            onChange={e => setProjection(e.target.value)}
            style={{ width: '100%', padding: '0.7rem 1rem', borderRadius: 6, border: '1.5px solid #000000', fontSize: '1rem', color: '#000000', fontWeight: 600, background: '#fff', outline: 'none' }}
          >
            <option value="one">One year</option>
            <option value="two">Two years</option>
            <option value="three">Three years</option>
            <option value="four">Four years</option>
            <option value="five">Five years</option>
            { question11 === 'yes'? <option value="full">Full life of the project</option> : null}
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
        {/* Question count removed */}
      </div>
    </Fragment>
  );
}
