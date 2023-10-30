import React, { useContext } from 'react'
import css from "./Testimonials.css"
import TestimonialCard from '../Page-components/TestimonialCard'
import { DataContext } from '../../../data/DataContext'

const Testimonials = () => {
  const { testimonials } = useContext(DataContext);

  return (
    <section className='section testimonialSection'>
      <div className='container grid-container testimonials'>
        <h2 className='TestimonialsHeading mainSubHeading'>What people say about us!</h2>
        <div className='TestimonialsList'>

          {testimonials.map((Testimonial, index) => (
            <TestimonialCard
              key={index}
              personName={Testimonial["name"]}
              personImage={Testimonial["image"]}
              personRating={Testimonial["rating"]}
              personReview={Testimonial["review"]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials