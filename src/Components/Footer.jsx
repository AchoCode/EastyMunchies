import React from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
export const Footer = () => {
  const handleOnsubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="footer-area">
      <div className="footer-content">
        <div className="social-links">
          <h3>Follow us</h3>
          <div className="social-icons">
            <ul>
              <li>
                <Link to="#">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaWhatsapp />
                </Link>
              </li>{" "}
              <li>
                <Link to="#">
                  <FaXTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="info-grid">
          <div className="about-info grid">
            <h3>About us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
              delectus exercitationem aperiam vel odit illum maxime, repellat,
              ipsa veritatis assumenda rem debitis. Eum laboriosam magnam
              dignissimos debitis voluptates impedit ipsa.
            </p>
          </div>
          <div className="Contact-info grid">
            <h3>Contact info</h3>
            <ul>
              <li>
                <p>Call: 08079768753</p>
              </li>
              <li>
                <p>Email us: eastymunchies@gmail.com</p>
              </li>
              <li>
                <p>Find us: No. 124 sprignfield avenue lagos</p>
              </li>
            </ul>
          </div>
          <div className="comment-info grid">
            <h3>Leave a Comment</h3>
            <form onSubmit={handleOnsubmit}>
              <input type="text" />
              <textarea name="" id=""></textarea>
            </form>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
