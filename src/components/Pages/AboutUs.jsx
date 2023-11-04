import React from 'react'
import css from './AboutUs.css'
import {RiTimeFill} from "react-icons/ri"
import aboutUsMainImage from '../../assets/aboutus1.jpg'
import aboutUsImage2 from '../../assets/aboutus2.jpg'
import aboutUsImage3 from '../../assets/Mario and Adrian b.jpg'
import PageTopSection from './Page-components/PageTopSection'

const AboutUs = () => {
    const aboutArticle = (Image, BoldText, Para, ClassName) => {
        return (
            <section className='section'>
                <div className='container'>
                    <img className={`page-main-image ${ClassName}`} src={Image} alt="error" />
                    <div>
                        <p>
                            <span className='bigBold'>{BoldText}</span>
                            {Para}
                        </p>
                    </div>
                </div>
            </section>
        )
    }

    const aboutArticlePara = {
        FirstPara: `Little Lemon, we believe that the heart of every great meal lies in 
        the harmony of flavors, the warmth of tradition, and the joy of sharing. 
        Our culinary journey began with a deep appreciation for the Mediterranean's 
        rich tapestry of tastes and cultures. From the sun-drenched coasts of Greece 
        to the bustling spice markets of Turkey, we've embarked on a voyage to bring you a 
        dining experience that is not just about food but a celebration of life, love, 
        and connection. Our kitchen is a melting pot of family recipes passed down through 
        generations, combined with a modern twist that caters to the diverse and evolving 
        palates of our cherished guests. Our commitment to using fresh, locally-sourced 
        ingredients and time-honored cooking techniques ensures that each dish that 
        leaves our kitchen is a piece of art, a reflection of the Mediterranean's spirit. 
        Whether you're joining us for a cozy dinner, a celebration, or a casual gathering 
        with friends, we invite you to embark on a culinary adventure with us and savor 
        the flavors of our heritage, for each meal at Little Lemon tells a story - 
        a story of tradition, passion, and the timeless beauty of the Mediterranean.`,
        
        SecondPara :`the heart of Chicago, Illinois, where the city's rich tapestry of cultures 
        converge, there stands a family-owned restaurant that has been a labor of love 
        for two brothers, Mario and Adrian. These two Italian siblings embarked on a 
        culinary journey, fueled by their passion for tradition and the desire to share the 
        vibrant flavors of the Mediterranean. Born into a family where food was a way of life, 
        their roots run deep in Italian heritage, but their curiosity led them to explore 
        the diverse tastes of Greece and Turkey. The result is a restaurant that serves up a 
        delectable fusion of Italian, Greek, and Turkish cuisine, where each dish is a 
        celebration of their shared experiences and a testament to their commitment to 
        quality and authenticity. At the heart of the bustling city, this family-owned gem is 
        a testament to the power of tradition, family,and the universal language of exceptional food. 
        Welcome to our culinary haven, where the flavors of the Mediterranean come to life 
        in the heart of Chicago.`
    }

  return (
    <>
    <PageTopSection
        heading={top_section_heading}
        sub_text={top_section_text}
        image={top_section_image}
        image_position={top_section_image_position}
        type_for_sub_text={top_section_type_for_sub_text}
    />
    <section className='aboutus-para'> 
        {aboutArticle(aboutUsImage2, "At", aboutArticlePara.FirstPara, "aboutFirstImage")}
        {aboutArticle(aboutUsImage3, "In", aboutArticlePara.SecondPara, "aboutSecondImage")}
    </section>
    
    <section className='section'>
        <div className='container grid-container'>
            <h1 className='text-green'>Come visit us!</h1>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47508.64556214609!2d-87.6881836!3d41.9081167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d3f4f1910a1%3A0xbf748b410ff0084f!2sLemon!5e0!3m2!1sen!2sin!4v1698260125102!5m2!1sen!2sin"
                height="550"
                style={{ 
                    border: "0", 
                    borderRadius: "16px"
                }} 
                loading="lazy" 
            >
            </iframe>
        </div>
    </section>
    <section className='section'>
        <div className='container grid-container'>
            <h2>Hours of Operation</h2>
            <div className='aboutTiming'>
                <div>
                    <h3>Sunday - Thursday</h3>
                    <p className='about-us-timing'>
                        <span><RiTimeFill/></span>
                        <span className='about-timing'>
                            11:00 am - 09:00 pm
                        </span>
                    </p>
                </div>
                <div>
                    <h3>Friday - Saturday</h3>
                    <p className='about-us-timing'>
                        <span><RiTimeFill/></span>
                        <span className='about-timing'>
                            11:00 am - 10:00 pm
                        </span>
                    </p>
                </div>
            </div>
            <h3>Closed on Major Holidays</h3>
        </div>
    </section>
    </>
  )
}

export default AboutUs

/* return text for components */

/* for top section */
const top_section_heading = 'Discover Our Mediterranean Journey';
const top_section_text = `Where Flavors Meet Tradition, 
and Every Meal Tells a Story.`;
const top_section_image = aboutUsMainImage;
const top_section_image_position = 'left';
const top_section_type_for_sub_text = 'h3';