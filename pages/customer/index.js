import React from 'react'
import Navbar from '../../components/Customer/Layout/Navbar'
import Footer from '../../components/Customer/Layout/Footer'
import Hero from '../../components/Customer/Generic/Hero'

export default function index() {
  return (
    <div
      style={{
        backgroundColor: '#F6F9FC',
      }}
    >
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}
