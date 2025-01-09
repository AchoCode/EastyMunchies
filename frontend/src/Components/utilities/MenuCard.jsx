import React from "react";

export const MenuCard = ({ image, name }) => {
  return (
    <div className="menu-card-body">
      {image && <img src={image} alt="product-image" />}
      <div className="product-details">
        <h3>{name}</h3>
      </div>
    </div>
  );
};
