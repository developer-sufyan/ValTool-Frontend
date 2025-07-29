import Lottie from 'lottie-react';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// TODO: Replace with your actual Lottie animation for question 3
import question3 from '../../assets/images/questionLotties/Corporation Stickers Business.json';
import DashboardNavbar from '../Dashboard/DashboardNavbar';
import DashboardSidebar from '../Dashboard/DashboardSidebar';

const valuationDates = [
  "30 June 2023",
  "31 December 2023",
  "31 January 2024",
  "29 February 2024",
  "31 March 2024",
  "30 April 2024",
  "31 May 2024",
  "30 June 2024",
  "31 July 2024",
  "31 August 2024",
  "30 September 2024",
  "31 October 2024",
  "30 November 2024",
  "31 December 2024",
  "31 January 2025",
  "28 February 2025",
  "31 March 2025",
  "30 April 2025",
  "31 May 2025",
  "30 June 2025"
];

export default function QuestionThree() {
  const [date, setDate] = useState(() => localStorage.getItem('valuationDate') || '');
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('question 3', date);
    navigate('/question/4');
    console.log('question 3:', date);
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
          What should be the valuation date for the analysis?
        </h2>
        <div style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center', maxWidth: 400 }}>
          Please specify the date you want the valuation to reflect. This is usually the current date or a recent fiscal period end.
        </div>

        <select
          value={date}
          onChange={handleDateChange}
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
          }}
        >
          <option value="">Select valuation date</option>
          {valuationDates.map(dateOption => (
            <option key={dateOption} value={dateOption}>{dateOption}</option>
          ))}
        </select>

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
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Next
          </button>
        </div>
      </div>
    </Fragment>
  );
}