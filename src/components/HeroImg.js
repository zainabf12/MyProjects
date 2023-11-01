import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/IntroImg.jpg"
import {Link} from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
<img className="intro-img" src={IntroImg} alt="IntroImg"/>

        </div>
        <div className="content">
            <p>HI, I'M ZAINAB FATIMA BHUTTO</p>
            <h1>Computer Scientist</h1>
            <div>
               <Link to="/projects" className="btn" >PROJECTS</Link> 
               <Link to="/contact" className="btn btn-light" >CONTACT</Link> 
            </div>
        </div>
    </div>
  )
}

export default HeroImg