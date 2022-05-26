import React from "react";
import Favicon from '../assets/favicon.png'


const Header = () => {
 return (
     <header>
         <div className="container header-container">
             <img src={Favicon} alt="favicon"  /> <span><h3>Hi, Im Erica Lorraine Mitchell</h3></span>
             <h4>A Technical Project Manager and Fullstack Developer</h4>
         </div>
     </header>
 )
}

export default Header;