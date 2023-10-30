import React from 'react'
import css from "./Home.css"
import HeroSection from './HomePage/HeroSection'
import Testimonials from './HomePage/Testimonials'
import About from './HomePage/About'
import HighLights from './HomePage/HighLights'

const Home = () => {
  return (
    <div className='mainSection'>
      <HeroSection/>
      <HighLights/>
      <Testimonials/>
      <About/>
    </div>
  )
}

export default Home