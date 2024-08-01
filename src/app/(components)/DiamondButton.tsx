import React, { useMemo } from "react";

export enum ButtonVariant {
  RED,
  CYAN,
}

interface IButton extends React.ComponentProps<"button"> {
  variant: ButtonVariant;
}

const getBGColor = (variant: ButtonVariant) => {
  return variant === ButtonVariant.RED
    ? "bg-primary"
    : "bg-cyanAKC text-altTextColor";
};

// TODO: transform: skewX(-30deg)

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
    <div className="diamond-btn-bg">
      <button
        className={`relative h-[156px] w-[156px] ${bgColor} rotate-45 cursor-pointer rounded-2xl border-2 border-gray-700 px-6 py-3 text-base font-bold text-white shadow-[4px_6px_0_#12141d] transition-all duration-100 ease-out hover:translate-x-0.5 hover:translate-y-[3px] hover:shadow-[2px_3px_0_#12141d] active:translate-x-1 active:translate-y-1.5 active:shadow-[1px_1px_0_#12141d] ${className}`}
        {...props}
      >
        <div className="txt-og flex -rotate-45 flex-col items-center gap-[10px] text-base">
          {children}
        </div>
      </button>
    </div>
  );
};

export default Button;
