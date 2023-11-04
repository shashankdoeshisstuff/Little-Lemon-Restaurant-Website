import React from 'react'
import css from "./Footer.css"
import footerImage from "../../assets/Logo2.png"
import {BsFacebook,BsInstagram, BsTwitter} from "react-icons/bs"
import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <>
    <section className='primary-background section'>
        <div className='container footer'>
            <img className='footer-logo' src={footerImage} alt="error" />
            <div>
                <span className='footerHd'>Sitemap</span>
                <menu>
                    <li><Link to="/" className="footerItem footer-hover">Home</Link></li>
                    <li><Link to="/Menu" className="footerItem footer-hover">Menu</Link></li>
                    <li><Link to="/BookingForm" className="footerItem footer-hover">Reservation</Link></li>
                    <li><Link to="/AboutUs" className="footerItem footer-hover">About</Link></li>
                    <li><Link to="/Profile" className="footerItem footer-hover">Login</Link></li>
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
                    <span className='footerSocialItem footer-hover'><BsFacebook/></span>
                    <span className='footerSocialItem footer-hover'><BsInstagram/></span>
                    <span className='footerSocialItem footer-hover'><BsTwitter/></span>
                </div>
            </div>
        </div>
    </section>
    <section className='primary-background section'>
        <div className='container github-container'>
            <h2 className='text-white'>Hey!</h2>
            <p className='text-white github-container-para'>
                " This website is a practice project, and while its 
                functionality may not work as intended, it serves as 
                a valuable learning experience. For additional information, 
                please visit the project's GitHub repository. "
            </p>
            <div className='github-icon-box'>
                <span>{'==>'}</span>
                <a className='text-white' 
                href="https://github.com/shashankgitrepos/Little-Lemon-Restaurant-Website.git"
                target='_blank' rel='nooponer noreferrer'
                >
                    {<AiFillGithub className='github-icon'/>} 
                </a>
                <span>{'<=='}</span>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer