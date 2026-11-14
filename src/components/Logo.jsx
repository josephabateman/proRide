import React from "react";
import logo from "../static/images/logo.png";

// ProRide "Cycling for Schools" logo (transparent PNG, 588x145 so it stays
// sharp on high-resolution screens).
function Logo({ className = "", height = 56 }) {
  return (
    <img
      className={className}
      src={logo}
      height={height}
      width={Math.round((height * 588) / 145)}
      alt="ProRide — Cycle Coaching for Schools"
    />
  );
}

export default Logo;
