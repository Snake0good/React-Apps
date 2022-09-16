import React from 'react'
import header from '../images/desktop/image-header.jpg'
import { BsArrowDown } from 'react-icons/bs'
import Footer from './Footer'


function Blog() {
  return (
    <>
      <div id="header-div">
        <img id='header-pic' src={header} />
        <h1>BLOG PAGE</h1>
        <BsArrowDown id="arrow" />
      </div>
      <div id='about'>
        <h1>This is for blogs</h1>
        <h3>Blog 1: My First Name</h3>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum provident dignissimos facilis aliquam similique esse quidem eos veritatis sunt debitis. Aut, dolore! Hic itaque unde dolores omnis esse ex provident? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum provident dignissimos facilis aliquam similique esse quidem eos veritatis sunt debitis. Aut, dolore! Hic itaque unde dolores omnis esse ex provident? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum provident dignissimos facilis aliquam similique esse quidem eos veritatis sunt debitis. Aut, dolore! Hic itaque unde dolores omnis esse ex provident?</p>
        <h3>Blog 2: Another Name</h3>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum provident dignissimos facilis aliquam similique esse quidem eos veritatis sunt debitis. Aut, dolore! Hic itaque unde dolores omnis esse ex provident? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum provident dignissimos facilis aliquam similique esse quidem eos veritatis sunt debitis. Aut, dolore! Hic itaque unde dolores omnis esse ex provident? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum provident dignissimos facilis aliquam similique esse quidem eos veritatis sunt debitis. Aut, dolore! Hic itaque unde dolores omnis esse ex provident?</p>
      </div>
      <Footer />
    </>
  )
}

export default Blog