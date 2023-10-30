import React, { useContext } from 'react'
import './CartTotal.css'
import { DataContext } from '../../../data/DataContext'

const CartTotal = ({Cart}) => {
  /* data context */
  const {menu} = useContext(DataContext)

  const taxPrice = 0;

  const totalAmount = () => {
    let total = 0;

    Cart.forEach((item) => {
      const matchingDish = menu.find(dish => dish['id'] === item['id']);
      const price = parseFloat(matchingDish['dish-price']);
      const quantity = parseFloat(item['dish-quantity']);


      if(!isNaN(price) && !isNaN(quantity)) {
        total += price * quantity;
      }
    })

    return total.toFixed(2);
  }

  return (
    <section className='cart-total-container'>
      <div className='cart-total-box'>
      <span className='cart-total-head'>Order summary</span>
      <div className='cart-total-sub-box'>
        <span className='cart-total-'>Subtotal</span>
        <span className='cart-total-'>$ {totalAmount()}</span>
      </div>
      <hr />
      <div className='cart-total-sub-box'>
        <span className='cart-total-'>Delivery</span>
        <span className='cart-total-'>$ {taxPrice}</span>
      </div>
      <hr />
      <div className='cart-total-sub-box'>
        <span className='cart-total-head'>Order total</span>
        <span className='cart-total-price'>$ {parseFloat(taxPrice) + parseFloat(totalAmount())}</span>
      </div>
      <button className='cart-total-btn'>Checkout</button>
      </div>
    </section>
  )
}

export default CartTotal