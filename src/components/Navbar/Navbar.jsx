import React from 'react'
import "./Navbar.css"

import { Link } from "react-router-dom"

export default function Navbar() {

  return (
    <nav className='nav-container'>
        <div className='nav-area'>
            <div className='nav-box'>
                <Link to="/"><span>Ask<span style={{color: "#003391"}}>app</span></span></Link>
            </div>
            <div className='nav-box-links'>
              <Link to="/register"><div className='nav-button-signup'>Sign up now!</div></Link>
              <Link to="/login"><div className='nav-button-signin'>Sign in</div></Link>
            </div>
        </div>
    </nav>
  )
}
