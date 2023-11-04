import './ActionCompletePopUp.css'
import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ActionCompletePopUp = ({action, setOrderPopOpen}) => {
    const toRenderActionComplete = () => {
        return (
          <div className='order-action-complete'>
            <div className='order-action-complete-icon-box'>
              <BsFillPatchCheckFill
              className='order-action-complete-icon'/>
            </div>
            {
              action.type === 'reservation-form' ? (
                <div className='order-action-complete-text-box'>
                  <h2 className='lead-order-action-complete-text'>Thank You for Reservation..</h2>
                  <p className='order-action-complete-text-box-para'>
                    You can browse for more items or you can see your
                    Reservations in your profile.
                  </p>
                </div>
              ) : action.type === 'orders' ? (
                    <div className='order-action-complete-text-box'>
                      <h2 className='lead-order-action-complete-text'>Thank You Ordering..</h2>
                      <p className='order-action-complete-text-box-para'>
                        now your can track your order from profile menu.
                      </p>
                    </div>
                  ) : (
                    <div className='order-action-complete-text-box'>
                      <h2 className='lead-order-action-complete-text'>Item added to Shopping cart</h2>
                      <p className='order-action-complete-text-box-para'>
                        You can browse for more items or you can look into your 
                        Shopping cart in your profile
                      </p>
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
    {toRenderActionComplete()}
    </>
  )
}

export default ActionCompletePopUp