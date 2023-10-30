import React, { useContext, useState } from 'react'
import { DataContext } from "../../data/DataContext"
import css from "./Menu.css"
import Table1 from "../../assets/table1.avif"
import DishCard from './Page-components/DishCard'
import OrderPopUp from './Page-components/OrderPopUp'

const Menu = () => {
    /* order pop up */
    const [isOrderPopOpen, setOrderPopOpen] = useState(false)
    const[dishId, setDishId] = useState();

    /* getting the menu data */
    const {menu}= useContext(DataContext);

    /* render products article */
    const renderDish = (category) => {
        return (
            <div className='menuPart'>
                <div className='menuPartTitle'>
                    <h2>{category}</h2>
                </div>
                <div className='menu-list'>
                {menu.map((MenuDish) => {
                if(MenuDish['category'] === category) {
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
        )
    }

  return (
  <div className='menu-main'>
    <section className='section menu-head'>
        <div className='container grid-container menu-top'>
            <img className='page-main-image menu-main-image' src={Table1} alt="error" />
            <div>
                <div>
                    <h1>Our Menu</h1>
                </div>
                <p className='text-white' >
                    Celebrate the vibrant flavors of the Mediterranean, 
                    where every dish is a journey through sun-soaked landscapes and 
                    time-honored traditions. Experience a symphony of taste that 
                    transports you to the shores of the Mediterranean Sea, 
                    one exquisite bite at a time.
                </p>
            </div>
        </div>
    </section>
    {menu ? (
        <>
        <section className='section'>
            <div className='container grid-container'>
                {renderDish('Entrees')}
                {renderDish('Appetizers')}
                {renderDish('Desserts')}
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
    ) : (
        <>
        <p>loading...</p>
        </>
    )}
  </div>
  )
}

export default Menu