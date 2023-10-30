import React, { useEffect, useState } from 'react'
import css from "./Nav.css"
import {BiMenu} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai" 
import {NavLink} from "react-router-dom"

const Nav = () => {
  const [hamValue, setHamValue] = useState(false);

  const handleResize = () => {
    if(window.innerWidth >= 1200){
      setHamValue(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  if(!hamValue){
    return (
      <div className='navBar'>
        <nav className='Navigation'>
            <menu className='navMenu'>
                <li><NavLink to="/" className="nav-item">Home</NavLink></li>
                <li><NavLink to="/Menu" className="nav-item">Menu</NavLink></li>
                <li><NavLink to="/BookingForm" className="nav-item">Reservation</NavLink></li>
                <li><NavLink to="/UnderConstruction" className="nav-item">Order Online</NavLink></li>
                <li><NavLink to="/AboutUs" className="nav-item">About</NavLink></li>
                <li><NavLink to="/Profile" className="nav-item">Login</NavLink></li>
            </menu>
        </nav>
        <BiMenu  className='navHamburg'
        onClick={() => setHamValue(!hamValue)}/>
      </div>
    )
  } else {
    if(hamValue){
      return (
        <>
          <nav className='hamburgerNav'>
          <AiOutlineClose  className='navHamburg'
          onClick={() => setHamValue(!hamValue)}/>
              <menu className='navMenu'>
                <li onClick={() => setHamValue(!hamValue)}><NavLink to="/" className="nav-item">Home</NavLink></li>
                <li onClick={() => setHamValue(!hamValue)}><NavLink to="/Menu" className="nav-item">Menu</NavLink></li>
                <li onClick={() => setHamValue(!hamValue)}><NavLink to="/BookingForm" className="nav-item">Reservation</NavLink></li>
                <li onClick={() => setHamValue(!hamValue)}><NavLink to="/UnderConstruction" className="nav-item">Order Online</NavLink></li>
                <li onClick={() => setHamValue(!hamValue)}><NavLink to="/AboutUs" className="nav-item">About</NavLink></li>
                <li onClick={() => setHamValue(!hamValue)}><NavLink to="/Profile" className="nav-item">Login</NavLink></li>
              </menu>
          </nav>
        </>
      )
    }
  }
}

export default Nav