import React from 'react'
import hero from '../../../src/assets/hero.svg'

const Hero = () => {
    return (
        <section className="intro">
            <div className="intro-img">
                <img src={hero} alt="hero" />
            </div>
            <div className="intro-text">
                <h2>Nottingham</h2>
                <p>The Only App you need to Slay Robinhood.</p>
            </div>
        </section>
    )
}

export default Hero;