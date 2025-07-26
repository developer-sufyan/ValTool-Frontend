import React, { Fragment } from 'react'
import computer from '../assets/images/computer.json'
import { ReactTyped } from 'react-typed'
import Lottie from 'lottie-react'


export default function Trust() {
  return (
    <Fragment>
        <div className="container">
            <div className="row  mb-5">
                <div className="col-md-6 col-sm-2 align-items-center d-flex justify-content-center pt-4 "> 
                    <Lottie
                      animationData={computer}
                      loop = {true} 
                      autoplay = {true}
                      style={{ width: 500, height: 400 }}
                    />
                </div>
                <div className="col-md-6 col-sm-10 pt-5 justify-content-center align-items-center">
                      <p className='text-center text-md-start fw-bold text-muted mt-5'>Trusted insights. Confident decisions</p>
                    <h1 className='text-center text-md-start fw-bold '>Trusted by--  
                      <ReactTyped
                        
                        strings={["hundreds", "thousands", "millions"]}
                        typeSpeed={60}
                        backSpeed={40}
                        loop
                      />
                      <br/>of customers, our platform delivers accurate, real-time insights that empower confident financial decisions.</h1>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
