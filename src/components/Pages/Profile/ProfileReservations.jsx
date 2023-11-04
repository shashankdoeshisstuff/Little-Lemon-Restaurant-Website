import './ProfileReservations.css'
import './ProfileCard.css'
import React, { useContext } from 'react'
import { DataContext, SetDataContext } from '../../../data/DataContext'
import ShowEmptyForProfile from './ShowEmptyForProfile';
import tables1 from '../../../assets/tables1.jpg'

const ProfileReservations = () => {
  const { reservations } = useContext(DataContext);
  const { ReturnedProfile, HandleUpdateReservations} = useContext(SetDataContext);

  /* delete func to delete reservation */
  const handleDeleteReservation = (date, slotTime) => {
    /* grabbing index */
    const garbReservationByDate = bookings.find((Ele) => Ele['date'] === date);
    const reservationByDateIndex = bookings.indexOf(garbReservationByDate);

    const garbReservationByTime = garbReservationByDate['timeSlots'].find((ele) => ele['slotTime'] === slotTime);
    const reservationByTimeIndex = garbReservationByDate['timeSlots'].indexOf(garbReservationByTime);

    const updatedBookings = reservations;
    updatedBookings['bookings'][reservationByDateIndex]['timeSlots'].splice(reservationByTimeIndex,1)

    HandleUpdateReservations(updatedBookings)
  }
  
  /* getting data and email */
  const getEmail = () => {
    if (ReturnedProfile !== undefined) {
      return ReturnedProfile["email"];
    }
  }
  const getReservations = () => {
    if (reservations !== undefined) {
      return reservations["bookings"];
    }
  }
  const emailToFind = getEmail();
  const bookings = getReservations();

  /* rendering reservations */
  const returnReservations = () => {
    const foundBookings = [];

    for ( const booking of bookings ) {
      for (const timeSlot of booking['timeSlots']) {
        if (timeSlot.email === emailToFind) {
          foundBookings.push({
            date: booking.date,
            slotTime: timeSlot.slotTime,
            guest: timeSlot.guest,
            occasion: timeSlot.occasion,
            email: emailToFind,
          });
        }
      }
    }
    return foundBookings;
  }

  const profileReservationCard = (item) => {
    return (
      <div className='profile-item-card'>
        <div>
          <img className='profile-item-card-image' src={tables1} alt="error" />
        </div>
        <div className='profile-item-card-container'>
          <div className='profile_reservation_card_parts'>
            <div className='profile_reservation_text_box'>
              <span className='profile_reservation_text'>Your booking for</span>
              <span className='profile_reservation_sub_text'>{item.occasion}</span>
            </div>
            <div className='profile_reservation_text_box'>
              <span className='profile_reservation_text'>Date</span>
              <span className='profile_reservation_sub_text'>{item.date}</span>
            </div>
            <div className='profile_reservation_text_box'>
              <span className='profile_reservation_text'>Timing</span>
              <span className='profile_reservation_sub_text'>{item.slotTime}</span>
            </div>
            <div className='profile_reservation_text_box'>
              <span className='profile_reservation_text'>For {item.guest}</span>
              <span className='profile_reservation_sub_text'>people</span>
            </div>
          </div>
          <div className='profile-item-card-btn-box profile-item-card-btn-box-single-btn'>
            <button 
            onClick={() => handleDeleteReservation(item.date, item.slotTime)}
            className='profile-item-card-btn profile-item-card-btn-cancel'>Cancel</button>
          </div>
        </div>
      </div>
    )
  }

  const renderReservations = () => {
    const profileReservations = returnReservations();

    return (
      returnReservations().length !== 0 ? (
        <div className='profile-item-card-list'>
          {profileReservations.map((item, index) => (
            <div key={index}>
              {profileReservationCard(item)}
            </div>
            )
          )}
      </div>
      ) : (
        <ShowEmptyForProfile
          viewOption={'reservations'}
        />
      )
    )
  }

  return (
      <>
      {emailToFind !== undefined && bookings !== undefined ? renderReservations() : null }
      </>
  )
}

export default ProfileReservations