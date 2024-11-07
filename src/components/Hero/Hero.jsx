import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We ensure better education for a better World.</h1>
        <p>Our Mission is to provide high quality education and childcare in a safe,
             respectful and inclusive environment that builds a foundation for life-long learning.</p>
             <button className='btn'>Explore More <span><FontAwesomeIcon icon = {faArrowRight}></FontAwesomeIcon></span></button>
      </div>
    </div>
   
  )
}

export default Hero
