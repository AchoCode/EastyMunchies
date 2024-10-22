import React from "react";
import { HomePg } from "./Components/Pagecomponents/HomePg";
import { AboutUsPg } from "./Components/Pagecomponents/AboutUsPg";
import { MenuPg } from "./Components/Pagecomponents/MenuPg";
import { ContactUsPg } from "./Components/Pagecomponents/ContactUsPg";
import { CartPg } from "./Components/Pagecomponents/CartPg";
import { Url404 } from "./Components/Pagecomponents/Url404";
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
