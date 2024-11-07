import React, { useRef } from 'react'
import './Testimonials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import student2 from '../../assets/student2.jpg';
import student1 from '../../assets/student1.jpg';
import student3 from '../../assets/student3.jpg';
import student4 from '../../assets/student4.jpg';
const Testimonials = () => {
    const slider = useRef();
let tx = 0;
const slideForward = ()=>{
if(tx > -50){
    tx -= 25
;}
slider.current.style.transform = `translateX(${tx}%)`;

}
const slideBackward = ()=>{
    if(tx  < 0){
        tx += 25
    ;}
    slider.current.style.transform = `translateX(${tx}%)`;  
}

  return (
   <div className="testimonials">
       <span class = "back-btn" onClick={slideBackward}> <FontAwesomeIcon icon = {faArrowLeft} style = {{color:"white",fontSize:"25px"}}></FontAwesomeIcon></span> 
   <span class = "next-btn" onClick={slideForward}> <FontAwesomeIcon icon = {faArrowRight} style = {{color:"white",fontSize:"25px"}}></FontAwesomeIcon></span>
   <div className="slider">
        <ul ref = {slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src = {student2} alt= ""/>
                        <div>
                    <h3>Willian Jackson</h3>
                    <span>Haryana,India</span>
                    </div>
                </div>
                <p>The faculty members are very highly qualified, with many holding Ph.D. 
                    degrees. The curriculum is a contemporary and application-oriented, 
                    aligning with industry demands. The institution's is renowned case-based learning
                     approach ensures students receive practical insights into real-world scenarios</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src = {student1} alt= ""/>
                        <div>
                    <h3>Student1</h3>
                    <span>Haryana,India</span>
                    </div>
                </div>
                <p>The faculty members are very highly qualified, with many holding Ph.D. 
                    degrees. The curriculum is a contemporary and application-oriented, 
                    aligning with industry demands. The institution's is renowned case-based learning
                     approach ensures students receive practical insights into real-world scenarios</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src = {student3} alt= ""/>
                        <div>
                    <h3>Student3</h3>
                    <span>Haryana,India</span>
                    </div>
                </div>
                <p>The faculty members are very highly qualified, with many holding Ph.D. 
                    degrees. The curriculum is a contemporary and application-oriented, 
                    aligning with industry demands. The institution's is renowned case-based learning
                     approach ensures students receive practical insights into real-world scenarios</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src = {student4} alt= ""/>
                        <div>
                    <h3>student4</h3>
                    <span>Haryana,India</span>
                    </div>
                </div>
                <p>The faculty members are very highly qualified, with many holding Ph.D. 
                    degrees. The curriculum is a contemporary and application-oriented, 
                    aligning with industry demands. The institution's is renowned case-based learning
                     approach ensures students receive practical insights into real-world scenarios</p>
                </div>
            </li>
        </ul>
    </div>
   </div>
  )
}

export default Testimonials
