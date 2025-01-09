import React from "react";

export const Layout = ({ ContentArea, footer, NavBar }) => {
  return (
    <div className="layout">
      <div style={{ position: "absolute", top: 30, width: "90%" }}>
        {NavBar}
      </div>
      <div>{ContentArea}</div>
      <div className="footer">{footer}</div>
    </div>
  );
};
