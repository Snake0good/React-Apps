import React from 'react'
import header from '../images/desktop/image-header.jpg'
import { BsArrowDown } from 'react-icons/bs'
import Footer from './Footer'

function About() {
  return (
    <>
      <div id="header-div">
        <img id='header-pic' src={header} />
        <h1>ABOUT</h1>
        <BsArrowDown id="arrow" />
      </div>
      <div id='about'>
        <h1>I will tell you about the site and use</h1>
        <h3>What we do</h3>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum provident dignissimos facilis aliquam similique esse quidem eos veritatis sunt debitis. Aut, dolore! Hic itaque unde dolores omnis esse ex provident?</p>
        <h3>Who we help:</h3>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum provident dignissimos facilis aliquam similique esse quidem eos veritatis sunt debitis. Aut, dolore! Hic itaque unde dolores omnis esse ex provident?</p>
        <h3>And more!</h3>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum provident dignissimos facilis aliquam similique esse quidem eos veritatis sunt debitis. Aut, dolore! Hic itaque unde dolores omnis esse ex provident?</p>
      </div>
      <Footer />
    </>
  )
}

export default About