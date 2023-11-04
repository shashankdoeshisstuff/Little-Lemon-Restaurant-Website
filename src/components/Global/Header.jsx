import React from 'react'
import css from "./Header.css"
import Logo from "../../assets/Logo.png"
import Nav from './Nav'


const Header = () => {
  return (
    <section className='section'>
      <div className='grid-container header-container'>
        <div className='header-img-container'>
          <img className='headerImg' src={Logo} alt="error" />
        </div>
        <Nav/>
      </div>
    </section>
  )
}

export default Header