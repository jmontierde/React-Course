import React from 'react'
import {  FaFacebook, FaGithub, FaLinkedin, FaQrcode, FaTwitter, } from "react-icons/fa";
import '../Style Components/Footer.css'
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