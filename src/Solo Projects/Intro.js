import React from 'react'
import { FaEnvelope, FaLinkedin, IconName } from "react-icons/fa";
import '../Style Components/Intro.css'
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