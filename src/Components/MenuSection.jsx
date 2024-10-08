import React from "react";
import { MenuCard } from "./MenuCard";
import BurgerFries from "../assets/Static/BurgersFries.jpg";
import Drinks from "../assets/Static/Drinks.jpg";
import pizza from "../assets/Static/pizza.jpg";
import friedChicken from "../assets/Static/fried-chicken.jpg";
import friedRice from "../assets/Static/fried-rice.jpg";
import popcorn from "../assets/Static/popcorn.jpg";
import sharwama from "../assets/Static/sharwama.jpg";

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
      image: null,
    },
    {
      name: "And many more....",
      image: null,
    },
  ];

  return (
    <div className="menu-section">
      {menuItems.map((item, key) => (
        <MenuCard key={key} name={item.name} image={item.image} />
      ))}
    </div>
  );
};
