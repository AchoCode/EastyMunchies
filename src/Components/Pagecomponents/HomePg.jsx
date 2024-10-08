import React from "react";
import { NavBar } from "../NavBar";
import { Button } from "../Button";
import { motion } from "framer-motion";
import AboutUsImg from "../../assets/Static/about-us-pg-img.jpg";

export const HomePg = () => {
  const buttonVariants = {
    visible: {
      x: [5, -10, 5, -10, 5, -10, 5, -10, 0],
      transition: {
        duration: 0.4,
        delay: 3.5,
      },
    },
  };
  return (
    <div className="page-container">
      <NavBar />
      <div className="hero-section">
        <div className="hero-text-container">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.8 }}
            className="hero-text-1"
          >
            <h2>
              HELLO, <span> NEW FRIEND!</span>
            </h2>
          </motion.div>
          <div className="hero-welcome-text">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.8 }}
            >
              Welcome Back
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8, delay: 1 }}
            >
              to <span>Easty Munchies</span>
            </motion.h2>
            <motion.h3
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.8, delay: 1.5 }}
            >
              Quick bites, Big Flavors...
            </motion.h3>
          </div>
        </div>
        <motion.div variants={buttonVariants} animate="visible">
          <Button link="/menu" title="Browse Menu" />
        </motion.div>
      </div>
      <div className="about-us-section">
        <img src={AboutUsImg} alt="image.png" />
        <div className="about-us-text">
          <div className="text">
            <div className="heading">
              <h2>Our Story</h2>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae quaerat voluptates veniam mollitia quidem sint ad neque,
              pariatur similique libero enim eaque consequatur sit ipsa,
              possimus ex nulla fugit modi.
            </p>
          </div>
          <div className="text">
            <div className="heading">
              <h2>Our Mission</h2>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae quaerat voluptates veniam mollitia quidem sint ad neque,
              pariatur similique libero enim eaque consequatur sit ipsa,
              possimus ex nulla fugit modi.
            </p>
          </div>
          <Button link='/about-us' title='Learn more'/>
        </div>
      </div>
    </div>
  );
};
