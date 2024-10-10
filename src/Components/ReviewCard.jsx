import React from "react";
import { Ratings } from "./Ratings";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
export const ReviewCard = ({ key, image, name, text }) => {
  return (
    <div key={key} className="review-card">
      <img src={image} alt="image.png" />
      <div className="review-text">
        <div className="left">
          <FaQuoteLeft />
        </div>
        <p>{text}</p>
        <div className="right">
          <FaQuoteRight />
        </div>
      </div>
      <p>{name}</p>
      <Ratings />
    </div>
  );
};
