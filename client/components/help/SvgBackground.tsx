import React from "react";

const SvgBackground: React.FC = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <svg
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[140%] opacity-40"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#E6A700" />
            <stop offset="50%" stopColor="#FF6B35" />
            <stop offset="100%" stopColor="#E53E3E" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="80" />
          </filter>
        </defs>

        <g filter="url(#blur)">
          <ellipse cx="720" cy="120" rx="900" ry="260" fill="url(#grad)">
            <animate
              attributeName="cx"
              dur="20s"
              values="720;820;720"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              dur="25s"
              values="120;90;120"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse
            cx="420"
            cy="420"
            rx="700"
            ry="200"
            fill="#FF6B35"
            opacity="0.6"
          >
            <animate
              attributeName="cx"
              dur="22s"
              values="420;520;420"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              dur="28s"
              values="420;460;420"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
      </svg>
    </div>
  );
};

export default SvgBackground;
