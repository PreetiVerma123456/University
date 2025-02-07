import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
const[sticky,setSticky] = useState(false);

useEffect(()=>{
window.addEventListener('scroll',()=>{
  window.scrollY > 50 ? setSticky(true):setSticky(false);
}
)
},[])
const[mobileMenu,setMobileMenu] = useState(false)
const toggleMenu = () =>{
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true)

}

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src ={logo} alt ="" className='logo'></img>  
        <ul className={mobileMenu ? '':'hide-mobile-menu'}>
            <li><Link to = 'hero' smooth = {true} offset = {0} duration={500}>Home</Link></li>
            <li><Link to = 'Program' smooth = {true} offset = {-260} duration={500}>Program</Link></li>
            <li><Link to = 'about' smooth = {true} offset = {-150} duration={500}>About Us</Link></li>
            <li><Link to = 'campus' smooth = {true} offset = {-260} duration={500}>Campus</Link></li>
            <li><Link to = 'testimonials' smooth = {true} offset = {-260} duration={500}>Testimonials</Link></li>
            <li><Link to = 'contact' smooth = {true} offset = {-260} duration={500} className='btn'>Contact Us</Link>
            </li>
            </ul> 
           <span class = "menu-icon" onClick={toggleMenu}> <FontAwesomeIcon icon = {faBars} ></FontAwesomeIcon></span>
        </nav>
  )
}

export default Navbar
