import React from "react";
import { Button } from "../utilities/Button";
import { Slider } from "../utilities/Slider";
import img1 from "../../assets/Static/bg2.jpg";
import img2 from "../../assets/Static/Drinks.jpg";
import img3 from "../../assets/Static/fastfood.jpg";
export const HomePg = () => {
  const images = [img1, img2, img3];
  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="color-ball"></div>
        <div className="hero-textbox">
          <div className="text">
            <h1>
              Enjoy the ultimate
              <br /> food experience with EpicEats
            </h1>
            <p>
              Discover a world of flavor with EpicEats. Whether you're craving
              hearty comfort food, exotic cuisines, or quick snacks, our app
              brings a wide variety of mouthwatering dishes right to your
              fingertips. Browse, choose, and indulge in your favorites while we
              take care of the rest—delivering the joy of great food straight to
              your door with ease and speed.
            </p>
          </div>

          <Button title="Order Now" link="/menu" />
        </div>

        <div className="imagebox">
          <div className="content">
            <div className="text">
              <h3>Explore Our Menu</h3>
              <p>
                Discover an extensive range of delectable options to satisfy
                every craving, customized to your liking
              </p>
            </div>

            <Button title="View Menu" link="/menu" />
          </div>
        </div>
      </section>

      <section className="about-us">
        <div className="textbox">
          <span className="spanheader">About us</span>
          <div className="text">
            <h1>
              Elevate Your Dining Experience With <span>EpicEats</span>
            </h1>
            <p>
              Indulge in a world of flavors tailored to your cravings, ensuring
              that every meal is just a few taps aways with our convenient food
              delivery app
            </p>
          </div>
          <Button title="Dive Into Our Menu" link="/menu" />
        </div>
        <Slider />
      </section>
    </div>
  );
};
