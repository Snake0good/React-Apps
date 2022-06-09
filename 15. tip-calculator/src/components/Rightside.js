import React from 'react'
import Leftside from './Leftside'
import { useState } from 'react'

function Rightside() {

  return (
    <div id="rightside">
        <div id='tip'>
            <div id='top-tip'>
                <h5>Tip Amount <br /> <span>/ person</span></h5>
                <h1>$<span id='tip-amt'>0.00</span></h1>
            </div>
            <div id='bottom-tip'>
                <h5>Total <br /> <span>/ person</span></h5>
                <h1>$<span id='total'>00.00</span></h1>
            </div>
        </div>
        <button id='reset' >RESET</button>
    </div>
  )
}

export default Rightside