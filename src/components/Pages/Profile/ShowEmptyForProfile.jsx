import React from 'react'
import './ShowEmptyForProfile.css'
import {FaShoppingCart, FaTruck} from 'react-icons/fa'
import {MdTableRestaurant} from 'react-icons/md'

const ShowEmptyForProfile = ({viewOption}) => {
  const renderMessage = () => {
    switch(viewOption) {
      case 'cart' :
        return (
          <div className='show-empty-box'>
            <FaShoppingCart className='show-empty-icon'/>
            <p className='show-empty-head'>Shopping cart</p>
            <p className='show-empty-text'>is Empty</p>
          </div>
        )
        case 'orders' :
        return (
          <div className='show-empty-box'>
            <FaTruck className='show-empty-icon'/>
            <p className='show-empty-head'>Your Orders</p>
            <p className='show-empty-text'>is Empty</p>
          </div>
        )
        case 'reservations' :
        return (
          <div className='show-empty-box'>
            <MdTableRestaurant className='show-empty-icon'/>
            <p className='show-empty-head'>No Reservations</p>
            <p className='show-empty-text'>Found</p>
          </div>
        )
        default :
          return null;
    }
  }

  return (
    <div className='show-empty-container'>
      {renderMessage()}
    </div>
  )
}

export default ShowEmptyForProfile