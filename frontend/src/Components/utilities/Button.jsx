import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
export const Button = ({
  link,
  title,
  handleOnClick = () => {},
  type = "button",
}) => {
  return (
    <div className="btn-container">
      {link ? (
        <a className="btn" href={link}>
          {title}
        </a>
      ) : (
        <button
          type={type}
          onClick={() => {
            handleOnClick;
          }}
          className="btn"
        >
          {title}
        </button>
      )}
      <FaCircleArrowUp />
    </div>
  );
};
