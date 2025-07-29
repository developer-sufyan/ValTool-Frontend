import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardNavbar from '../Dashboard/DashboardNavbar';
import DashboardSidebar from '../Dashboard/DashboardSidebar';
// import your animation JSON file
// ...existing code...

const currencies = [
  { value: 'usd', label: 'US Dollar (USD)' },
  { value: 'gbp', label: 'Pound Sterling (GBP)' },
  { value: 'pkr', label: 'Pakistani Rupee (PKR)' },
  { value: 'inr', label: 'Indian Rupee (INR)' }
];

export default function QuestionFour() {

  const [currency, setCurrency] = useState(() => localStorage.getItem('currency') || '');
  const navigate = useNavigate();
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('question 4', currency);
    navigate('/question/5');
    console.log('question 4:', currency);
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
       
        <h2 style={{ fontWeight: 700, marginBottom: '0.7rem', fontSize: '2.5rem', textAlign: 'center' }}>
          Which currency would you like the valuation analysis to be conducted in?
        </h2>
        <div style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center', maxWidth: 400 }}>
          Please select the currency for your valuation report.
        </div>
        <select
          value={currency}
          onChange={handleCurrencyChange}
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
            appearance: 'none',
            cursor: 'pointer'
          }}>
          <option value="">Select currency</option>
          {currencies.map(currency => (
            <option key={currency.value} value={currency.value}>{currency.label}</option>
          ))}
        </select>
        <div style={{ width: 320, maxWidth: '90%', margin: '0 auto 1rem auto' }}>
            <button
              onClick={handleNext}
              style={{ background: '#295be7', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1.5rem', fontWeight: 600, fontSize: '1rem', boxShadow: '0 2px 8px rgba(41,91,231,0.08)', cursor: 'pointer', width: '100%' }}>
              Next
            </button>
        </div>
        {/* Question count removed */}
      </div>
    </Fragment>
  );
}

