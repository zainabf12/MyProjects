import "./FooterStyles.css";
import React from 'react';
import{FaHome,FaPhone,FaMailBulk, FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
            <div className="location">
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
                <p>Sukkur society shikarpur road sukkur</p>
                <p>Pakistan</p>
            </div>
            </div>
            <div className="phone">
                <h4> <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>03001001001</h4>
           
            </div>
            <div className="email">
                <h4> <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>Zainab@gmail.com</h4>
           
            </div>
        </div>
        <div className="right">
            <h4>About the company</h4>
            <p>This is me Zainab fatima .I am a computer scientist.I enjoy coding and working on new and exiting projects.</p>
            <div className="socail">
            <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Footer