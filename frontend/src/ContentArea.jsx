import React from "react";
import { HomePg } from "./Components/Pages/HomePg";
import { AboutUsPg } from "./Components/Pages/AboutUsPg";
import { MenuPg } from "./Components/Pages/MenuPg";
import { ContactUsPg } from "./Components/Pages/ContactUsPg";
import { CartPg } from "./Components/Pages/CartPg";
import { Url404 } from "./Components/Pages/Url404";
import { Routes, Route } from "react-router-dom";
export const ContentArea = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePg />} />
        <Route exact path="/menu" element={<MenuPg />} />
        <Route exact path="/about-us" element={<AboutUsPg />} />
        <Route exact path="/contact-us" element={<ContactUsPg />} />
        <Route exact path="/cart" element={<CartPg />} />
        <Route path="*" element={<Url404 />} />
      </Routes>
    </>
  );
};
