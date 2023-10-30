import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'
import axios from 'axios'
import { DataContext } from '../../data/DataContext'

const Profile = () => {
    /* context data */
    const { menu, profile } = useContext(DataContext)

    const [viewOption, setViewOption] = useState('cart');
    console.log(viewOption)

    const id = 1;
    
    const userIndex = profile.findIndex((prof) => prof['id'] === id)
    const currentProfile = profile[userIndex];


    const handleRemoveCartItem = () => {}

    const handleViewType = () => {
        return (
            <div  className='view-render'>
                {currentProfile[viewOption].map((item) => {
                    const matchingDish = menu.find(dish => dish["id"] === item["id"]);

                    if(matchingDish) {
                        return (
                            <div key={matchingDish['id']} className='cart-item'>
                                <div>
                                    <img className='cart-image' 
                                    src={matchingDish["dish-image"]} 
                                    alt="error" />
                                </div>
                                <div className='cart-content'>
                                    <div className='cart-details'>
                                        <div>
                                            <span className='cardTitle'>
                                                {matchingDish["dish-name"]}
                                            </span>
                                        </div>
                                        <div>
                                            <span className='cart-item-qty'> Qty. {item["dish-quantity"]}</span>
                                        </div>
                                        <div className='cart-price-box'>
                                            <span className='costText DishCost'>
                                                $ {
                                                    (parseFloat(matchingDish["dish-price"]) 
                                                    * parseFloat(item["dish-quantity"])).toFixed(2)
                                                }
                                            </span>
                                        </div>
                                    </div>
                                    <div className='cart-btn-box'>
                                        <button className='cart-btn'>Order</button>
                                        <button className='cart-btn'
                                         onClick={() => handleRemoveCartItem(item['dish-name'])}
                                        >Remove</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    return null;
                })}
            </div>
        )
    }

  return (
    <>
    {currentProfile ? (  
        <div>  
        <section className='section primary-background menu-head'>
            <div className='container grid-container menu-top'>
                <img
                    className='page-main-image menu-main-image' 
                    src={currentProfile["image"]} 
                    alt="error" 
                    />
                <div className='about-text-box'>
                    <h1 className='text-yellow'>Welcome</h1>
                    <h2 className='text-white'>{currentProfile["name"]}</h2>
                    <h3 className='text-white'>{currentProfile["email"]}</h3>
                    <button className='mainBtn yellowBorderBtn'>Edit Profile</button>
                </div>
            </div>
        </section>
        <section className='section'>
            <div className='container profile-action-box'>
                <div className='profile-action'>
                    <button className='mainBtn'
                        onClick={() => setViewOption("cart")}
                        >Cart</button>
                    <button className='mainBtn'
                        onClick={() => setViewOption("orders")}
                        >Orders</button>
                    <button className='mainBtn'
                        onClick={() => setViewOption("reservations")}
                        >Reservations</button>
                </div>
                <div>
                    {handleViewType()}
                </div>
            </div>
        </section>
        </div>
    ): (
        <p>Loading...</p>
    )}
    </>
  )
}

export default Profile