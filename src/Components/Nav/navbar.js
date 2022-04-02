import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar1">
            <Link to="/about">
            <button className= "nav-button">ABOUT.</button>
            </Link>
            <Link to="/projects">
            <button className= "nav-button">PROJECTS.</button>
            </Link>
            <Link to="/contact">
            <button className= "nav-button">CONTACT.</button>
            </Link>
        </div>
        </div>
  )
}

export default Navbar