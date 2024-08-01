import React from "react";
import NavIcon from "./Icons/NavIcon";

const NavButton: React.FC<React.ComponentProps<"button">> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={`w-max cursor-pointer rounded-full border-2 border-gray-700 bg-primary p-4 text-base font-bold shadow-[4px_6px_0_#12141d] transition-all duration-100 ease-out hover:translate-x-0.5 hover:translate-y-[3px] hover:shadow-[2px_3px_0_#12141d] active:translate-x-1 active:translate-y-1.5 active:shadow-[1px_1px_0_#12141d] ${className}`}
      {...props}
    >
      <NavIcon />
    </button>
  );
};

export default NavButton;
