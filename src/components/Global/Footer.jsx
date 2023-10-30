import React from 'react'
import css from "./Footer.css"
import footerImage from "../../assets/Logo2.png"
import {BsFacebook,BsInstagram, BsTwitter} from "react-icons/bs"

const Footer = () => {
  return (
    <section className='primary-background section'>
        <div className='container footer'>
            <img className='footer-logo' src={footerImage} alt="error" />
            <div>
                <span className='footerHd'>Sitemap</span>
                <menu>
                    <li><a href="" className='footerItem'>Home</a></li>
                    <li><a href="" className='footerItem'>About</a></li>
                    <li><a href="" className='footerItem'>Menu</a></li>
                    <li><a href="" className='footerItem'>Reservation</a></li>
                    <li><a href="" className='footerItem'>Order Online</a></li>
                    <li><a href="" className='footerItem'>Login</a></li>
                </menu>
            </div>
            <div>
                <span className='footerHd'>Contact Us</span>
                <menu>
                    <li className='footerItem'>678 Pisa Ave, Chicago, IL 60611s</li>
                    <li className='footerItem'>(312) 593-2744</li>
                    <li className='footerItem'>customer@littlelemon.com</li>
                </menu>
            </div>
            <div className='footerSocials'>
                <span className='footerHd'>Connect with Us</span>
                <div>
                    <a href="" className='footerSocialItem'><BsFacebook/></a>
                    <a href="" className='footerSocialItem'><BsInstagram/></a>
                    <a href="" className='footerSocialItem'><BsTwitter/></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer