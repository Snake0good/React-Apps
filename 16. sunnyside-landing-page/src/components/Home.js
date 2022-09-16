import React, { useRef } from 'react'
import header from '../images/desktop/image-header.jpg'
import { BsArrowDown } from 'react-icons/bs'
import Footer from './Footer'
import Midsection from './Midsection'
import Testimonials from './Testimonials'


function Home() {
  return (
    <>
      <div id="header-div">
        <img id='header-pic' src={header} />
        <h1>We Are Creatives</h1>
        <BsArrowDown id="arrow" />
      </div>
      <Midsection /> 
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home