import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';
import '../Style Components/Body.css'
function About() {
  return (
    <div className='container'>
        <h2 className='title'>About</h2>
        <LoremIpsum p={1} />
    </div>
  )
}

export default About