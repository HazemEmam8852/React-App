import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
 return <>
 
 <nav className="navbar navbar-expand-lg bg-secondary p-4 ">
  <div className="container-fluid">
    <Link className="navbar-brand p-2 fa-2x" to="">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="About">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="Portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="Contacts">CONTACT</NavLink>
        </li>
       
      
       
      </ul>
      
    </div>
  </div>
</nav>

 </>
}
