import React from 'react'
import egg from '../images/desktop/image-transform.jpg'
import cup from '../images/desktop/image-stand-out.jpg'
import orange from '../images/desktop/image-photography.jpg'
import cherry from '../images/desktop/image-graphic-design.jpg'

function Midsection() {
  return (
    <div id='midsection'>
        <div className='mid'>
            <div className='words'>
                <h2>Transform your brand</h2>
                <p>Lorem voluptas numquam pariatur et expedita! Officia libero itaque eveniet distinctio repellat, vel ea, optio dignissimos nostrum ab velit quos illum eos.</p>
                <a href="#" class='button'>LEARN MORE</a>
            </div>
            <img src={egg} />
        </div>
        <div className='mid'>
            <img src={cup} />
            <div className='words'>
                <h2>Stand out to the right audience</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas numquam pariatur et expedita! Officia libero itaque eveniet distinctio repellat, vel ea.</p>
                <a href="#" class='button'>LEARN MORE</a>
            </div>
        </div>
        <div className='mid relative'>
            <div className='relative'>
                <img className='overlay-pic' src={orange} />
                <div className='overlay-words'>
                    <h2>Graphic Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas numquam pariatur et expedita!</p>
                </div>
            </div>
            <div className='relative'>
                <img className='overlay-pic' src={cherry} />
                <div className='overlay-words'>
                    <h2>Photography</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas numquam pariatur et expedita!</p>
                </div>
            </div>
        </div>
    </div>
  )
}
   

export default Midsection