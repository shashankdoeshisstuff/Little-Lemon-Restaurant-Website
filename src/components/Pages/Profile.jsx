import React, { useContext, useState } from 'react'
import './Profile.css'
import axios from 'axios'
import { DataContext } from '../../data/DataContext'
import OrderPopUp from './Page-components/OrderPopUp'

const Profile = () => {
    /* context data */
    const { menu, profile, updateProfileContext } = useContext(DataContext)
    /* order state */
    const [isOrderPopOpen, setOrderPopOpen] = useState(false)
    const[dishId, setDishId] = useState();
    const[dishQty, setDishQty] = useState();

    const [viewOption, setViewOption] = useState('cart');
    
    const id = 1;
    
    const userIndex = profile.findIndex((prof) => prof['id'] === id)
    const currentProfile = profile[userIndex];

    const handleProfileOrder = (DishId, DishQty) => {
        setDishQty(DishQty);
        setDishId(DishId);
        setOrderPopOpen(true);
    }
    const handleRemoveCartItem = (idForItem, Option) => {
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
                                        <button className='cart-btn'
                                        onClick={() => handleProfileOrder(matchingDish['id'], item['dish-quantity'])}
                                        >Order</button>
                                        <button className='cart-btn'
                                         onClick={() => handleRemoveCartItem(item['id'], viewOption)}
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
        <div>
        {isOrderPopOpen && (
            <OrderPopUp
            dishId={dishId}
            dishQty={dishQty}
            setOrderPopOpen={setOrderPopOpen}
            />
            )}
        </div>
        </div>
    ): (
        <p>Loading...</p>
    )}
    </>
  )
}

export default Profile