import React from 'react'

function Hero() {
  return (
    <div className='hero-container'>
      <div className='grid-container'>
        <img src="./grid-img1.jpg" alt="" className="img-grid" />
        <img src="./grid-img2.jpg" alt="" className="img-grid" />
        <img src="./grid-img3.jpg" alt="" className="img-grid" />
        <img src="./grid-img4.jpg" alt="" className="img-grid" />
        <img src="./grid-img5.jpg" alt="" className="img-grid" />
        <img src="./grid-img6.jpg" alt="" className="img-grid" />
        <img src="./grid-img7.jpg" alt="" className="img-grid" />
        <img src="./grid-img8.jpg" alt="" className="img-grid" />
        <img src="./grid-img9.jpg" alt="" className="img-grid" />
      </div>
      <div className='hero-description'>
        <h2 className='title-description'>Online Experiences</h2>
        <p className='paragraph-description'>Join unique interactive activities led by <br />
          one-of-a-kind- hosts-all without leaving home.
        </p>
      </div>
    </div>
  )
}

export default Hero