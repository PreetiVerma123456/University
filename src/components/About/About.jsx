import React from 'react'
import './About.css'
import aboutimage from '../../assets/About.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
<img src = {aboutimage}></img>
<span><FontAwesomeIcon icon = {faPlay} onClick={()=>{
  setPlayState(true)
}}></FontAwesomeIcon></span>
        </div>
      <div className="about-right">
<h3>ABOUT UNIVERSITY</h3>
<h2>Nuturing Tommorow's Leader Today</h2>
<p>The University of Delhi is a premier university of the country with a venerable legacy and
     international acclaim for highest academic standards, 
    diverse educational programmes, distinguished faculty, illustrious alumni, varied co-curricular 
    activities and modern infrastructure.</p>
    <p>Established in 1922 as a unitary, teaching and residential University by the Act of the then Central Legislative Assembly, 
        a strong commitment to excellence in teaching, research and social outreach has made the University a role-model and trend setter
         for other universities. The President of India is the Visitor, the Vice-President is the Chancellor and the Chief Justice of the Supreme 
         Court of India is the Pro-Chancellor of the University.  </p>
        <p>Drawing students and faculty from across India and abroad, the University has emerged as a symbol of excellence, integrity and openness
             of mansa (thought),
             vaacha (speech) and karmana (action).</p>
      </div>
    </div>
  )
}

export default About
