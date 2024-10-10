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
import { ReviewCard } from "./ReviewCard";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const userReviews = [
    {
      name: "Micheal Uche",
      image: usr1,
      text: "EastyMunchies is hands down the best food delivery app I’ve used. The interface is simple, and the food always arrives on time, hot, and delicious. I highly recommend it for fast, reliable service every time.",
    },
    {
      name: "Emmanuel Jude",
      image: usr2,
      text: "I’ve ordered from EastyMunchies multiple times, and they never disappoint! The food is always fresh, and delivery is prompt. The app is user-friendly, making the whole process so easy. Definitely my go-to for meals.",
    },
    {
      name: "Armstrong Peters",
      image: usr3,
      text: "EastyMunchies offers a fantastic selection of meals, and I love how quickly the food arrives. The app is easy to navigate, and the customer service is excellent. It’s my top choice for food delivery now!",
    },
    {
      name: "Jachimma Clinton",
      image: usr4,
      text: "I’m so impressed with EastyMunchies! Their delivery is fast, and the meals are always top quality. The app is intuitive, making ordering a breeze. Great experience every time, with delicious food arriving just as expected.",
    },
    {
      name: "Chinaza Uzoma",
      image: usr5,
      text: "From the smooth ordering process to the timely delivery, EastyMunchies has become my favorite food delivery app. The meals are consistently tasty and arrive warm. It’s a must-have app for anyone craving great food quickly.",
    },
    {
      name: "Charles Destiny",
      image: usr6,
      text: "EastyMunchies is a game changer for food delivery! The variety of options and the speedy delivery are amazing. I love how easy it is to place orders, and the food is always fresh and well-packaged.",
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {userReviews.map((review, key) => (
          <ReviewCard
            key={key}
            name={review.name}
            image={review.image}
            text={review.text}
          />
        ))}
      </Slider>
    </div>
  );
};
