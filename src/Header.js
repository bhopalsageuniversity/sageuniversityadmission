import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <div className='Header1 fixed-top'>
        <Link to="/">  <img src='./img/sage-university-bhopal-logo.webp' alt='SAGE University Bhopal(SUB)' className='img11'/> </Link> 
        </div>
    </div>
  )
}

export default Header