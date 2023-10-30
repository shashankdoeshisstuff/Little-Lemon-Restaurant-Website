import React, { useContext } from 'react'
import { DataContext, SetDataContext } from '../../../data/DataContext';

const ShowCartOrOrder = ({currentProfile, viewOption, handleProfileOrder}) => {
    const { menu } = useContext(DataContext)
    const { HandleRemoveItemFormCartOrOrder, returnedProfile } = useContext(SetDataContext)

  return (
    <div  className='view-render'>
        {currentProfile[viewOption].map((item) => {
            const matchingDish = menu.find(dish => dish["id"] === item["id"]);

            if(matchingDish) {
                return (
                    <div key={matchingDish['id']} className='cart-item'>
                        <div>
                            <img className='cart-image' 
                            src={matchingDish["dish-image"]} 
                            alt="error" />
                        </div>
                        <div className='cart-content'>
                            <div className='cart-details'>
                                <div>
                                    <span className='cardTitle'>
                                        {matchingDish["dish-name"]}
                                    </span>
                                </div>
                                <div>
                                    <span className='cart-item-qty'> Qty. {item["dish-quantity"]}</span>
                                </div>
                                <div className='cart-price-box'>
                                    <span className='costText DishCost'>
                                        $ {
                                            (parseFloat(matchingDish["dish-price"]) 
                                            * parseFloat(item["dish-quantity"])).toFixed(2)
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className='cart-btn-box'>
                                {
                                    viewOption === "cart" ? (
                                        <>
                                        <button className='cart-btn'
                                        onClick={() => {
                                            handleProfileOrder(matchingDish['id'], item['dish-quantity']);
                                        }}
                                        >Order</button>
                                        <button className='cart-btn'
                                        onClick={() => HandleRemoveItemFormCartOrOrder(item['id'], viewOption)}
                                        >Remove</button>
                                        </>
                                    ) : (
                                        <>
                                        <button className='cart-btn'
                                        onClick={() => HandleRemoveItemFormCartOrOrder(item['id'], viewOption)}
                                        >Cancel</button>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        })}
    </div>
)
}

export default ShowCartOrOrder