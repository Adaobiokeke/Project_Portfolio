import React from 'react'
import './navc.css'
import {Link} from "react-router-dom"


const Navc = () => {
  return (
    <div>
        <div className="navc">
            <Link to="/">
            <button className= "navc-button">Home</button>
            </Link>
            <Link to="/about">
            <button className= "navc-button">About</button>
            </Link>
            <Link to="/projects">
            <button className= "navc-button">Projects</button>
            </Link>
            <Link to="/contact">
            {/* <button className= "navb-button">Contact</button> */}
            </Link>
        </div>
        </div>
  )
}

export default Navc