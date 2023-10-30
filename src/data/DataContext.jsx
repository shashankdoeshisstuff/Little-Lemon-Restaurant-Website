import axios from 'axios';
import {React, createContext, useEffect, useState} from 'react'

export const DataContext = createContext();

const getData = (type, setType) => {
  axios.get(`http://localhost:3000/${type}`)
  .then(response => {
      setType(response.data);
  })
  .catch((error) => console.log(error))
}

export const DataProvider = (props) => {
  const [menu, setMenu] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [profile, setProfile] = useState([])

  useEffect(() => {
    getData('menu', setMenu);
    getData('testimonials', setTestimonials)
    getData('login-profiles', setProfile)
  },[])
    

  return (
            <DataContext.Provider value={{menu, testimonials, profile}}>
              {props.children}
            </DataContext.Provider>
  )
}