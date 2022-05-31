import React from 'react';
import './footer.css'
import {FaInstagram} from 'react-icons/fa'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const Footer = () => {   
    return (
    <div className="footer" id="footer">
        <a href="mailto:elorrainemitchell@gmail.com"><FaEnvelope/></a>
       <a href="https://www.linkedin.com/in/ericalorrainemitchell/"><FaLinkedinIn/></a>
        <a href="https://github.com/ericaLorraineMitchell"><FaGithub/></a>
        <a href="https://www.instagram.com/tattedintech/"><FaInstagram/></a>
    </div>
    )
}

export default Footer;