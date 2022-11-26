import React from 'react'
import Contactar from '../components/contact/Contactar'
import Header from '../components/header/Header'
import Layout from '../components/layout/Layout'

const ContactUs = () => {
  return (
    <Layout>
      <Header />
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
            <div></div>
            <Contactar/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs