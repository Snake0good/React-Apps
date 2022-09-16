import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

function Navbar() {
  return (
    <div id='navbar'>
      <h2>sunnyside</h2>
      <ul>
        <li className='nav-item'>
          <NavLink className="navbar-brand" to="/">
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className="navbar-brand" to="/About">
            About
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className="navbar-brand" to="/Blog">
            Blog
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className=" contact" to="/contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar