import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain-logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div
      className="ma4 mt0"
      style={{ display: "flex", justifyContent: "flex-start" }}
    >
      <Tilt className="br2 shadow-2">
        <div className="pa3" style={{ height: "150px", display: "flex" }}>
          <img style={{ paddingTop: "5px" }} src={brain} alt="brain-logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
