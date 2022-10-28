import React from 'react'
import { FaEnvelope} from "react-icons/fa";
import '/Users/WIN10/Desktop/course/src/Style Components/Project1 Css/Intro.css'


function Intro() {
  return (
    <div className='intro-section'>
        <img className='img-profile' src='./profile-intro.jpg'></img>
        <h1 className='name'>Jayson M. Caburatan</h1>
        <h2 className='position'>Front-end Developer</h2>
        <p className='email'>montierdejayson@module</p>
        <button className='btn-email' ><FaEnvelope /><span>Email</span></button>
    </div>
  )
}

export default Intro