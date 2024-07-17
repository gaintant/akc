// import react, { usememo } from "react";

// export enum buttonvariant {
//   red,
//   cyan,
// }

// interface ibutton extends react.componentprops<"button"> {
//   variant: buttonvariant;
// }

// const getbgcolor = (variant: buttonvariant) => {
//   return variant === buttonvariant.red
//     ? "bg-primary"
//     : "bg-cyanakc text-altbtntextcolor";
// };

// const button: react.fc<ibutton> = ({
//   children,
//   variant,
//   classname,
//   ...props
// }) => {
//   const bgcolor = usememo(() => {
//     return getbgcolor(variant);
//   }, [variant]);

//   return (
//     <div classname="relative h-[185.82px] w-[280px] mx-auto my-8">
//     <button
//       classname={`absolute inset-0 transform rotate-45 ${bgcolor} cursor-pointer rounded-2xl border-2 border-gray-700 px-6 py-3 text-base font-bold text-white shadow-[4px_6px_0_#12141d] transition-all duration-100 ease-out hover:translate-x-0.5 hover:translate-y-[3px] hover:shadow-[2px_3px_0_#12141d] active:translate-x-1 active:translate-y-1.5 active:shadow-[1px_1px_0_#12141d] ${classname}`}
//       style={{ clippath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}
//       {...props}
//     >
//       {children}
//     </button>
//     </div>
//   );
// };

// export default button;
import React from 'react';

const RhombusButton = () => {
  return (
    <div className="relative w-64 h-64 mx-auto my-8">
      <button 
        className="absolute inset-0 bg-red-600 hover:bg-red-700 shadow-lg overflow-hidden transition-colors duration-300"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-xl font-bold text-center">
            Pre-register<br />your school
            <svg 
              className="w-5 h-5 ml-1 inline-block" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </span>
        </div>
      </button>
    </div>
  );
};

export default RhombusButton;