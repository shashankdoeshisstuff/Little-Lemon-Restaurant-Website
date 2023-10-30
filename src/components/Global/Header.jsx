import React from 'react'
import css from "./Header.css"
import Logo from "../../assets/Logo.png"
import Nav from './Nav'


const Header = () => {
  return (
    <section className='section'>
      <div className='container grid-container headerContainer'>
        <img className='headerImg' src={Logo} alt="error" />
        <Nav/>
      </div>
    </section>
  )
}

export default Header