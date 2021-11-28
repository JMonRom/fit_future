import React, {userState} from "react";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container">
  <a className="navbar-brand" href="#"> <img className="logo" src-="" alt="logo..."/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Track Calories</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Us</a>
      </li>
      
    </ul>
    
  </div>

  </div>
</nav>
  )
}

export default Navbar
