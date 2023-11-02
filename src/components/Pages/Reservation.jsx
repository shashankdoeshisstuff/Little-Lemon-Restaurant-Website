import React from 'react'
import "./Reservation.css"
import tables1 from '../../assets/tables1.jpg'
import PageTopSection from './Page-components/PageTopSection'
import ReservationForm from './Reservation/ReservationForm'

const Reservation = () => {

  return (
    <>
    <PageTopSection
        heading={top_section_heading}
        sub_text={top_section_text}
        image={top_section_image}
        type_for_sub_text={type_for_sub_text}
    />
    <ReservationForm/>
    </>
  )
}

export default Reservation

/* returned text to components */

/* for top section */
const top_section_heading = 'Reserve A Table!'
const top_section_text = `Let our restaurant be the 
    stage for your culinary adventure. Your seat awaits 
    – make your reservation now and indulge in 
    unforgettable flavors.`
const top_section_image = tables1
const type_for_sub_text = 'p';