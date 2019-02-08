import React from "react";

export default function Button(props) {
  return (
    <button className="enter" onClick={props.buttonClick}>
      Enter If You Dare {props.name}
    </button>
  );
}
