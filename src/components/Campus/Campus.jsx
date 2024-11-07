import React from 'react'
import './Campus.css'

import campusimage2 from '../../assets/campus2.jpg';

import Program1 from '../../assets/student-success1.webp'
import Program2 from '../../assets/student-success2.jpg'
import Program3 from '../../assets/student-success3.jpg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Campus = () => {
  return (
    <div className="campus">
    <div className='gallery'>

      <img src = {Program2} alt = ''/>
      <img src = {campusimage2} alt = ''/>
      <img src = {Program1} alt = ''/>
      <img src = {Program3} alt = ''/>
    </div>
    <button className='btn dark-btn'>See more here
    <FontAwesomeIcon icon = {faArrowRight} style = {{color:"white",margin:"0px 7px"}}></FontAwesomeIcon>

    </button>
    </div>
  )
}

export default Campus
