import React, { Fragment } from 'react'
import product from '../assets/images/Website Traffic Data.json'
import Lottie from 'lottie-react'

export default function ProductOffer() {
  return (
    <Fragment>
      <div className="container-fluid bg-light pb-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-12 col-md-4 d-flex justify-content-center">
              <Lottie
                animationData={product}
                loop={true}
                autoplay={true}
                style={{ width: 500}}
              />
            </div>
            <div className="col-12 col-md-8 d-flex justify-content-center flex-column mt-5">
              <p className="text-start body-color fs-5 m-0 pb-1">
                — designed to deliver all your essentials. Together, in one place.
              </p>
              <h1 className="fw-bold text-primary fs-1 mb-3">
                A Comprehensive Product Suite
              </h1>
              <p className="text-start body-color fs-4">
                ValTool is the definitive source for global capital market data and proprietary expert research, crafted to enhance your best work.
              </p>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  )
}
