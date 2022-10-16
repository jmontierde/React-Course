import React from 'react'

function Header() {
  return (
    <div>
        <header>
            <nav className='nav-menu'>
                <img className='nav-logo' src={'./reactLogo.png'} alt='React-Logo'/>
                <ul className='nav-item'>
                <li className='item-list'>Pricing</li>
                <li className='item-list'>About</li>
                <li className='item-list'>Contacts</li>
                </ul>
            </nav>
        </header>
        
    </div>
 
  )
}

export default Header