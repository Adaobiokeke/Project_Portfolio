import React from 'react'
import './nava.css'
import {Link} from "react-router-dom"


const Nava = () => {
  return (
    <div>
        <div className="nava">
            <Link to="/">
            <button className= "nava-button">Home</button>
            </Link>
            <Link to="/about">
            {/* <button className= "nav-button">ABOUT</button> */}
            </Link>
            <Link to="/projects">
            <button className= "nava-button">Projects</button>
            </Link>
            <Link to="/contact">
            <button className= "nava-button">Contact</button>
            </Link>
        </div>
        </div>
  )
}

export default Nava