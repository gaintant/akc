import * as React from "react";

const LinkedIn: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={58}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="#36BBFC"
        d="M.1 27.849c0 14.912 12.088 27 27 27s27-12.088 27-27-12.088-27-27-27-27 12.088-27 27Z"
      />
      <path
        stroke="#374151"
        strokeWidth={1.35}
        d="M27.1 54.174C12.561 54.174.775 42.388.775 27.849c0-14.54 11.786-26.325 26.325-26.325S53.425 13.31 53.425 27.849 41.64 54.174 27.1 54.174Z"
      />
    </g>
    <path
      fill="#fff"
      d="M19.675 41.349h-5.737V23.292h5.737V41.35ZM16.806 20.76c-1.856 0-3.206-1.35-3.206-3.206 0-1.856 1.519-3.206 3.206-3.206 1.857 0 3.207 1.35 3.207 3.206 0 1.856-1.35 3.206-3.207 3.206ZM40.6 41.35h-5.737V31.56c0-2.869-1.182-3.712-2.87-3.712-1.687 0-3.374 1.35-3.374 3.88v9.62H22.88V23.292h5.4v2.532c.507-1.182 2.532-3.038 5.4-3.038 3.207 0 6.582 1.856 6.582 7.425V41.35h.337Z"
    />
    <defs>
      <filter
        id="a"
        width={55.296}
        height={56.592}
        x={0.1}
        y={0.849}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={1.296} dy={2.592} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.0705882 0 0 0 0 0.0784314 0 0 0 0 0.113725 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_621_2476"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_621_2476"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default LinkedIn;
