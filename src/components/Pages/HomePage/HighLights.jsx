import React, { useContext, useState } from 'react'
import { DataContext } from '../../../data/DataContext'
import css from "./HighLights.css"
import { Link } from 'react-router-dom'
import DishCard from '../Page-components/DishCard'
import OrderPopUp from '../Page-components/OrderPopUp'

const HighLights = () => {
    /* order pop up */
    const [isOrderPopOpen, setOrderPopOpen] = useState(false)
    const[dishId, setDishId] = useState();

    /* context data  */
    const { menu } = useContext(DataContext)

  return (
    <>
    <section className='section'>
        <div className='container grid-container highlights'>
            <div className='highlightsHead'>
                <h2 className="mainSubHeading headText grdItGoLeft">This Week's Specials!</h2>
                <Link to="/UnderConstruction">
                    <button className="mainBtn grdItGoRight">Online Menu</button>
                </Link>
            </div>
            <div className='menu-list'>
            {menu.map((MenuDish) => {
                if(MenuDish['special'] === "true") {
                    return (
                        <DishCard
                            key={MenuDish['id']}
                            dishId={MenuDish['id']}
                            setOrderPopOpen={setOrderPopOpen}
                            setDishId={setDishId}
                        />
                    )
                }
            })}
            </div>
        </div>
    </section>
    <div>
        {isOrderPopOpen && (
            <OrderPopUp
            dishId={dishId}
            setOrderPopOpen={setOrderPopOpen}
            />
            )}
    </div>
    </>
  )
}

export default HighLights