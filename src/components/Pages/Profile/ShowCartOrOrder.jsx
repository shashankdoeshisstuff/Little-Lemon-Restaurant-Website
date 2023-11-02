import React, { useContext } from 'react'
import { DataContext, SetDataContext } from '../../../data/DataContext';

const ShowCartOrOrder = ({viewOption, handleProfileOrder}) => {
    const { menu, reservations } = useContext(DataContext)
    const { HandleRemoveItemFormCartOrOrder, ReturnedProfile } = useContext(SetDataContext)

    const renderCart = (item, matchingDish) => {
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
    
    const renderView = () => {
        const renderedItems = [];

        for (const item of ReturnedProfile[viewOption]) {
            for (const menuItem of menu) {
                if ( item['id'] === menuItem['id'] ) {
                    renderedItems.push(renderCart(item, menuItem));
                }
            }
        }
        return renderedItems;
    }

    return (
        <div  className='view-render'>
            {renderView()}
        </div>
    )
}

export default ShowCartOrOrder