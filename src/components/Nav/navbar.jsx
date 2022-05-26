import React from 'react';
import { Link } from "react-router-dom";
// import Nav from "./components/Nav/navbar";

const Navbar = () => {
  return (
  <div>
    <li>
      <Link to="/">About</Link>
    </li>
    <li>
      <Link to="/skills">Skills</Link>
    </li>
    <li>
      <Link to="/resume">Resume</Link>
    </li>
    {/* <li>
      <Link to="/portfolio">Portfolio</Link>
    </li> */}
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    </div>
    )
    }

    export default Navbar;