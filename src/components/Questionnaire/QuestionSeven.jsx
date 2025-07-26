import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Import your animation JSON file (replace with your actual file)

const companyList = [
  'Apple Inc.',
  'Microsoft Corporation',
  'Amazon.com, Inc.',
  'Alphabet Inc.',
  'Meta Platforms, Inc.',
  'Tesla, Inc.',
  'Berkshire Hathaway Inc.',
  'Johnson & Johnson',
  'Visa Inc.',
  'Walmart Inc.',
  // ...add more as needed
];

export default function QuestionSeven() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();

  const filteredCompanies = companyList.filter(company =>
    company.toLowerCase().includes(search.toLowerCase())
  );

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('question 7', selected);
    console.log('question 7 :', selected);
    navigate('/question/8');
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
          Search for the Target Company
        </h2>
        <div style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center', maxWidth: 400 }}>
          This question is based on your previous answer (whether the company is publicly listed).<br />
          Please search and select the publicly listed company you want to analyze.
        </div>
        <input
          type="text"
          placeholder="Type company name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
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
        <div style={{
          width: 320,
          maxWidth: '90%',
          maxHeight: 180,
          overflowY: 'auto',
          marginBottom: '1rem',
          background: '#fff',
          borderRadius: 9,
          border: '1px solid #eee',
          boxShadow: '0 2px 8px rgba(41,91,231,0.04)',
        }}>
          {filteredCompanies.length === 0 && (
            <div style={{ padding: '0.7rem', color: '#aaa', textAlign: 'center' }}>No companies found</div>
          )}
          {filteredCompanies.map(company => (
            <div
              key={company}
              onClick={() => setSelected(company)}
              style={{
                padding: '0.7rem 1rem',
                cursor: 'pointer',
                background: selected === company ? '#eaf0fe' : 'transparent',
                color: selected === company ? '#295be7' : '#222',
                fontWeight: selected === company ? 600 : 400,
              }}
            >
              {company}
            </div>
          ))}
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
      </div>
    </Fragment>
  );
}
