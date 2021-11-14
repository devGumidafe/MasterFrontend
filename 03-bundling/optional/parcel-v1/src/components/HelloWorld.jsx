import React from "react";
import logo from "../images/react.svg";
import style from "../css/style.css";

export const HelloWorld = () => {
  return (
    <div className="container">
      <h1 className="title">Hello Webpack React</h1>
      <img className="logo" src={logo} />
    </div>
  );
};
