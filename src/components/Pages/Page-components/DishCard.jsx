import React, { useState, useContext } from 'react'
import { DataContext } from '../../../data/DataContext'
import css from './DishCard.css'
import {MdDeliveryDining} from "react-icons/md"

const DishCard = ({ dishId, setOrderPopOpen, setDishId }) => {
  const { menu } = useContext(DataContext);

  const handleOrderPopUp = () => {
    setDishId(dishId);
    setOrderPopOpen(true)
  }

  const renderDishCard = () => {
    const dishCard = menu.find(dish => dish.id === dishId);

    return (
            <article className='DishCard'>
                <img className='DishImage' src={dishCard['dish-image']} alt="error" />
                <div className='dish-details'>
                  <div className='dish-title-cost-box'>
                    <span className='cardTitle'>{dishCard['dish-name']}</span>
                    <span className='costText'>$ {dishCard['dish-price']}</span>
                  </div>
                  <div>
                    <p className='paragraphText' >
                        {dishCard['dish-details']}
                    </p>
                  </div>
                </div>
                <div className='delivery-btn-box'>
                  <button className='delivery-btn'
                    onClick={() => handleOrderPopUp()}
                  >Order a Delivery<MdDeliveryDining className='DishDeliveryIcon'/>
                  </button>
                </div>
            </article>
    )
  }

  return (
    <div>
        {renderDishCard()}
    </div>
  )
}

export default DishCard