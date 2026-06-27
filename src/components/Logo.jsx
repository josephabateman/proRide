import React from "react";

// ProRide logo rebuilt as scalable inline SVG graphics (replaces logo.png).
// Colours sampled from the original artwork.
const NAVY = "#235f82";
const SKY = "#54c0fc";
const RIDER = "#00a6e8";

function Logo({ className = "", height = 56 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 412 112"
      height={height}
      role="img"
      aria-label="Pro Ride Coaching — Cycling for Schools"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cyclist icon */}
      <g
        fill="none"
        stroke={RIDER}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* wheels */}
        <circle cx="25" cy="84" r="18" strokeWidth="7" />
        <circle cx="86" cy="84" r="18" strokeWidth="7" />
        {/* bike frame */}
        <path
          d="M25 84 L56 80 L50 57 L85 50 M56 80 L85 50 M85 50 L86 84"
          strokeWidth="5"
        />
        {/* rider leg (hip to pedal) */}
        <path d="M50 57 L57 80" strokeWidth="11" />
        {/* rider torso + arm (hand to shoulder to hip) */}
        <path d="M86 50 L64 39 L50 57" strokeWidth="13" />
      </g>
      {/* rider head */}
      <circle cx="73" cy="28" r="10.5" fill={RIDER} />

      {/* Wordmark */}
      <text
        x="118"
        y="58"
        fontFamily="'Fredoka', sans-serif"
        fontWeight="600"
        fontSize="54"
        letterSpacing="-0.5"
      >
        <tspan fill={NAVY}>Pro</tspan>
        <tspan fill={SKY}>Ride</tspan>
      </text>
      <text
        x="120"
        y="98"
        fontFamily="'Quicksand', sans-serif"
        fontWeight="600"
        fontSize="30"
        fill={NAVY}
        letterSpacing="0.5"
      >
        Cycling for Schools
      </text>
    </svg>
  );
}

export default Logo;
