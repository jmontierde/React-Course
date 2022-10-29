import React from 'react'
import { FaStar } from 'react-icons/fa';

function Cards(props) { // Destructuring props
   


  return (
    <div className='card-container'>
        <div className='cards'>
            <img src={props.img} alt="" />
            <div className='cards-description'>
                <p><FaStar/> {props.rating} ({props.reviewCount}) • {props.country}</p>
                <p>{props.title}</p>
                <h5>From ${props.price} /person</h5>
            </div>
        </div>
        <div className='cards'>
            <img src={props.img} alt="" />
            <div className='cards-description'>
                <p><FaStar/> {props.rating} ({props.reviewCount}) • {props.country}</p>
                <p>{props.title}</p>
                <h5>From ${props.price} /person</h5>
            </div>
        </div>
        <div className='cards'>
            <img src={props.img} alt="" />
            <div className='cards-description'>
                <p><FaStar/> {props.rating} ({props.reviewCount}) • {props.country}</p>
                <p>{props.title}</p>
                <h5>From ${props.price} /person</h5>
            </div>
        </div>
    </div>
  )
}

export default Cards