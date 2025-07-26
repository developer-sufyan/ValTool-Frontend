import { faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from '../../assets/images/profile.jpg';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { faBell, faWallet, faSignOutAlt, faUser, faArrowDown, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../contexts/AuthContext';

export default function DashboardNavbar() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <nav
      className="shadow-sm bg-light"
      style={{
        padding: '0.5rem 0',
        fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
        borderBottom: '1.5px solid #e3e8ee',
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        className="container-fluid d-flex align-items-center justify-content-between"
        style={{ maxWidth: 1440, margin: '0 auto' }}
      >
        <div className="d-flex align-items-center gap-3">
          {/* <FontAwesomeIcon icon={faVuejs} className="text-primary" size="2x" /> */}
          {/* <h2
            className="fw-bold mb-0"
            style={{
              letterSpacing: '1.5px',
              fontSize: '2.1rem',
              color: '#22C55E',
              textShadow: '0 2px 8px rgba(41,91,231,0.07)',
              userSelect: 'none',
            }}
          >
            Valuation <span className='text-primary'>Tool</span>
          </h2> */}
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="input-group" style={{ width: "15rem" }}>
            <input
              type="text"
              className="form-control border-1 bg-white rounded-pill fw-normal text-gray fs-6"
              placeholder="Search..."
              style={{
                fontSize: '1rem',
                padding: '0.6rem 1.2rem',
                background: '#f3f6fa',
                border: '1.5px solid #e3e8ee',
                boxShadow: '0 1px 4px rgba(41,91,231,0.03)',
              }}
            />
          </div>

          <Dropdown>
            <Dropdown.Toggle
              variant=""
              id="dropdown-bell"
              className="no-arrow border-0  p-0 m-0 feature-icon bg-white d-flex"
              style={{
                borderRadius: '50%',
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FontAwesomeIcon icon={faBell} size="lg" style={{ cursor: "pointer", color: '#fff' }} />
            </Dropdown.Toggle>
            <Dropdown.Menu className='bg-white text-dark shadow-sm p-2'>
              <Dropdown.Item className='fw-semibold'>Notification</Dropdown.Item>
              <Dropdown.Item className='fw-semibold'>Emails</Dropdown.Item>
              <Dropdown.Item className='fw-semibold'>Inbox</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant=""
              id="dropdown-wallet"
              className="no-arrow border-0  p-0 m-0 feature-icon bg-white d-flex "
              style={{
                borderRadius: '50%',
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FontAwesomeIcon icon={faWallet} size="lg" style={{ cursor: "pointer", color:"#fff" }} />
            </Dropdown.Toggle>
            <Dropdown.Menu className='bg-white text-dark shadow-sm p-2'>
              <Dropdown.Item className='fw-semibold'>Your Wallet</Dropdown.Item>
              <Dropdown.Item className='fw-semibold'>Your Program</Dropdown.Item>
              <Dropdown.Item className='fw-semibold'>Your Balance</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown >
            <Dropdown.Toggle
              variant=""
              id="profile-dropdown"
              className="no-arrow border-0 bg-primary d-flex align-items-center py-1 px-3 rounded-pill"
            >
              <img
                src={profile}
                alt="profile"
                width={44}
                height={44}
                className='rounded-pill border border-2 border-primary me-2'
                style={{ objectFit: 'cover', boxShadow: '0 2px 8px rgba(41,91,231,0.08)' }}
              />
              <div className='d-flex flex-column text-start'>
                <span className="fw-semibold mb-0 text-success" style={{ fontSize: '1.08rem' }}>
                  {user?.full_name || 'User Name'}
                </span>
                <span className='text-light' style={{ fontSize: "12px", marginTop: '-0.5rem' }}>
                  {user?.email || 'user@email.com'}
                </span>

              </div>
              <FontAwesomeIcon icon={faAngleDown} className='ms-2 text-light'></FontAwesomeIcon>
            </Dropdown.Toggle>
            <Dropdown.Menu className='bg-white border shadow-sm p-2'>
              <Dropdown.Item href="/profile" className='text-dark fw-normal d-flex align-items-center'>
                <FontAwesomeIcon icon={faUser} className="me-2" />
                Profile
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout} className='text-danger fw-normal d-flex align-items-center'>
                <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}
