import React, { Fragment } from 'react'
import FirstComponent from '../components/FirstComponent'
import Home2 from '../components/Home2'
import Home3 from '../components/Home3'
import Counter from '../components/Counter'
import Trust from '../components/Trust'
import ProductOffer from '../components/ProductOffer'
import CustomerExperience from '../components/CustomerExperience'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ModernHomepage from '../components/ModernHomepage'

export default function homePage() {
  return (
    <Fragment>
      {/* <Header/>  
      <FirstComponent/>
      <Home3/>
      <Home2/>
      <Trust/>
      <ProductOffer/>
      <CustomerExperience/>
      <Counter/>
      <Footer/> */}
      <ModernHomepage/>

    </Fragment>
  )
}
