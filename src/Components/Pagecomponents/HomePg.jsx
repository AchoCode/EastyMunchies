import React from "react";
import { NavBar } from "../NavBar";
import { Button } from "../Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutUsImg from "../../assets/Static/about-us-pg-img.jpg";
import chefSvg from "../../assets/Static/chef.svg";
import deliverySvg from "../../assets/Static/delivery.svg";
import menuSvg from "../../assets/Static/menu.svg";
import { MenuSection } from "../MenuSection";
import { Counter } from "../Counter";
import { Carousel } from "../Carousel";

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
  const imageVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };
  const { ref, inView } = useInView({
    triggerOnce: false, //triggers everytime the element is in viewport
    threshold: 0.5, //triggers when 50% of the elemen is in the viewport
  });
  const countItems = [
    {
      targerCount: 200,
      countText: "VISITORS DAILY",
      percent: false,
    },
    {
      targerCount: 400,
      countText: "DELIVERY MONTHLY",
      percent: false,
    },
    {
      targerCount: 100,
      countText: "POSITIVE FEEDBACK",
      percent: true,
    },
  ];
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
              initial={{ x: 200, opacity: 0 }}
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

      {/* ABOUT US SECTION */}

      <div className="about-us-section">
        <div id="image-container">
          <motion.div
            className="overlay"
            variants={imageVariants}
            ref={ref}
            initial="hidden"
            animate={inView ? `visible` : ``}
          ></motion.div>
          <motion.img
            variants={imageVariants}
            ref={ref}
            src={AboutUsImg}
            alt="image.png"
            initial="hidden"
            animate={inView ? `visible` : ``}
          />
        </div>
        <motion.div
          className="about-us-text"
          ref={ref}
          initial={{ y: -100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: [0, 0.5, 1] } : {}}
          transition={{ duration: 0.7 }}
        >
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
          <Button link="/about-us" title="Learn more" />
        </motion.div>
      </div>

      {/* MENU SECTION/COMPONENT */}
      <MenuSection />

      {/* OUR FEATURES SECTION */}
      <div className="features-section">
        <h1 className="feature-text">Why people choose us?</h1>
        <div className="features-container">
          <div className="feature">
            <img src={deliverySvg} alt="svg-icon" />
            <h3>Fast Delivery</h3>
            <p>
              Get your meals delivered to your doorstep quickly with our
              efficient and reliable delivery service.
            </p>
          </div>
          <div className="feature">
            <img src={chefSvg} alt="svg-icon" />
            <h3>Expert Chefs</h3>
            <p>
              Our skilled chefs prepare fresh, high-quality meals with attention
              to every detail.
            </p>
          </div>
          <div className="feature">
            <img src={menuSvg} alt="svg-icon" />
            <h3>Customizable Menu</h3>
            <p>
              Choose from a wide range of dishes and customize your order to
              suit your taste and dietary preferences.
            </p>
          </div>
        </div>

        <hr />

        {/* COUNTER COMPONENT - SECTION */}
        <div className="count-wrapper">
          {countItems.map((countItem, key) => (
            <Counter
              key={key}
              targetCount={countItem.targerCount}
              countText={countItem.countText}
              percent={countItem.percent}
            />
          ))}
        </div>

        {/* TESTIMONIALS SECTION - COMPONENT */}
        <div className="testimonials  carousel-wrapper">
          <div className="feature-text">Our customers say...</div>
          <Carousel />
        </div>
      </div>
    </div>
  );
};
