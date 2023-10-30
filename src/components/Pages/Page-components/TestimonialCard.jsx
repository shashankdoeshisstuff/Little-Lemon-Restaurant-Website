import React from 'react'
import css from './TestimonialCard.css'
import {BsStarHalf, BsStarFill} from "react-icons/bs"

const TestimonialCard = ({personImage, personName, personReview, personRating}) => {

    const renderRating = () => {
        switch(personRating) {
            case "1":
                return <BsStarFill/>;
            case "2" :
                return (
                    <>
                        <BsStarFill/>
                        <BsStarFill/>
                    </>      
                );
            case "3" :
                return (
                    <>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                    </>      
                );
            case "4" :
                return (
                    <>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                    </>      
                );
            case "5" :
                return (
                    <>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                    </>      
                );
            default :
                    return null;
        }
    }

  return (
    <div>
        <article className='testimonialCard'>
            <img className="testimonialImage" src={personImage} alt="error" />
            <span className='testimonialTitle'>{personName}</span>
            <span className='testimonialRating'>
                {renderRating()}
            </span>
            <p className='testimonialText'>
                {personReview}
            </p>
          </article>
    </div>
  )
}

export default TestimonialCard