import React, { Fragment } from 'react'
import AboutUs from '../components/AboutUs'
import Counter from '../components/Counter'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AboutUsPage() {
  return (
    <Fragment>
        <Header/>
        <AboutUs/>
        {/* <Counter/> */}
        <Footer/>
    </Fragment>
  )
}
