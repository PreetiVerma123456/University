import React from 'react'
import './Program.css'
import Program1 from '../../assets/student-success1.webp'
import Program2 from '../../assets/student-success2.jpg'
import Program3 from '../../assets/student-success3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
const Program = () => {
  return (
    <div className='Programs'>
        <div className="Program">
            <img src = {Program2} alt = ""></img>
            <div className="caption">
           <FontAwesomeIcon icon = {faGraduationCap} style = {{fontSize:"60px"}}></FontAwesomeIcon >
            <p> Graduation Degree</p>
            </div>
        </div>
        <div className="Program">
            <img src = {Program1} alt = ""></img>
            <div className="caption">
           <FontAwesomeIcon icon = {faGraduationCap} style = {{fontSize:"60px"}}></FontAwesomeIcon>
            <p>Master Degree</p>
            </div>
        </div>
        <div className="Program">
            <img src = {Program3} alt = ""></img>
            <div className="caption">
           <FontAwesomeIcon icon = {faGraduationCap} style = {{fontSize:"60px"}}></FontAwesomeIcon>
            <p>Post Graduation </p>
            </div>
        </div>
      
    </div>
  )
}

export default Program
