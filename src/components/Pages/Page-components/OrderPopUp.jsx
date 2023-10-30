import React, { useState, useContext, useEffect } from 'react'
import { DataContext} from '../../../data/DataContext'
import './OrderPopUp.css'
import {IoCloseCircleSharp} from 'react-icons/io5'
import {MdDeliveryDining, MdOutlineAddShoppingCart} from "react-icons/md"
import {BsFillPatchCheckFill} from "react-icons/bs"
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'

const OrderPopUp = ({dishId, dishQty, setOrderPopOpen}) => {
  /* action state */
  const [action, setAction] = useState({
    "value": false,
    "type": ''
  })
  console.log(action)

  /* popup state */
  const [itemQty, setItemQty] = useState('1')

  useEffect(() => {
    if(dishQty !== undefined) {
      setItemQty(dishQty);
    }
  },[])
  
  /* menu Context data */
  const { menu, profile } = useContext(DataContext);

const OrderOrCart = (type, dishId, Qty) => {
  const id = 1;
    const item = {
      "id": dishId,
      "dish-quantity": Qty
    }
    
    /* getting correct type */

    const userIndex = profile.findIndex((prof) => prof['id']  === id);
      const updatedUser = {...profile[userIndex]};
      
      updatedUser[type].push(item);

     /*  const updatedProfile = [...profile];
      updatedProfile[userIndex] = updatedUser; */

    axios.put(`http://localhost:3000/login-profiles/${id}`, updatedUser)
              .then(response => {
                setAction({
                  "value": true,
                  "type": type
                })
                console.log('updated profile successfully')
              })
              .catch(error => console.log(error));
  };

  const handleClickedAction = (type) => {
    OrderOrCart(type, dishId, itemQty);
  } 

  const renderOrderCard = () => {

    const dish = menu.find((item) => item["id"] === dishId);

      return (
        <article className='order-card'>
                <IoCloseCircleSharp 
                  className='order-popup-close-icon'
                  onClick={() => setOrderPopOpen(false)}
                />
                <img className='order-card-image' src={dish['dish-image']} alt="error" />
                <div className='order-card-item-details'>
                    <div>
                      <span className='cardTitle DishTitle'>{dish['dish-name']}</span>
                    </div>
                    <div>
                      <p className='paragraphText DishText' >
                          {dish['dish-details']}
                      </p>
                    </div>
                    <div className='order-card-qty-price'>
                      <label
                        className='order-card-item-qty-label' 
                        htmlFor="order-card-item-qty">
                        Qty.
                        </label>
                        <input
                          className='order-card-item-qty-input'  
                          id='order-card-item-qty' 
                          type="number"
                          min="1"
                          max="10"
                          value={itemQty}
                          onChange={(e) => setItemQty(e.target.value + '')}
                        />
                      <span className='order-card-price'>$ {parseFloat(dish['dish-price'] * itemQty).toFixed(2)}</span>
                    </div>
                </div>
                {
                  dishQty === undefined? (
                    <div className='order-card-btn-box'>
                      <button className='order-card-btn order-card-btn-left'
                        onClick={() => handleClickedAction("orders")}
                      >
                        Order
                        <MdDeliveryDining className='order-card-btn-icon'/>
                        </button>
                      <button className='order-card-btn order-card-btn-right'
                        onClick={() => handleClickedAction("cart")}
                      >
                        Add to Cart
                        <MdOutlineAddShoppingCart className="order-card-btn-icon" />
                        </button>
                    </div>
                  ) : (
                    <div className='order-card-btn-box-profile'>
                      <button className='order-card-btn order-card-btn-order-profile'
                        onClick={() => handleClickedAction("orders")}
                      >
                        Order
                        <MdDeliveryDining className='order-card-btn-icon'/>
                        </button>
                    </div>
                  )
                }
            </article>
      )
    }

    const navigateToProfile = () => {

    }

    const actionCompleteRender = () => {
      return (
        <div className='order-action-complete'>
          <div className='order-action-complete-icon-box'>
            <BsFillPatchCheckFill
            className='order-action-complete-icon'/>
          </div>
          {
            action.type === 'orders' ? (
              <div className='order-action-complete-text-box'>
                <h2 className='lead-order-action-complete-text'>Thank You Ordering..</h2>
                <p>now your can track your order from profile menu.</p>
              </div>
            ) : (
              <div className='order-action-complete-text-box'>
                <h2 className='lead-order-action-complete-text'>Item added to Shopping cart</h2>
                <p>You browse for more items or you can look into your 
                  Shopping cart in your profile</p>
              </div>
            )
          }
          <div className='order-card-btn-box'>
            <Link className='order-action-complete-link' to='/Profile'>
              <button className='order-card-btn order-card-btn-left'
              onClick={() => {setOrderPopOpen(false)}}
                >
                Go to Profile.
              </button>
            </Link>
            <button className='order-card-btn order-card-btn-right'
            onClick={() => setOrderPopOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )
    }
  

  return (
    <>
    <section className='order-popup'>
      {
        action.value === false ? 
        renderOrderCard() :
        actionCompleteRender()
      }
    </section>
    </>
  )
}

export default OrderPopUp