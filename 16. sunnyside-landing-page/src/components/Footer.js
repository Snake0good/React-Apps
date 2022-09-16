import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter } from 'react-icons/bs'
import milk from '../images/desktop/image-gallery-milkbottles.jpg'
import orange from '../images/desktop/image-gallery-orange.jpg'
import cone from '../images/desktop/image-gallery-cone.jpg'
import sugar from '../images/desktop/image-gallery-sugarcubes.jpg'

function Footer() {
  return (
    <div id='footer-top'>
        <div id='gallery-pics'>
            <img src={milk} class='gallery-pic'/>
            <img src={orange} class='gallery-pic'/>
            <img src={cone} class='gallery-pic'/>
            <img src={sugar} class='gallery-pic'/>
        </div>
        <div id="footer">
            <h2>sunnyside</h2>       
            <ul>
                <li className='footer-item'>
                    <NavLink className="footer-brand" to="/About">
                    About
                </NavLink>
                </li>
                <li className='footer-item'>
                    <NavLink className="footer-brand" to="/Blog">
                    Blog
                </NavLink>
                </li>
                <li className='footer-item'>
                    <NavLink className="footer-brand" to="/contact">
                    Contact
                </NavLink>
                </li>
            </ul> 
            <ul id='footer-social'>
                <li>
                    <BsFacebook />
                </li>
                <li>
                    <BsInstagram />
                </li>
                <li>
                    <BsTwitter />
                </li>
                <li>
                    <BsPinterest />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer