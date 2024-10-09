import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import usr1 from "../assets/Static/usr1.jpeg";
import usr2 from "../assets/Static/usr2.jpeg";
import usr3 from "../assets/Static/usr3.jpeg";
import usr4 from "../assets/Static/usr4.jpeg";
import usr5 from "../assets/Static/usr5.jpeg";
import usr6 from "../assets/Static/usr6.jpeg";
export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const userReviews = [
    { name: "Micheal Uche", image: usr1, text: "" },
    { name: "Emmanuel Jude", image: usr2, text: "" },
    { name: "Armstrong Peters", image: usr3, text: "" },
    { name: "Jachimma Clinton", image: usr4, text: "" },
    { name: "Chinaza Uzoma", image: usr5, text: "" },
    { name: "Charles Destiny", image: usr6, text: "" },
  ];

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {userReviews.map((review, key) => (
          <div key={key} className="review-card">
            <img src={review.image} alt="image.png" />
            <p>{review.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
