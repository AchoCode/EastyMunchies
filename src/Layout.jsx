import React from "react";

export const Layout = ({ ContentArea, footer }) => {
  return (
    <div className="layout">
      <div>{ContentArea}</div>
      <div className="footer">{footer}</div>
    </div>
  );
};
