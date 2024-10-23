import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Footer = () => {
  const [formData, setFormData] = useState();
  const [usrEmail, setUsrEmail] = useState();
  const [usrComment, setUsrComment] = useState();

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      usrEmail,
      usrComment,
    }));
  }, [usrEmail, usrComment]);

  const handleOnsubmit = (event) => {
    event.preventDefault();
    console.log(usrComment, usrEmail, formData, "form submitted");
  };

  const { ref, inView } = useInView({
    triggerOnce: false, //triggers everytime the element is in viewport
    threshold: 0.5, //triggers when 50% of the elemen is in the viewport
  });
  const footerVariants = {
    hidden: {
      y: -100,
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className="footer-area">
      <motion.div
        ref={ref}
        variants={footerVariants}
        initial="hidden"
        animate={inView ? `visible` : ``}
        className="footer-content"
      >
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
              <div className="comment-form">
                <input
                  type="email"
                  onChange={(e) => {
                    setUsrEmail(e.target.value);
                  }}
                  placeholder="Enter Email address"
                />
                <div className="msg-box">
                  <label htmlFor="msg">Enter Comment</label>
                  <textarea
                    onChange={(e) => {
                      setUsrComment(e.target.value);
                    }}
                    id="msg"
                  ></textarea>
                </div>
                <Button type="submit" title="Submit" />
              </div>
            </form>
          </div>
        </div>
        <hr />
      </motion.div>
    </div>
  );
};
