import React, { useContext, useEffect, useState } from 'react'
import './ReservationForm.css'
import imageForReservationForm from '../../../assets/tables2.jpg'
import { DataContext, SetDataContext } from '../../../data/DataContext'
import ActionCompletePopUp from '../Page-components/ActionCompletePopUp'

const ReservationForm = () => {
  const [isOrderPopOpen, setOrderPopOpen] = useState(false)
  const [action, setAction] = useState({
    "value": false,
    "type": ''
  })
  /* getting data context */
  const {profile, reservations} = useContext(DataContext);
  const {HandleUpdateReservations} = useContext(SetDataContext)
  /* empty form warning state */
  const[isFormEmpty, setFormEmpty] = useState(false);
  /* current login id */
  const profileId = profile.find((ele) => ele['id'] === 1);
  
  const getEmail = () => {
    if (profileId !== undefined) {
      return profileId["email"];
    }
  }
  const profileEmail = getEmail();

  /* state for booking component */
  const [booking, setBooking] = useState({
    date: '',
    time: '',
    guest: "1",
    occasion: "Birthday"
  })

  const setBookingToDefault = () => {
    setBooking({
      date: '',
      time: '',
      guest: "1",
      occasion: "Birthday"
    })
  }

  /* func to return available time by checking times in reservations in json file */
  const returnAvailableTimes = () => {
    let matchBookingDate = false;
    let result = [];
    if (booking['date'] !== '') {
      for (const reservation of reservations['bookings']) {
        if (reservation.date === booking.date) {
            matchBookingDate = true;
            for (let i = 16; i <= 21; i++ ) {
                let count = 0;
                const slot = i+ ":00"
                for (const timeSlot of reservation['timeSlots']) {
                    if (timeSlot['slotTime'] === slot) {
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
    }
    return result;
  }
  
  const returnedTimes = returnAvailableTimes();
  const returnBookingTime = () => {
    return booking.time === '' ? returnedTimes[0] : booking.time;
  }

  const renderAvailableTimes = () => {
    const timeSlots = returnedTimes.map((slot, index) => {
      return <option key={index} value={slot}>{slot}</option>
    })
    return timeSlots;
  }

  const handleSelectedType = (returned_data, type)  => {
    const updatedBooking = {...booking, [type]: returned_data};
    setBooking(updatedBooking);
  }

  /* func to update reservation on click of submit button */
  const updateReservation = () => {
    const tempReservations = {...reservations};

    const existingReservationDate = tempReservations['bookings'].find((reservation) => reservation.date === booking.date);

    if (existingReservationDate) {
      const indexOfReservationDate = tempReservations['bookings'].findIndex((reservation) => reservation === existingReservationDate)
      tempReservations['bookings'][indexOfReservationDate]['timeSlots'].push({
        "slotTime":  returnBookingTime(),
        "guest": booking.guest,
        "occasion": booking.occasion,
        "email": profileEmail
      })

    } else {
      tempReservations['bookings'].push({
        "date": booking.date,
        "timeSlots": [
          {
            "slotTime": returnBookingTime(),
            "guest": booking.guest,
            "occasion": booking.occasion,
            "email": profileEmail
          }
        ]
      })
    }
    HandleUpdateReservations(tempReservations);
  }
  /* call update reservation */
  const handleSubmitReservationForm = (e) => {
    e.preventDefault();
  if (booking.date === '' && booking.time === '' ) {
      setFormEmpty(true);
    } else {
      setFormEmpty(false);
      updateReservation();
      setBookingToDefault();
      setOrderPopOpen(true);
      setAction({
        "value": false,
        "type": 'reservation-form'
      })
    }
  }

  const renderEmptyWarning = () => {
    return (
      <div>
        <span className='empty-form-warning'>!Please check and fill the field.</span>
      </div>
    )
  }

  return (
    <>
    <section className='section'>
      <div className='container'>
        <div className='reservation-form-container'>
        <div>
          <img
            className='reservation-form-image' 
            src={imageForReservationForm} alt="error" />
        </div>
        <form className='reservation-form-box-container' action="">
          <div className='reservation-form-box'>
            <div className='reservation-sub-box'>
              <label
                className='reservation-form-label' 
                htmlFor="res-date">
                Date
              </label>
              <input className='reservation-form-input' id='res-date' type="date" value={booking.date}
              onChange={(e) => handleSelectedType(e.target.value, "date")}/>
              { isFormEmpty === true ? renderEmptyWarning() : null}
            </div>
            <div className='reservation-sub-box'>
              <label className="reservation-form-label" htmlFor="res-time">Time
              </label>
              <select className='reservation-form-input' value={booking.time} 
              onChange={(e) => handleSelectedType(e.target.value, "time")}>
                {renderAvailableTimes()}
              </select>
              { isFormEmpty === true ? renderEmptyWarning() : null}
            </div>
            <div className='reservation-sub-box'>
              <label
                className='reservation-form-label' 
                htmlFor="res-date">
                Number of guest
              </label>
              <input className='reservation-form-input' id='res-guest' type="number" 
                value={booking.guest} min='1' max='10'
                onChange={(e) => handleSelectedType(e.target.value, "guest")}/>
                { isFormEmpty === true ? renderEmptyWarning() : null}
            </div>
            <div className='reservation-sub-box'>
              <label className="reservation-form-label" htmlFor="res-occasion">Occasion
              </label>
              <select className='reservation-form-input' value={booking.occasion}
              onChange={(e) => handleSelectedType(e.target.value, "occasion")}>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
              </select>
              { isFormEmpty === true ? renderEmptyWarning() : null}
            </div>
          </div>
          <div className='reservation-form-submit-btn-box'>
            <input className="reservation-form-submit-btn" type="submit" 
                  value='Make your reservation'
                  onClick={(e) => {handleSubmitReservationForm(e)}}
            /> 
            </div>
          </form>
        </div>
      </div>
    </section>
    <div>
            {isOrderPopOpen && (
              <section className='form-popup'>
                <div className='form-popup-container'>
                  <ActionCompletePopUp
                    action={action}
                    setOrderPopOpen={setOrderPopOpen}
                  />
                </div>
              </section>
            )}
        </div>
    </>
  )
}

export default ReservationForm