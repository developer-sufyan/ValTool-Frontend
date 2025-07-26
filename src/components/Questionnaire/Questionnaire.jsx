import React from 'react';
import { Link } from 'react-router-dom';

export default function Questionnaire() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0,0,0,0.04)',
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.92)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        borderRadius: 16,
        padding: '2.5rem 2rem',
        maxWidth: 480,
        width: '100%',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀</div>
        <h2 style={{ fontWeight: 700, marginBottom: '1.2rem' }}>
          Welcome to Valuation Tool User !
        </h2>
        <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', color: '#222' }}>
          Spend 5 minutes on this tour, and you'll learn how to do your first valuation.<br /><br />
          Hit the 'next' button, and let's begin!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
         
         <Link to={'/question/1'} style={{ textDecoration: 'none' }} >
           <button style={{ background: '#295be7', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1.5rem', fontWeight: 600, fontSize: '1rem', boxShadow: '0 2px 8px rgba(41,91,231,0.08)', cursor: 'pointer' }} >
            Next
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
}
