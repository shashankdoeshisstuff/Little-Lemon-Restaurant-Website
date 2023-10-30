import React from 'react'
import {AiFillCheckCircle} from "react-icons/ai" 

const BookingConfirmed = () => {
    return (
        <>
        <section className='section'
        style={{
            background: 'var(--primaryColor)',
            height: '40px'
        }}
        ></section>
        <section className='section'>
            <div className='container' style={{
                display: 'flex',
                flexDirection: "column",
                gap: '50px',
                justifyContent: 'center', 
                height: "400px",
                alignItems:'center'
            }}>
                <AiFillCheckCircle style={{
                    fontSize: '140px',
                    color: 'var(--primaryColor)'
                }}/>
                <h2>Your reservation has been confirmed</h2>
                <p>You will receive an email will all the details.</p>
            </div>
        </section>
        </>
    )
}

export default BookingConfirmed