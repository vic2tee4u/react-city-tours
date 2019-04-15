import React from 'react';
import './Navbar.scss';
import logo from '../../img/logo.png';

export default function Navbar() {
  return (
    <div>
     <nav className='navbar'>
        <img src={logo} alt='city tours' style={{width: '100px'}}></img>
        <ul className='nav-links'>
            <li>
                <a href='/' className='nav-link'>HOME</a>
            </li>
            <li>
                <a href='/' className='nav-link'>ABOUT</a>
            </li>
            <li>
                <a href='/' className='nav-link active'>TOURS</a>
            </li>
        </ul>
     </nav>
    </div>
  )
}
