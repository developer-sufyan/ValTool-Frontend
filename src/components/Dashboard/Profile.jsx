import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment, use, useEffect, useState } from 'react'
import profile from '../../assets/images/profile.jpg'
import apiService from '../../services/apiService';
export default function Profile() {


  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  console.log('Profile state:', profile);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await apiService.get('/api/users/me');
        // console.log('Profile data fetched:', response);
        console.log("profile data" , response)
        setProfile(response);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <Fragment>
        <div className="container" style={{ fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif" }}>
            <div className="row">
                <div className="col-md-8">
            <div className="card shadow border-0">
              <div className="card-header bg-primary">
                <h5 className="title text-white fw-bold mb-0">Edit Profile</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-md-5 pr-md-1">
                      <div className="form-group">
                         <label className="text-primary fw-bold">Company (disabled)</label>
                        <input type="text" className="form-control border border-gray" readOnly placeholder="Company" />
                      </div>
                    </div>
                    <div className="col-md-3 px-md-1">
                      <div className="form-group">
                         <label className="text-primary fw-bold">Username</label>
                        <input type="text" className="form-control border border-gray" placeholder={profile.full_name} />
                      </div>
                    </div>
                    <div className="col-md-4 pl-md-1">
                      <div className="form-group">
                        <label for="exampleInputEmail1" className="text-primary fw-bold">Email address</label>
                        <input type="email" className="form-control border border-gray" placeholder={profile.email}/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pr-md-1">
                      <div className="form-group">
                         <label className="text-primary fw-bold">First Name</label>
                        <input type="text" className="form-control border border-gray" placeholder="Company"/>
                      </div>
                    </div>
                    <div className="col-md-6 pl-md-1">
                      <div className="form-group">
                         <label className="text-primary fw-bold">Last Name</label>
                        <input type="text" className="form-control border border-gray" placeholder="Last Name" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                         <label className="text-primary fw-bold">Address</label>
                        <input type="text" className="form-control border border-gray" placeholder="Home Address" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 pr-md-1">
                      <div className="form-group">
                         <label className="text-primary fw-bold">City</label>
                        <input type="text" className="form-control border border-gray" placeholder="City"/>
                      </div>
                    </div>
                    <div className="col-md-4 px-md-1">
                      <div className="form-group">
                         <label className="text-primary fw-bold">Country</label>
                        <input type="text" className="form-control border border-gray" placeholder="Country"/>
                      </div>
                    </div>
                    <div className="col-md-4 pl-md-1">
                      <div className="form-group">
                         <label className="text-primary fw-bold">Postal Code</label>
                        <input type="number" className="form-control border border-gray" placeholder="ZIP Code"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="form-group">
                         <label className="text-primary fw-bold">About Me</label>
                        <textarea rows="4" cols="80" className="form-control border border-gray" placeholder="Here can be your description" ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer bg-primary">
                <button
                  type="submit"
                  className="btn btn-light btn-sm fw-bold text-uppercase"
                  style={{
                    borderRadius: 8,
                    letterSpacing: '1px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    transition: 'background 0.2s, color 0.2s'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#051c38"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#051c38"; }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-user shadow border-0">
              <div className="card-body">
                <div className="author text-center">
                  <img className="avatar rounded-pill border border-3 border-primary mb-2" src={profile} style={{ width: 90, height: 90, objectFit: 'cover' }} />
                  <h5 className="fw-bold mb-0">Mike Andrew</h5>
                  <p className="description text-muted mb-2" style={{ fontSize: '0.95rem' }}>
                    Ceo/Co-Founder
                  </p>
                </div>
                <div className="card-description pt-3 text-center text-muted" style={{ fontSize: '0.97rem' }}>
                  Do not be scared of the truth because we need to restart the human foundation in truth. And I love you like Kanye loves Kanye. I love Rick Owens’ bed design but the back is...
                </div>
              </div>
              <div className="card-footer bg-primary">
                <div className="button-container d-flex justify-content-center gap-2">
                  <button
                    className="btn btn-icon text-white btn-round btn-facebook"
                    style={{ background: '#3b5998', border: 'none', borderRadius: '50%', width: 40, height: 40, transition: 'background 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#2d4373'}
                    onMouseLeave={e => e.currentTarget.style.background = '#3b5998'}
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </button>
                  <button
                    className="btn btn-icon text-white btn-round btn-twitter"
                    style={{ background: '#1da1f2', border: 'none', borderRadius: '50%', width: 40, height: 40, transition: 'background 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#0d8ddb'}
                    onMouseLeave={e => e.currentTarget.style.background = '#1da1f2'}
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>
                  <button
                    className="btn btn-icon text-white btn-round btn-google"
                    style={{ background: '#ea4335', border: 'none', borderRadius: '50%', width: 40, height: 40, transition: 'background 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#b31412'}
                    onMouseLeave={e => e.currentTarget.style.background = '#ea4335'}
                  >
                    <FontAwesomeIcon icon={faGoogle} />
                  </button>
                </div>
              </div>
            </div>
          </div>
            </div>
        </div>
    </Fragment>
  )
}
