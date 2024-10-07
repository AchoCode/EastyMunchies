import React from "react";

export const Button = (props) => {
  return (
    <div className="btn-container">
      {props.link ? (
          <a className="btn" href={props.link}>
            {props.title}
          </a>
      ) : (
          <button
            type={props.type}
            onClick={() => {
              props.handleOnClick;
            }}
            className="btn"
          >
            {props.title}
          </button>
      )}
    </div>
  );
};
