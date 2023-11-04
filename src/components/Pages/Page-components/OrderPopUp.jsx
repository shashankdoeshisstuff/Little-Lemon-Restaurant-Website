import './OrderPopUp.css'
import React, { useState, useContext, useEffect } from 'react'
import {DataContext, SetDataContext} from '../../../data/DataContext'
import {IoCloseCircleSharp} from 'react-icons/io5'
import {MdDeliveryDining, MdOutlineAddShoppingCart} from "react-icons/md"
import ActionCompletePopUp from './ActionCompletePopUp'

const OrderPopUp = ({dishId, dishQty, setOrderPopOpen, viewOption}) => {
  /* menu Context data */
  const { menu } = useContext(DataContext);
  const { HandleUpdateProfile , HandleRemoveItemFormCartOrOrder , ReturnedProfile} = useContext(SetDataContext)
  /* action state */
  const [action, setAction] = useState({
    "value": false,
    "type": ''
  })

  /* popup state */
  const [itemQty, setItemQty] = useState('1')

  useEffect(() => {
    if(dishQty !== undefined) {
      setItemQty(dishQty);
    }
  },[])
  

const OrderOrCart = (type, dishId, Qty) => {
  const ProfileForUser = ReturnedProfile;
  const item = {
    "id": dishId,
    "dish-quantity": Qty
  }
  const setActionFunc = ()  => {
    setAction({
      "value": true,
      "type": type
    })
  }
    
  const pushItem = () => {
    ProfileForUser[type].push(item);
  }

  const updateType = (newArray) => {
    ProfileForUser[type] = newArray;
  }
  
  const checkAvailability = () => {
    for (const element of ProfileForUser[type]) {
      if (element['id'] === item['id']) {
        console.log(element)
        const tempQty = parseFloat(element['dish-quantity']) + parseFloat(item['dish-quantity']);
        item['dish-quantity'] = tempQty + '';
        const typeArray = ProfileForUser[type].filter((ele) => ele['id'] !== item['id']);
        updateType(typeArray);
      } 
    }
    pushItem()
  }
  checkAvailability();

  HandleUpdateProfile(ProfileForUser, setActionFunc);
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
                        onClick={() => {
                          handleClickedAction("orders");
                          HandleRemoveItemFormCartOrOrder(dishId, viewOption)
                        }}
                      >
                        Order
                        <MdDeliveryDining className='order-card-btn-icon'
                        onClick={() => {HandleRemoveItemFormCartOrOrder(dishId, viewOption)}}
                        />
                        </button>
                    </div>
                  )
                }
            </article>
      )
    }
  
  return (
    <>
    <section className='order-popup'>
      <div className='order-popup-container'>
      {
        action.value === false ? 
        renderOrderCard() :
        <ActionCompletePopUp
          action={action}
          setOrderPopOpen={setOrderPopOpen}
        />
      }
      </div>
    </section>
    </>
  )
}

export default OrderPopUp