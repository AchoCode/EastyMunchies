import React from "react";
import logo from "../assets/logos/navLogo.png";
import {Link} from 'react-router-dom'
export const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <img src={logo} className="logo" alt="logo.png" />

        <ul>
          <li className="nav-links">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-links">
            <Link to="/Menu">Menu</Link>
          </li>
          <li className="nav-links">
            <Link to="/Cart">Cart</Link>
          </li>
          <li className="nav-links">
            <Link to="/About-us">About us</Link>
          </li>
          <li className="nav-links">
            <Link to="/Contact-us">Contact us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
