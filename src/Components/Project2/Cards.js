import React from 'react'
import { FaStar } from 'react-icons/fa';

function Cards(props) { // Destructuring props
    let badgeText; 
    if(props.openSpots === 0){ 
        badgeText = "Sold Out"
    }else if (props.location === "Online"){ 
        badgeText = "ONLINE"
    }
   

  return (
    <div className='card-container'>
        <div className='cards'>
            <img className='cards-image' src={props.img} alt="" />
            {badgeText &&<div className='openSpots'>{badgeText}</div>}
            <div className='cards-description'>
                <p><FaStar/> {props.stats.rating} ({props.stats.reviewCount}) • {props.location}</p>
                <p>{props.title}</p>
                <h5>From ${props.price} /person</h5>
               
            </div>
        </div>
       
    </div>
  )
}

export default Cards