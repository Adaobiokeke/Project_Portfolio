import React from 'react'
import './Navbar.css'
import Logo from '../Assets/logo-removebg-preview.png'
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            {/* <img src={Logo} alt='logo' className='nav-logo'/> */}
            <Link to="/">
            <button className= "nav-button">Home</button>
            </Link>
            <Link to="/projects">
            <button className= "nav-button">Projects</button>
            </Link>
            <Link to="/contact">
            <button className= "nav-button">Contact me</button>
            </Link>
        </div>
        </div>
  )
}

export default Navbar