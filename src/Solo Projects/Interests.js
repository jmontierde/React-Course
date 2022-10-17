import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';
import '../Style Components/Body.css'

function Interests() {
  return (
    <div className='container'>
        <h2 className='title'>Interests</h2>
        <LoremIpsum p={1} />
    </div>
   
  )
}

export default Interests