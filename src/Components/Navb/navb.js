import React from 'react'
import './navb.css'
import {Link} from "react-router-dom"


const Navb = () => {
  return (
    <div>
        <div className="navb">
            <Link to="/">
            <button className= "navb-button">Home</button>
            </Link>
            <Link to="/about">
            <button className= "navb-button">About</button>
            </Link>
            <Link to="/projects">
            </Link>
            <Link to="/contact">
            <button className= "navb-button">Contact</button>
            </Link>
        </div>
        </div>
  )
}

export default Navb