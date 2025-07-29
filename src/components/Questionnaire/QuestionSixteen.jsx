import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardNavbar from '../Dashboard/DashboardNavbar';
import DashboardSidebar from '../Dashboard/DashboardSidebar';

export default function QuestionSixteen() {
  const [years, setYears] = useState('one');
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('question 15', years);
    console.log('question 15:', years);
    navigate('/question/17');
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
        <h2 style={{ fontWeight: 700, marginBottom: '0.7rem', fontSize: '2.2rem', textAlign: 'center' }}>
          Please confirm the number of historical years preceding the Valuation Date for which you will be able to provide annual financial statements.
        </h2>
        <div style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center', maxWidth: 480 }}>
          Kindly note that a minimum of one year of financial information is required for our analysis. Providing additional years of historical financial data will enhance the robustness and accuracy of our valuation estimates.
        </div>
        <div style={{ marginBottom: '1.5rem', width: 320, maxWidth: '90%' }}>
          <select
            value={years}
            onChange={e => setYears(e.target.value)}
            style={{ width: '100%', padding: '0.7rem 1rem', borderRadius: 6, border: '1.5px solid #000000', fontSize: '0.9rem', color: '#000000', fontWeight:400, background: '#fff', outline: 'none' }}
          >
            <option value="one">One year</option>
            <option value="two">Two years</option>
            <option value="more">More than two years</option>
          </select>
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
