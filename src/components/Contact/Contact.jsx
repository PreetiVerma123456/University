import React from 'react'
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope,  faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1c55d94e-d1e4-4637-a579-82963c7d85b2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();

    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a messege
        <span><FontAwesomeIcon icon = {faEnvelope} style = {{color:"#212EA0"}}></FontAwesomeIcon></span></h3>
        <p> We are here to help and answer any question you might have.</p>
        <ul>
            <li> <span><FontAwesomeIcon icon = {faEnvelope} style = {{color:"#212EA0",fontSize:"20px"}}></FontAwesomeIcon></span>Contact @PreetiVerma.dev</li>
            <li> <span><FontAwesomeIcon icon = {faPhone} style = {{color:"#212EA0" ,fontSize:"20px"}}></FontAwesomeIcon></span>+1 123-456-789</li>
            <li> <span><FontAwesomeIcon icon = {faLocationPin} style = {{color:"#212EA0",fontSize:"20px"}}></FontAwesomeIcon></span>Hisar,Haryana</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label > Your Name</label>
          <input type = "text" name = 'name' placeholder='Enter your name' required></input>

          <label > Phone Number</label>
          <input type = "tel" name = 'phone' placeholder='Enter your mobile number' required></input>

          <label > Write your messege here</label>
         <textarea name = "messege" rows = "6" placeholder='enter your messege' required ></textarea>

         <button type = 'submit' className='btn dark-btn'>Submit Now
         <FontAwesomeIcon icon = {faArrowRight} style = {{color:"white",margin:"0px 7px"}}></FontAwesomeIcon>
          </button> 
        </form>
        <span class = "formsending">{result}</span>
      
      </div>
    </div>
  )
}

export default Contact
