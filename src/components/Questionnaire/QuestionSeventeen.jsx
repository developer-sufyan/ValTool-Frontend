import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';

import yearEndAnimation from '../../assets/images/questionLotties/Corporation Stickers Business.json';

export default function QuestionSeventeen() {
  const [yearEnd, setYearEnd] = useState('');
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    setYearEnd(e.target.value);
  };

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('question 16', yearEnd);
    console.log('question 16 :', yearEnd);

    if (yearEnd === localStorage.getItem('question 3')) {
      navigate('/question/19');
    } else {
      navigate('/question/18');
    }
  };

  // 🔍 Extract date info from localStorage
  const dateFromStorage = localStorage.getItem('question 3');
  let parsedDate = new Date(dateFromStorage);
  let storageMonth = parsedDate.toLocaleString('default', { month: 'long' });
  let storageYear = parsedDate.getFullYear();

  const months = ['March', 'June', 'September', 'December'];

  return (
    <Fragment>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.04)',
          padding: '2rem 1rem',
        }}
      >

        <h2
          style={{
            fontWeight: 700,
            marginBottom: '0.7rem',
            fontSize: '2.2rem',
            textAlign: 'center',
          }}
        >
          What is the financial year-end for the historical financial statements you will be providing?
        </h2>

        <div
          style={{
            color: '#555',
            fontSize: '1rem',
            marginBottom: '1.5rem',
            textAlign: 'center',
            maxWidth: 480,
          }}
        >
          Please select the month and day that marks the end of your company's financial year for the statements you will provide.
        </div>

        <div style={{ marginBottom: '1.5rem', width: 320, maxWidth: '90%' }}>
          <select
            value={yearEnd}
            onChange={handleDateChange}
            style={{
              width: '100%',
              padding: '0.7rem 1rem',
              borderRadius: 6,
              border: '1.5px solid #000000',
              fontSize: '0.9rem',
              color: '#000000',
              fontWeight: 600,
              background: '#f8faff',
              outline: 'none',
              marginTop: '0.5rem',
            }}
          >
            <option value="">Select valuation date</option>
            {months.map((monthName) => {
              const displayYear = storageMonth === monthName ? storageYear : storageYear - 1;
              const fullDate = `31 ${monthName} ${displayYear}`;
              return (
                <option key={monthName} value={fullDate}>
                  {fullDate}
                </option>
              );
            })}
          </select>
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
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Next
          </button>
        </div>

      </div>
    </Fragment>
  );
}
