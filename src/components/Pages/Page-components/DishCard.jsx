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
                <div className='DishDetails'>
                    <span className='cardTitle DishTitle'>{dishCard['dish-name']}</span>
                    <span className='costText DishCost'>$ {dishCard['dish-price']}</span>
                    <p className='paragraphText DishText' >
                        {dishCard['dish-details']}
                    </p>
                    <button className='deliveryBtn DishBtn'
                      onClick={() => handleOrderPopUp()}
                    >Order a Delivery<MdDeliveryDining className='DishDeliveryIcon'/></button>
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