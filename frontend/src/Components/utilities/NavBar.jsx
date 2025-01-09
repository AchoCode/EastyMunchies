import React, { useState, useEffect } from "react";
import logo from "../../assets/logos/logo.png";
import { Link } from "react-router-dom";
export const NavBar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleIsfixed = () => {
      if (window.pageYOffset > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleIsfixed);

    return () => {
      window.removeEventListener("scroll", handleIsfixed);
    };
  }, []);
  return (
    <>
      <div className={`navbar-container ${isFixed ? `fixed` : ``}`}>
        <img src={logo} className="logo" alt="logo.png" />

        <ul>
          <li className="navlinks">
            <Link to="/">Home</Link>
          </li>
          <li className="navlinks">
            <Link to="/Menu">Menu</Link>
          </li>
          <li className="navlinks">
            <Link to="/Cart">Cart</Link>
          </li>
          <li className="navlinks">
            <Link to="/About-us">About us</Link>
          </li>
          <li className="navlinks">
            <Link to="/Contact-us">Contact us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
