import React, { Fragment } from 'react'
import OurServices from '../components/OurServices'
import Home2 from '../components/Home2'
import ProductOffer from '../components/ProductOffer'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function OurServicesPage() {
  return (
    <Fragment>
      <Header/>
        <OurServices/>
        <ProductOffer/>
        <Footer/>
    </Fragment>
  )
}
