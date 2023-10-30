import axios from 'axios';
import {React, createContext, useContext, useEffect, useState} from 'react'

export const DataContext = createContext();
export const SetDataContext = createContext();

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

  const updateProfileContext = () => {
    getData('login-profiles', setProfile);
  }
    

  return (
            <DataContext.Provider value={{menu, testimonials, profile, updateProfileContext}}>
              {props.children}
            </DataContext.Provider>
  )
}

export const SetDataProvider = (props) => {
  const { profile, updateProfileContext } = useContext(DataContext)

  const HandleRemoveItemFormCartOrOrder = (idForItem, Option) => {
    const id = 1;

        const grabProfileIndex = profile.findIndex((prof) => prof['id'] === id);
            const grabProfile = {...profile[grabProfileIndex]};
            const grabProfileType = grabProfile[Option].filter((item) => item['id'] !== idForItem);
            delete grabProfile[Option];

            const updatedProfile = {...grabProfile, [Option]: grabProfileType}

            axios.put(`http://localhost:3000/login-profiles/${id}`, updatedProfile)
              .then(response => {
                updateProfileContext();
                console.log('updated profile successfully')
              })
              .catch(error => console.log(error));
  }

  const returnedProfile = () => {
    const id = 1;
    
    const userIndex = profile.findIndex((prof) => prof['id'] === id)
    const currentProfile = profile[userIndex];

    return currentProfile;
  }

  const HandleAddItem = () => {}

  return (
    <SetDataContext.Provider value={{HandleRemoveItemFormCartOrOrder, returnedProfile}}>
      {props.children}
    </SetDataContext.Provider>
  )
}