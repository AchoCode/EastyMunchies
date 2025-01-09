import React from "react";
import { Button } from "../utilities/Button";

export const HomePg = () => {
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

      </section>
    </div>
  );
};
