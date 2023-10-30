import {React, useEffect, useReducer, useState} from 'react'
import css from './Main.css'
import {useNavigate, Routes, Route} from "react-router-dom"
import Home from '../../components/Pages/Home';
import AboutUs from '../Pages/AboutUs';
import BookingForm from '../Pages/BookingForm';
import UnderConstruction from '../../components/Pages/UnderConstruction';
import BookingConfirmed from '../../components/Pages/BookingConfirmed';
import Menu from '../../components/Pages/Menu'
import Profile from '../Pages/Profile';

const Main = () => {
    /* default time */
    const [defaultTime, setDefaultTime] = useState(); 

    /* selected time state */
    const [selectedTime, setSelectedTime] = useState("");

    /* Booking State */
    const [bookingData, setBookingData] = useState(
        [
            {
                date: "2023-10-20", 
                timeSlots:[
                    {
                        slotTime: "16:00",
                        guest: "4",
                        occasion: "Birthday" 
                    },
                    {
                        slotTime: "20:00",
                        guest: "4",
                        occasion: "Birthday" 
                    },
                    {
                        slotTime: "21:00",
                        guest: "3",
                        occasion: "Anniversary"
                    }
                ]
            }
        ]);
    /* Fetch API functions */
    const fetchAPI = (targetDate) => {
        let matchBookingDate = false;
        let result = [];
        for (const booking of bookingData) {
            if (booking.date === targetDate.toString()) {
                matchBookingDate = true;
                for (let i = 16; i <= 21; i++ ) {
                    let count = 0;
                    const slot = i+ ":00"
                    for (const timeSlot of booking.timeSlots) {
                        if (timeSlot.slotTime === slot) {
                            count++;
                            break;
                        }
                    }
                    if (count === 0) {
                        result.push(slot);
                    }
                }
            } 
        }
        if (!matchBookingDate) {
            for (let i = 16; i <= 21; i++) {
                const slot = i + ":00"
                result.push(slot);
            }
        }
        return result;
    }
    /* end of func */

    
    const submitAPI = (formData) => {
        return true;
    }
    
    /* reducer for available booking slot times */
    const navigate = useNavigate();
    const reducer = (state, action) => {
        if (action.type === 'update_available_time') {
            const updatedSlots = fetchAPI(selectedTime)
            return updatedSlots;
        }
        if (action.type === 'update_booking') {
            setSelectedTime("");
            const updatedSlots = fetchAPI(selectedTime)
            return updatedSlots;
        }
            return state;
        }
        
        
        const initializeTimes = fetchAPI(selectedTime)
        
        const [availableTimes, dispatch] = useReducer(reducer, initializeTimes)

        /* handleSelectedTime that user currently selected in field */
        const handleSelectedTime = (givenTime) => {
            setSelectedTime(givenTime);
            dispatch({type: 'update_available_time'})
        }
        /* end of func */

        /* handle update booking func */
        const handleUpdateBooking = (booking) => {
            //check if booking date exist
            const existingBooking = bookingData.find((dataObject) => dataObject.date === booking.date);

            if (existingBooking) {
                //update existing booking
                const updatedTimeSlots = [...existingBooking.timeSlots, {
                    slotTime: booking.time,
                    guest: booking.guest,
                    occasion: booking.occasion
                }]

                //create new object with updated time slots
                const updatedDataObject = {
                    ...existingBooking, 
                    timeSlots: updatedTimeSlots,
                };

                //update bookingData array with updated data object
                setBookingData((prevBookingData) => 
                    prevBookingData.map((dataObject) => 
                        dataObject.date === existingBooking.date ? updatedDataObject : dataObject
                    )
                )

            } else { 
                const newBooking =
                    {
                        date: booking.date,
                        timeSlots: [
                            {
                                slotTime: booking.time,
                                guest: booking.guest,
                                occasion: booking.occasion  
                            }
                        ]
                    }
                //update the bookingData
                setBookingData((prevBookingData) => [...prevBookingData, newBooking])
            }
            dispatch({type: 'update_booking'});
        }
        /* end of the func */
        
        /* to set default time in booking state */
        const handleSetDefaultTime = (slot) => {
            setDefaultTime(slot);
        }

        const slotTimes = () => {
            const slots = availableTimes.map((slot, index) => {
                if (index === 0) {
                    handleSetDefaultTime(slot); //this creates error
                }
                    return <option key={index} value={slot}>{slot}</option>
                })
                return slots;
            } 
            
            return (
                <main className='main'>
        <Routes>
            <Route path='/UnderConstruction' element={<UnderConstruction/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/Menu' element={<Menu />} />
            <Route path='/AboutUs' element={<AboutUs/>} />
            <Route path='/Profile' element={<Profile/>} />
            <Route path='/booking-confirmed' element={<BookingConfirmed/>} />
            <Route path='/BookingForm' 
            element={<BookingForm 
                defaultTime={defaultTime}
                handleSelectedTime={handleSelectedTime}
                availableTimes={availableTimes}
                slotTimes={slotTimes}
                navigate={navigate}
                setBookingData={setBookingData}
                handleUpdateBooking={handleUpdateBooking}
                />} />
        </Routes>
    </main>
  )
}

export default Main;