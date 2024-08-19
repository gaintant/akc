import React, { useMemo } from "react";

export enum ButtonVariant {
  RED,
  CYAN,
  GREEN,
}

interface IButton extends React.ComponentProps<"button"> {
  variant: ButtonVariant;
}

const getBGColor = (variant: ButtonVariant) => {
  if (variant === ButtonVariant.GREEN) {
    return "bg-green-600 text-white";
  }
  return variant === ButtonVariant.RED
    ? "bg-primary text-white"
    : "bg-cyanAKC text-altTextColor";
};

const Button: React.FC<IButton> = ({
  children,
  variant,
  className,
  ...props
}) => {
  const bgColor = useMemo(() => {
    return getBGColor(variant);
  }, [variant]);

  return (
    <button
      className={`relative w-max ${bgColor} cursor-pointer rounded-full border-2 border-gray-700 px-6 py-3 text-base font-bold shadow-[4px_6px_0_#12141d] transition-all duration-100 ease-out hover:translate-x-0.5 hover:translate-y-[3px] hover:shadow-[2px_3px_0_#12141d] active:translate-x-1 active:translate-y-1.5 active:shadow-[1px_1px_0_#12141d] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
