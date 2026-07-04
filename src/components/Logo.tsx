import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
  isDarkBackground?: boolean;
}

export default function Logo({ size = 40, className = "", isDarkBackground = false }: LogoProps) {
  // Determine colors based on background
  const mainColor = isDarkBackground ? "#FAF6F0" : "#2F1D1D"; // Linen vs Espresso
  const accentColor = "#C7E7E3"; // Mist (looks great on both dark and light!)
  const houseBg = isDarkBackground ? "#2F1D1D" : "#FAF6F0"; // Match background to mask the M behind

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 110 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Mountain "M" Body */}
      <path
        d="M 12 70 L 35 25 L 48 48 L 61 25 L 84 70"
        stroke={mainColor}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />

      {/* Left Snow Peak Cap */}
      <polygon
        points="35,16 29.5,27 40.5,27"
        fill={accentColor}
      />

      {/* Right Snow Peak Cap */}
      <polygon
        points="61,16 55.5,27 66.5,27"
        fill={accentColor}
      />

      {/* House attic fill (under roof) */}
      <polygon
        points="70,55 81,44 92,55"
        fill={accentColor}
      />

      {/* Roof outline */}
      <polyline
        points="65,57 81,41 97,57"
        stroke={mainColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Horizontal ceiling line */}
      <line
        x1="69"
        y1="55"
        x2="93"
        y2="55"
        stroke={mainColor}
        strokeWidth="2.5"
      />

      {/* House body box (white/bg fill, mask behind M) */}
      <rect
        x="70"
        y="55"
        width="22"
        height="18"
        fill={houseBg}
        stroke={mainColor}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* AA letters inside the house */}
      <text
        x="81"
        y="68"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="10"
        fill={mainColor}
        textAnchor="middle"
        letterSpacing="0.5"
      >
        AA
      </text>
    </svg>
  );
}
