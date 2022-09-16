import React from 'react'
import emily from '../images/image-emily.jpg'
import thomas from '../images/image-thomas.jpg'
import jennie from '../images/image-jennie.jpg'

function Testimonials() {
  return (
    <div id='testimonials'>
        <h2>Client Testimonials</h2>
        <div className='all-testimonials'>
            <div className='single-person'>
                <img src={emily} />
                <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                <div>
                    <h4>Emily R.</h4>
                    <h5>Marketing Director</h5>
                </div>
            </div>
            <div className='single-person'>
                <img src={thomas} />
                <p>Sunnysides's enthusiasm coupled with their keen interset in our brand's success made it a satisfying and enjoyable experience.</p>
                <div>
                    <h4>Thomas S.</h4>
                    <h5>Chief Operating Officer</h5>
                </div>
            </div>
            <div className='single-person'>
                <img src={jennie} />
                <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                <div>
                    <h4>Jennie R.</h4>
                    <h5>Business Owner</h5>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Testimonials