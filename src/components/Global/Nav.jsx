import React, { useEffect, useState } from 'react'
import "./Nav.css"
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
      <>
        <nav className='header-nav'>
            <menu className='nav-menu'>
                <li><NavLink to="/" className="nav-item">Home</NavLink></li>
                <li><NavLink to="/Menu" className="nav-item">Menu</NavLink></li>
                <li><NavLink to="/BookingForm" className="nav-item">Reservation</NavLink></li>
                <li><NavLink to="/AboutUs" className="nav-item">About</NavLink></li>
                <li><NavLink to="/Profile" className="nav-item">Login</NavLink></li>
            </menu>
        </nav>
        <BiMenu  className='navHamburg'
        onClick={() => setHamValue(!hamValue)}/>
      </>
    )
  } else {
    if(hamValue){
      return (
        <>
          <nav className='hamburger-nav'>
          <AiOutlineClose  className='nav-hamburg-close nav-hamburg-icon'
          onClick={() => setHamValue(!hamValue)}/>
              <menu className='nav-menu'>
                <li onClick={() => setHamValue(!hamValue)}><NavLink to="/" className="nav-item">Home</NavLink></li>
                <li onClick={() => setHamValue(!hamValue)}><NavLink to="/Menu" className="nav-item">Menu</NavLink></li>
                <li onClick={() => setHamValue(!hamValue)}><NavLink to="/BookingForm" className="nav-item">Reservation</NavLink></li>
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