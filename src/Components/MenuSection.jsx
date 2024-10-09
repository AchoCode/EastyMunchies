import React from "react";
import { MenuCard } from "./MenuCard";
import BurgerFries from "../assets/Static/BurgersFries.jpg";
import Drinks from "../assets/Static/Drinks.jpg";
import pizza from "../assets/Static/pizza.jpg";
import friedChicken from "../assets/Static/fried-chicken.jpg";
import friedRice from "../assets/Static/fried-rice.jpg";
import popcorn from "../assets/Static/popcorn.jpg";
import sharwama from "../assets/Static/sharwama.jpg";
import localDishes from "../assets/Static/local-dishes.jpg";
import { Button } from "./Button";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
export const MenuSection = () => {
  const menuItems = [
    {
      name: "Burgers and fries",
      image: BurgerFries,
    },
    {
      name: "Exotic drinks",
      image: Drinks,
    },
    {
      name: "Pizza",
      image: pizza,
    },
    {
      name: "Fried/barbeque chicken",
      image: friedChicken,
    },
    {
      name: "Fried rice",
      image: friedRice,
    },
    {
      name: "Popcorn",
      image: popcorn,
    },
    {
      name: "Beef/chicken sharwama",
      image: sharwama,
    },
    {
      name: "Local dishes",
      image: localDishes,
    },
    {
      name: "And many more....",
      image: null,
    },
  ];

  return (
    <div className="menu-section">
      <div className="heading">
        <h2>Easty Menu</h2>
      </div>
      <div className="menu-items-grid">
        {menuItems.map((item, key) => (
          <MenuCard key={key} name={item.name} image={item.image} />
        ))}
      </div>
      <Button link="/menu" title="Explore Our Menu" />
    </div>
  );
};
