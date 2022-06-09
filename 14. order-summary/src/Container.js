import dancer from './images/illustration-hero.svg'
import { FaMusic}  from 'react-icons/fa'

import React, { Component } from 'react'

function Container() {
    return (
        <div id="container">
            <img id='dancer' src={dancer}></img>
            
            <div id='bottom-div'>
                <h2>Order Summary</h2>
                <p id='desc'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                <div id='annual-plan'>
                    <FaMusic id="music"/>
                    <div>
                        <h4>Annual Plan</h4>
                        <p>$59.99/year</p>
                    </div>
                    <a href='#'>Change</a>
                </div>

                <button id="pay-button" className="button">Proceed to Payment</button>
                <button id="cancel" className="button">Cancel Order</button>
            </div>
        </div>
    )
}

export default Container