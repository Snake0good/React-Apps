import React from 'react'
import header from '../images/desktop/image-header.jpg'
import { BsArrowDown } from 'react-icons/bs'
import Footer from './Footer'

function Contact() {
  return (
    <>
      <div id="header-div">
        <img id='header-pic' src={header} />
        <h1>CONTACT</h1>
        <BsArrowDown id="arrow" />
      </div>
      <div id='contact'>
        <h1>Contact information will go here</h1>
        <p>Email:</p>
        <p>Phone:</p>
        <p>Area:</p>
      </div>

      <Footer />
    </>
  )
}

export default Contact