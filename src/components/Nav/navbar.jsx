import React from 'react';
import { Link } from "react-router-dom"
import './navbar.css'

const Nav = () => {
  return (
  <div className="navbar topnav">
    <li>
      <Link to="/">About</Link>
    </li>
    <li>
      <Link to="/skills">Skills</Link>
    </li>
    <li>
      <Link to="/resume">Resume</Link>
    </li>
    <li>
      <Link to="/portfolio">Portfolio</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    </div>
    )
    }

    export default Nav;