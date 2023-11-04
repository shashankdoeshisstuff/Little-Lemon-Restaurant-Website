import React from 'react'
import './Home.css'
import Testimonials from './HomePage/Testimonials'
import About from './HomePage/About'
import HighLights from './HomePage/HighLights'
import PageTopSection from './Page-components/PageTopSection'
import heroImage from "../../assets/restauranfood.jpg"

const Home = () => {
  return (
    <div className='mainSection'>
      <PageTopSection
        heading={top_section_heading}
        sub_heading={top_section_sub_heading}
        sub_text={top_section_text}
        image={top_section_image}
        type_for_sub_text={top_section_type_for_sub_text}
        button_text={top_section_button_text}
        button_path={top_section_button_path}
    />
      <HighLights/>
      <Testimonials/>
      <About/>
    </div>
  )
}

export default Home

/* return text for components */

/* for top section */
const top_section_heading = 'Little Lemon';
const top_section_sub_heading = 'Chicago';
const top_section_text = `We are a family owned Mediterranean restaurant,
focused on traditional recipes served with a modern twist.`;
const top_section_image = heroImage;
const top_section_type_for_sub_text = 'p';
const top_section_button_text = 'Reserve a Table';
const top_section_button_path = './BookingForm'
