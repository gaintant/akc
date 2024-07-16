import * as React from "react";

const Arrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m224.485 136.485-72 72a12 12 0 0 1-16.97-16.97L187.029 140H40a12 12 0 0 1 0-24h147.03l-51.515-51.515a12 12 0 0 1 16.97-16.97l72 72a12 12 0 0 1 0 16.97Z" />
  </svg> 
);
export default Arrow;
