import React from 'react'
import {  FaFacebook, FaGithub, FaLinkedin, FaQrcode, FaTwitter, } from "react-icons/fa";
import '/Users/WIN10/Desktop/course/src/Style Components/Project1 Css/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <FaTwitter className='footer-icons'></FaTwitter>
        <FaFacebook className='footer-icons'/>
        <FaQrcode className='footer-icons'/>
        <FaLinkedin className='footer-icons'/>
        <FaGithub className='footer-icons'/>
    </div>
  )
}

export default Footer