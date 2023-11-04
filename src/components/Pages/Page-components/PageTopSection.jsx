import React from 'react'
import './PageTopSection.css'
import { Link } from 'react-router-dom'

const PageTopSection = ({
      heading, sub_heading, 
      sub_text, image, 
      image_position, 
      type_for_sub_text, 
      button_text, 
      button_path
    }) => {
  const toRenderSubText = () => {
    switch(type_for_sub_text) {
      case 'p' :
        return (
          <p className='text-white'>
              {sub_text}
          </p>
        )
      case 'h3' :
        return (
          <h3 className='text-white'>
              {sub_text}
          </h3>
        )
      default :
          return null;
    }
  }

  const toRenderSubHeading = () => {
    return (
      <div>
        <h2 className='text-white'>{sub_heading}</h2>
      </div>
    )
  }
  /* for top section button */
  const toRenderButton = () => {
    return (
      <div>
        <Link to={button_path}>
          <button className='page_top_button'>
            {button_text}
          </button>
        </Link>
      </div>
    )
  }
  /* to render image */
  const toRenderImage = () => {
    return (
      <div>
        <img className={`page-main-image top-section-page-image-margin ${image_position === 'left' ? 
        'top-section-page-image-no-margin' : null}`}
        src={image} alt="image_not_found" />
      </div>
    )
  }

  return (
    <>
    <section className={`section page-top-section-left 
    ${ image_position !== 'left' ? 'page-top-section-margin' : null }`}>
        <div className='container page-top-container'>
        { image_position === 'left' ? toRenderImage() : null }
          <div className='page_top_box'>
              <h1>{heading}</h1>
              { sub_heading ? toRenderSubHeading() : null }
              {toRenderSubText()}
              { button_path && button_text ? toRenderButton() : null }
          </div>
          { image_position !== 'left' ? toRenderImage() : null }
        </div>
    </section>
    </>
  )
}

export default PageTopSection