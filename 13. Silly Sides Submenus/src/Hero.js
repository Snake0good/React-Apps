import React from 'react';
import phoneImg from './images/phone.svg'
import manImg from './images/man.svg'
import chemistImg from './images/chemist.svg'
import luigiImg from './images/luigi.svg'
import { useGlobalContext } from './context'

const Hero = () => {
    const { closeSubmenu } = useGlobalContext();
    return (
        <section className='hero' onMouseOver={closeSubmenu}>
            <div className='hero-center'>
                <article className='hero-info'>
                    <h1>
                        Come and enjoy <br />
                        the game or TV show you love
                    </h1>
                    <p>
                    Millions of people love getting dressed up as different characters and we provide nothing less!
                    As the world moves to Web3 and all online access we want to provide you with the ability to play Halloween every day!
                    </p>
                    <button className='btn'>Start now</button>
                </article>
                <article className='hero-images'>
                    <img src={manImg} className='phone-img' alt='phone-img' />
                    <img src={chemistImg} className='cleaner-img' alt='phone-img' />
                    <img src={luigiImg} className='luigi-img' alt='phone-img' />
                </article>
            </div>
        </section>

    )
}

export default Hero