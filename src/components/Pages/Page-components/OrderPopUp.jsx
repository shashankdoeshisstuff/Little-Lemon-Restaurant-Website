import React, { useState, useContext } from 'react'
import { DataContext} from '../../../data/DataContext'
import './OrderPopUp.css'
import {IoCloseCircleSharp} from 'react-icons/io5'
import {MdDeliveryDining, MdOutlineAddShoppingCart} from "react-icons/md"
import axios from 'axios'

const OrderPopUp = ({dishId, setOrderPopOpen}) => {
  /* popup state */
  const [itemQty, setItemQty] = useState('1')
  
  /* menu Context data */
  const { menu, profile } = useContext(DataContext);

const OrderOrCart = (type, dishId, Qty) => {
  const id = 1;
    const item = {
      "id": dishId,
      "dish-quantity": Qty
    }
    
    const userIndex = profile.findIndex((prof) => prof['id']  === id);
      const updatedUser = {...profile[userIndex]};
      
      updatedUser[type].push(item);

      const updatedProfile = [...profile];
      updatedProfile[userIndex] = updatedUser;

    axios.put(`http://localhost:3000/login-profiles/${id}`, updated)
              .then(response => {
                  console.log("profile updated successfully")
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
                      <span className='order-card-price'>$ {dish['dish-price'] * itemQty}</span>
                    </div>
                </div>
                <div className='order-card-btn-box'>
                  <button className='order-card-btn order-card-btn-left'
                    onClick={() => handleClickedAction("order")}
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
            </article>
      )
    }
  

  return (
    <>
    <section className='order-popup'>
      {renderOrderCard()}
    </section>
    </>
  )
}

export default OrderPopUp