import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardNavbar from '../Dashboard/DashboardNavbar';
import DashboardSidebar from '../Dashboard/DashboardSidebar';
// ...existing code...

export default function QuestionSix() {
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('question 6', selected);
    if(selected ==='yes'){
      navigate('/question/7');
    } else {
      navigate('/question/8');
    }
    console.log('question 6 :', selected);
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
        {/* Lottie animation removed */}
        <h2 style={{ fontWeight: 700, marginBottom: '0.7rem', fontSize: '2.5rem', textAlign: 'center' }}>
          Is the Target Company publicly listed?
        </h2>
        <div style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center', maxWidth: 400 }}>
          Please indicate whether the target company is listed on a public stock exchange.
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <label style={{ fontSize: '1.1rem', cursor: 'pointer' }}>
            <input
              type="radio"
              name="publiclyListed"
              value="yes"
              checked={selected === 'yes'}
              onChange={() => setSelected('yes')}
              style={{ marginRight: 8 }}
            />
            Yes
          </label>
          <label style={{ fontSize: '1.1rem', cursor: 'pointer' }}>
            <input
              type="radio"
              name="publiclyListed"
              value="no"
              checked={selected === 'no'}
              onChange={() => setSelected('no')}
              style={{ marginRight: 8 }}
            />
            No
          </label>
        </div>
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
              cursor: selected ? 'pointer' : 'not-allowed',
              width: '100%',
              opacity: selected ? 1 : 0.6
            }}
            disabled={!selected}
          >
            Next
          </button>
        </div>
        {/* Question count removed */}
      </div>
    </Fragment>
  );
}
