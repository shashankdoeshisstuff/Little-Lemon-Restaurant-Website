import React, { useContext, useState } from 'react'
import './Profile.css'
import { DataContext } from '../../data/DataContext'
import OrderPopUp from './Page-components/OrderPopUp'
import ShowEmptyForProfile from './Profile/ShowEmptyForProfile'
import ShowCartOrOrder from './Profile/ShowCartOrOrder'
import CartTotal from './Profile/CartTotal'

const Profile = () => {
    /* context data */
    const { profile, updateProfileContext } = useContext(DataContext)
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

    const handleViewType = () => {
        return (
            currentProfile[viewOption].length === 0 ? (
                <>
                <ShowEmptyForProfile
                    viewOption={viewOption}
                />
                </>
            ) : (
                <>
                <ShowCartOrOrder 
                    currentProfile={currentProfile}
                    viewOption={viewOption}
                    handleProfileOrder={handleProfileOrder}
                />
                {
                    viewOption === 'cart' ? (
                        <CartTotal
                        Cart={currentProfile['cart']}
                        />
                    ) : ( null )
                }
                </>
            )
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
                    <button className={(viewOption === "cart" ? 'profile-action-btn-active' : 'profile-action-btn')}
                        onClick={() => { updateProfileContext(); setViewOption("cart")}}
                        >Cart</button>
                    <button className={(viewOption === "orders" ? 'profile-action-btn-active' : 'profile-action-btn')}
                        onClick={() => { updateProfileContext(); setViewOption("orders")}}
                        >Orders</button>
                    <button className={(viewOption === "reservations" ? 'profile-action-btn-active' : 'profile-action-btn')}
                        onClick={() => { updateProfileContext(); setViewOption("reservations")}}
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
            viewOption={viewOption}
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