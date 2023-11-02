import React from 'react'

const PageTopSection = ({heading, sub_text, image, type_for_sub_text}) => {
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

  return (
    <>
    <section className='section page-top-section-left'>
        <div className='container grid-container page-top-container'>
            <div>
                <h1>{heading}</h1>
                {toRenderSubText()}
            </div>
            <div>
                <img className='page-main-image'
                src={image} alt="image_not_found" />
            </div>
        </div>
    </section>
    </>
  )
}

export default PageTopSection