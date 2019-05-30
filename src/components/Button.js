import React from "react";

export const Button = props => {
  return (
    <button onClick={props.method} className={props.className}>
      {props.buttonLabel}
    </button>
  );
};
