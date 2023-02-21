import React from "react";

const Button = (props) => {
  return (
    <a href={props.link} className="btn">
      {props.text}
    </a>
  );
};

export default Button;
