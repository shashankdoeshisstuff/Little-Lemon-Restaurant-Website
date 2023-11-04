import './Main.css'
import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../../components/Pages/Home';
import AboutUs from '../Pages/AboutUs';
import BookingForm from '../Pages/Reservation';
import UnderConstruction from '../../components/Pages/UnderConstruction';
import Reservation from '../../components/Pages/Reservation';
import Menu from '../../components/Pages/Menu'
import Profile from '../Pages/Profile';

const Main = () => {
    return (
        <main className='main'>
            <Routes>
                <Route path='/UnderConstruction' element={<UnderConstruction/>} />
                <Route path='/' element={<Home/>} />
                <Route path='/Menu' element={<Menu />} />
                <Route path='/AboutUs' element={<AboutUs/>} />
                <Route path='/Profile' element={<Profile/>} />
                <Route path='/Reservation' element={<Reservation />} />
                <Route path='/BookingForm' element={<BookingForm />} />
            </Routes>
        </main>
    )
}

export default Main;