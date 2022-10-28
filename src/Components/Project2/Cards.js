import React from 'react'
import { FaStar } from 'react-icons/fa';

function Cards({img, status, title, rate}) { // Destructuring props
   
  return (
    <div className='card-container'>
        <div className='cards'>
            <img src={img} alt="" />
            <div className='cards-description'>
                <p><FaStar/> {status}</p>
                <p>{title}</p>
                <h5>{rate}</h5>
            </div>
        </div>
        <div className='cards'>
            <img src={img} alt="" />
            <div className='cards-description'>
                <p><FaStar/> {status}</p>
                <p>{title}</p>
                <h5>{rate}</h5>
            </div>
        </div>
        <div className='cards'>
            <img src={img} alt="" />
            <div className='cards-description'>
                <p><FaStar/> {status}</p>
                <p>{title}</p>
                <h5>{rate}</h5>
            </div>
        </div>
    </div>
  )
}

export default Cards