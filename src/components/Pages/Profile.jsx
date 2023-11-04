import React, { useContext, useState } from 'react'
import './Profile.css'
import { DataContext, SetDataContext } from '../../data/DataContext'
import ProfileReservations from './Profile/ProfileReservations'
import OrderPopUp from './Page-components/OrderPopUp'
import ShowEmptyForProfile from './Profile/ShowEmptyForProfile'
import ShowCartOrOrder from './Profile/ShowCartOrOrder'
import CartTotal from './Profile/CartTotal'
import PageTopSection from './Page-components/PageTopSection'

const Profile = () => {
    /* context data */
    const { profile, updateProfileContext } = useContext(DataContext)
    const { ReturnedProfile } = useContext(SetDataContext)
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
            viewOption === 'reservations' ? (
                <ProfileReservations/>
            ) : (
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
        )
    }

  return (
    <>
    {currentProfile ? (  
        <div>  
            <PageTopSection
                heading={top_section_heading}
                sub_heading={ReturnedProfile['name']}
                sub_text={ReturnedProfile['email']}
                image={ReturnedProfile['image']}
                type_for_sub_text={top_section_type_for_sub_text}
                button_text={top_section_button_text}
                button_path={top_section_button_path}
                image_position={top_section_image_position}
            />
        <section className='section'>
            <div className='container'>
                <div className='profile-action-box'>
                    <div className='profile-action'>
                        <button className={(viewOption === "cart" ? 
                        'profile-action-btn-active' : 
                        `profile-action-btn profile-action-btn-cart-${ 
                            viewOption === 'orders' ? 
                            'orders' : 
                            viewOption === 'reservations' ? 
                            'reservations' : ''}`
                        )}
                            onClick={() => { updateProfileContext(); setViewOption("cart")}}
                            >Cart</button>
                        <button className={(viewOption === "orders" ? 
                        'profile-action-btn-active' : 
                        `profile-action-btn profile-action-btn-orders-${
                            viewOption === 'cart' ?
                            'cart' :
                            viewOption === 'reservations' ?
                            'reservations' : ''}`
                        )}
                            onClick={() => { updateProfileContext(); setViewOption("orders")}}
                            >Orders</button>
                        <button className={(viewOption === "reservations" ? 
                        'profile-action-btn-active' : 
                        `profile-action-btn profile-action-btn-reservations-${
                            viewOption === 'cart' ?
                            'cart' :
                            viewOption === 'orders' ?
                            'orders' : ''}`
                        )}
                            onClick={() => { updateProfileContext(); setViewOption("reservations")}}
                            >Reservations</button>
                    </div>
                    <div>
                        {handleViewType()}
                    </div>
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
/* return text for components */

/* for top section */
const top_section_heading = 'Welcome';
const top_section_image_position = 'right';
const top_section_type_for_sub_text = 'p';
const top_section_button_text = 'Edit Profile';
const top_section_button_path = '/UnderConstruction';