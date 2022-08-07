import "./nav.css"
import { Link } from "react-router-dom"
import React from 'react'

export default function Nav() {
  return (
    
    <nav className="nav"> 
      <Link to="/quote" className="site-title">
        Quote Gen
      </Link>
      <ul>
        <li className="nav-items">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-items">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-items">
          <Link to="/update-profile">Profile</Link>
        </li>
        {/* <li className="nav-items">
          <Link to="/signup">SignUp</Link>
        </li>
        <li className="nav-items">
          <Link to="/login">Login</Link>
        </li> */}
      </ul>
    </nav>
  )
}