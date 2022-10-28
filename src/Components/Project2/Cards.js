import React from 'react'
import { FaStar } from 'react-icons/fa';

function Cards() {
  return (
    <div className='card-container'>
        <div className='cards'>
            <img src="./card-img1.jpg" alt="" />
            <div className='cards-description'>
                <p><FaStar/> 5.0 (6) USA</p>
                <p>Do something fun</p>
                <h5>From $136 / person</h5>
            </div>
        </div>
        <div className='cards'>
            <img src="./card-img2.jpg" alt="" />
            <div className='cards-description'>
                <p><FaStar/> 5.0 (6) USA</p>
                <p>Learn wedding photography</p>
                <h5>From $136 / person</h5>
            </div>
        </div>
        <div className='cards'>
            <img src="./card-img3.jpg" alt="" />
            <div className='cards-description'>
                <p><FaStar/> 5.0 (6) USA</p>
                <p>Group mountain bikers</p>
                <h5>From $136 / person</h5>
            </div>
        </div>
    </div>
  )
}

export default Cards