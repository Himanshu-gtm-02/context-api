import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/'><img  src={Logo} alt='Logo' width="170px"/></Link>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/products'><li>Products</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
            <NavLink to='/jobs'><li>Jobs</li></NavLink>
        </ul>
        
        <button>Get Started</button>
    </div>
  )
}

export default Navbar