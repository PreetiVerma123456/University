import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Program/Program";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Videoplayer from "./components/Vedipplayer/Videoplayer";

const App = () => {

  const[playstate ,setPlayState] = useState(false);

  return (
<>
<Navbar/>
<Hero/>
<div className="container">
  <Title subtitle = 'Our Program' title = 'What We Offer'/>
<Program/>
<About setPlayState = {setPlayState}/>
<Title subtitle = 'Gallery' title = 'Campus Photos'/>  
<Campus/>
<Title subtitle = 'Testimonials' title = 'What Student Says'/>  
<Testimonials/>
<Title subtitle = 'Contact us' title = 'Get in Touch'/>
<Contact/>
<Footer/>
</div>
<Videoplayer playstate = {playstate} setPlayState= {setPlayState}/>
</>

  )
}

export default App
