import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardNavbar from '../Dashboard/DashboardNavbar';
import DashboardSidebar from '../Dashboard/DashboardSidebar';

export default function QuestionTwenty() {
  const [useBenchmarks, setUseBenchmarks] = useState('no');
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('question 19', useBenchmarks);
    console.log('question 19:', useBenchmarks);
    if(useBenchmarks === 'yes') {
      navigate('/question/21');
    } else {
      navigate('/question/complete');
    }
  };

  return (
    <Fragment>
      <DashboardNavbar/>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.04)',
        padding: '2rem 1rem',
      }}>
      {/* <DashboardSidebar/> */}

        <h2 style={{ fontWeight: 700, marginBottom: '0.7rem', fontSize: '2.2rem', textAlign: 'center' }}>
          In the absence of projected financial information or a business plan, would you like us to develop these projections using industry benchmarks and economic information?
        </h2>
        <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <label style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="radio"
              name="benchmarks"
              value="yes"
              checked={useBenchmarks === 'yes'}
              onChange={() => setUseBenchmarks('yes')}
              style={{ accentColor: '#295be7' }}
            />
            Yes
          </label>
          <label style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="radio"
              name="benchmarks"
              value="no"
              checked={useBenchmarks === 'no'}
              onChange={() => setUseBenchmarks('no')}
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
            Submit
          </button>
        </div>
      </div>
    </Fragment>
  );
}
