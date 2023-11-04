import "./Menu.css"
import React, { useContext, useState } from 'react'
import { DataContext } from "../../data/DataContext"
import Table1 from "../../assets/table1.avif"
import DishCard from './Page-components/DishCard'
import OrderPopUp from './Page-components/OrderPopUp'
import PageTopSection from "./Page-components/PageTopSection"

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
  <div>
    <PageTopSection
        heading={top_section_heading}
        sub_heading={top_section_sub_heading}
        sub_text={top_section_text}
        image={top_section_image}
        type_for_sub_text={top_section_type_for_sub_text}
        button_text={top_section_button_text}
        button_path={top_section_button_path}
        image_position={top_section_image_position}
    />
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

/* return text for components */

/* for top section */
const top_section_heading = 'Our Menu';
const top_section_sub_heading = undefined;
const top_section_text = `Celebrate the vibrant flavors of the Mediterranean, 
                        where every dish is a journey through sun-soaked landscapes and 
                        time-honored traditions. Experience a symphony of taste that 
                        transports you to the shores of the Mediterranean Sea, 
                        one exquisite bite at a time.`;
const top_section_image = Table1;
const top_section_image_position = 'left';
const top_section_type_for_sub_text = 'p';
const top_section_button_text = undefined;
const top_section_button_path = undefined;