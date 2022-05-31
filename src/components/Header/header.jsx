import React from "react";
import Favicon from '../assets/favicon.png'


const Header = () => {
 return (
     <header>
         <div className="column header-container">
             <img src={Favicon} alt="favicon"/>
             <span className="title"> <h1>Hi, Im Erica Lorraine Mitchell</h1>
             <h3>Technical Project Manager and Fullstack Developer</h3> </span>
         </div>
     </header>
 )
}

export default Header;