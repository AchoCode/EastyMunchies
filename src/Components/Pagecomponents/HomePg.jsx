import React from "react";
import { NavBar } from "../NavBar";
import { Button } from "../Button";
export const HomePg = () => {
  return (
    <div className="page-container">
      <NavBar />
      <div className="hero-section">
        <div className="hero-text-container">
          <div className="hero-text-1">
            <h2>HELLO, NEW FRIEND!</h2>
          </div>
          <div className="hero-welcome-text">
            <h1>Welcome Back</h1>
            <h2>
              to <span>Easty Munchies</span>
            </h2>
            <h3>Quick bites, Big Flavors...</h3>
          </div>
        </div>
        <Button link="/menu" title="Browse Menu" />
      </div>
    </div>
  );
};
