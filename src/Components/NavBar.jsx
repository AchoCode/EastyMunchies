import React from "react";
import logo from "../assets/logos/navLogo3.png";

export const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <img src={logo} className="logo" alt="logo.png" />

        <ul>
          <li className="nav-links">
            <a href="/">Home</a>
          </li>
          <li className="nav-links">
            <a href="/Menu">Menu</a>
          </li>
          <li className="nav-links">
            <a href="/Cart">Cart</a>
          </li>
          <li className="nav-links">
            <a href="/About-us">About us</a>
          </li>
          <li className="nav-links">
            <a href="/Contact-us">Contact us</a>
          </li>
        </ul>
      </div>
    </>
  );
};
