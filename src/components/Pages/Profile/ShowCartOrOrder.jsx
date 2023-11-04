import './ProfileCard.css'
import React, { useContext } from 'react'
import { DataContext, SetDataContext } from '../../../data/DataContext';

const ShowCartOrOrder = ({viewOption, handleProfileOrder}) => {
    const { menu } = useContext(DataContext)
    const { HandleRemoveItemFormCartOrOrder, ReturnedProfile } = useContext(SetDataContext)

    const renderCart = (item, matchingDish) => {
        return (
            <div key={matchingDish['id']} className='profile-item-card'>
                <div>
                    <img className='profile-item-card-image' 
                    src={matchingDish["dish-image"]} 
                    alt="error" />
                </div>
                <div className='profile-item-card-container'>
                    <div className='profile-item-card-detail-box'>
                        <div>
                            <span className='cardTitle'>
                                {matchingDish["dish-name"]}
                            </span>
                        </div>
                        <div>
                            <span className='profile-item-card-qty'> Qty. {item["dish-quantity"]}</span>
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
                    <div className={`profile-item-card-btn-box profile-item-card-btn-box-${
                        viewOption !== 'cart' ? 'single-btn' : 'double-btn' 
                    }`}>
                        {
                            viewOption === "cart" ? (
                                <>
                                <button className='profile-item-card-btn profile-item-card-btn-order'
                                onClick={() => {
                                    handleProfileOrder(matchingDish['id'], item['dish-quantity']);
                                }}
                                >Order</button>
                                <button className='profile-item-card-btn profile-item-card-btn-remove'
                                onClick={() => HandleRemoveItemFormCartOrOrder(item['id'], viewOption)}
                                >Remove</button>
                                </>
                            ) : (
                                <>
                                <button className='profile-item-card-btn profile-item-card-btn-cancel'
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
        <div  className='profile-item-card-list'>
            {renderView()}
        </div>
    )
}

export default ShowCartOrOrder