import axios from 'axios';
import {React, createContext, useContext, useEffect, useState} from 'react'

export const DataContext = createContext();
export const SetDataContext = createContext();



const getData = (type, setType) => {
  axios.get(`https://little-lemon-restaurant-database.onrender.com/${type}`)
  .then(response => {
    setType(response.data);
  })
  .catch((error) => console.log(error))
}

export const DataProvider = (props) => {
  const [menu, setMenu] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [profile, setProfile] = useState([])
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    getData('menu', setMenu);
    getData('testimonials', setTestimonials)
    getData('login-profiles', setProfile)
    getData('reservations', setReservations)
  },[])

  const updateProfileContext = () => {
    getData('login-profiles', setProfile);
  }
  const updateReservationContext = () => {
    getData('reservations', setReservations)
  }
    

  return (
            <DataContext.Provider value={
                {
                  menu, testimonials, profile, reservations, 
                  updateProfileContext, updateReservationContext
                }
              }>
              {props.children}
            </DataContext.Provider>
  )
}

export const SetDataProvider = (props) => {
  const { profile,reservations ,updateProfileContext, updateReservationContext } = useContext(DataContext)
  const id = 1;
  
  const HandleUpdateProfile = (updatedProfile, triggerFunc) => {
    axios.put(`https://little-lemon-restaurant-database.onrender.com/login-profiles/${id}`, updatedProfile)
              .then(response => {
                triggerFunc();
              })
              .catch(error => console.log(error));
  }

  const HandleUpdateReservations = (updatedReservation) => {
    axios.put(`https://little-lemon-restaurant-database.onrender.com/reservations`, updatedReservation)
              .then(response => {
                updateReservationContext();
              })
              .catch(error => console.log(error));
  }
  
  const HandleRemoveItemFormCartOrOrder = (idForItem, Option) => {
        const grabProfileIndex = profile.findIndex((prof) => prof['id'] === id);
            const grabProfile = {...profile[grabProfileIndex]};
            const grabProfileType = grabProfile[Option].filter((item) => item['id'] !== idForItem);
            delete grabProfile[Option];

            const updatedProfile = {...grabProfile, [Option]: grabProfileType}

            HandleUpdateProfile(updatedProfile, updateProfileContext);
            updateProfileContext()
  }

  const userIndex = profile.findIndex((prof) => prof['id'] === id)
  const currentProfile = profile[userIndex];

  const ReturnedProfile = currentProfile;
  /* to delete empty array in reservation's timeSlots */
  const HandleRemoveEmptyDateFormReservations = () => {
    if (reservations.bookings !== undefined) {
      const updatedBookings = reservations['bookings'].filter((element) => element['timeSlots'].length !== 0 )
      const updatedReservation = {...reservations, "bookings": updatedBookings}

      /* invoke update */
      HandleUpdateReservations(updatedReservation);
    }
  }

  return (
    <SetDataContext.Provider value={{HandleUpdateProfile, HandleUpdateReservations, HandleRemoveEmptyDateFormReservations, HandleRemoveItemFormCartOrOrder, ReturnedProfile}}>
      {props.children}
    </SetDataContext.Provider>
  )
}

/* to updated data in jason */