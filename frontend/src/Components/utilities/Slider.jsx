import React, { useState, useRef, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
export const Slider = ({ data, autoPlay = true, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef();
  const intervalRef = useRef();

  const updateCarousel = (newIndex) => {
    const itemWidth =
      trackRef.current.children[0].getBoundingClientRect().width;
    trackRef.current.style.transform = `translateX(${-newIndex * itemWidth}px)`;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex < sliderData.length - 1 ? currentIndex + 1 : 0;
    updateCarousel(newIndex);
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : data.length - 1;
    updateCarousel(newIndex);
  };
  // Auto-play functionality
  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, autoPlayInterval);

      // Clear interval on component unmount
      return () => clearInterval(intervalRef.current);
    }
  }, [currentIndex, autoPlay, autoPlayInterval]);

  const sliderData = [
    {
      spanHeader1: "Quick Delivery",
      spanHeader2: "Personalized Orders",
      text1: "Taste Your Favorites",
      text2: "Customize Your Meal",
      writeUp1:
        "Enjoy meals from your favorite spots delivered straight to you",
      writeUp2: "Tailor your dishes to meet your needs and reqiurements",
      paragraph:
        "Effortlessly explore choices designed for taste and satisfaction",
    },
    {
      spanHeader1: "Explore Diverse Menus",
      spanHeader2: "Effortless Checkout",
      text1: "Culinary Delights",
      text2: "Seamless Payment Options",
      writeUp1:
        "Discover new flavors with a selection to satisfy every craving",
      writeUp2: "Securely finalize your order with ease and peace of mind",
      paragraph:
        "Enjoy unmatched convenience with your meals arriving quickly at your door",
    },
    {
      spanHeader1: "Unforgettable meals",
      spanHeader2: "Meet Your Needs",
      text1: "Satisfy Your Cravings",
      text2: "Enhance Your Experience",
      writeUp1: "Discover how each meal can ehance your dining journey",
      writeUp2: "Each selection brings you closer to dining perfection",
      paragraph:
        "Take action now to experience quick, customizable meals at the press of a button",
    },
  ];
  return (
    <div className="carousel">
      <div className="carousel-track" ref={trackRef}>
        {sliderData.map((data, index) => (
          <div className="carousel-item" key={index}>
            <div className="container image-container-1">
              <span className="spanheader">{data.spanHeader1}</span>

              <div className="content">
                <div className="text">
                  <h3>{data.text1}</h3>
                  <p>{data.writeUp1}</p>
                </div>
              </div>
            </div>
            <div className="contentbox">
              <div className=" container image-container-2">
                <span className="spanheader">{data.spanHeader2}</span>

                <div className="content">
                  <div className="text">
                    <h3>{data.text2}</h3>
                    <p>{data.writeUp2}</p>
                  </div>
                </div>
              </div>
              <div className="content-2">
                <p>{data.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-btn prev-btn" onClick={handlePrev}>
        <FaArrowLeft />
      </button>
      <button className="carousel-btn next-btn" onClick={handleNext}>
        <FaArrowRight />
      </button>
    </div>
  );
};
