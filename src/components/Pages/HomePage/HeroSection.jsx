import React, { useEffect, useState } from 'react'
import css from "./HeroSection.css"
import heroImage from "../../../assets/restauranfood.jpg"
import { Link } from 'react-router-dom'

const HeroSection = () => {
  
  return (
    <section className='section primary-background hero'>
      <div className='container grid-container page-top-container'>
        <div className='about-text-box'>
          <div>
            <h1>Little Lemon</h1>
            <h2 className='text-white'>Chicago</h2>
          </div>
          <p className='text-white'>
            We are a family owned Mediterranean restaurant,focused on traditional recipes served with a modern twist.
          </p>
          <Link to="/BookingForm">
            <button className='mainBtn yellowBorderBtn'>
              Reserve a Table
            </button>
          </Link>
        </div>
        <img className="page-main-image" src={heroImage} alt="error" />
      </div>
    </section>
  )
}

export default HeroSection