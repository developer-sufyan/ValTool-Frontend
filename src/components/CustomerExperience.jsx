import React from 'react'
import comp from '../assets/images/free-copy-icon-download-in-svg-png-gif-file-formats--paste-cut-website-computer-pack-seo-web-icons-2522665.png'

export default function CustomerExperience() {
  return (
    <div className="container-fluid bg-primary pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 text-md-center">
            <img src={comp} alt="" className='img-fluid'/>
          </div>
          <div className="col-12 col-md-9 mt-3 content-center justify-content-center align-items-center text-center">
            <h1 className='fw-bold text-secondary'>A comprehensive product suite designed to deliver all your essentials—together, in one place.</h1>
            <p className=' text-white'>PitchBook is the definitive source for global capital market data and proprietary expert research, crafted to enhance your best work.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
  
