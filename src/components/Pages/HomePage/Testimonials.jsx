import React, { useContext } from 'react'
import "./Testimonials.css"
import TestimonialCard from '../Page-components/TestimonialCard'
import { DataContext } from '../../../data/DataContext'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'

const Testimonials = () => {
  const { testimonials } = useContext(DataContext);
  
  const toRenderTestimonialsList = () => {
    return (
      <>
      {testimonials.map((Testimonial, index) => (
        <TestimonialCard
        key={index}
        personName={Testimonial["name"]}
        personImage={Testimonial["image"]}
        personRating={Testimonial["rating"]}
        personReview={Testimonial["review"]}
        />
        ))}
      </>
    )
  }

  return (
    <>
    <section className='section testimonialSection'>
      <div className='container grid-container testimonials-box'>
        <h2 className='TestimonialsHeading mainSubHeading'>What people say about us!</h2>
        <div className='TestimonialsList'>
          {toRenderTestimonialsList()}
        </div>
      </div>
    </section>
    </>
  )
}

export default Testimonials