// src/components/IconContainer.jsx

import Image from "next/image";
import React from "react";

// Sample icons from react-icons (you can use any icon library or custom icons)
// import { FaBeer, FaCoffee, FaApple } from "react-icons/fa";

const IconContainer = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center justify-around space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
        <div className="flex flex-col items-center">
          <Image
            src={"/images/Logo_Black.png"}
            alt="AKC Logo"
            width={140}
            height={80}
          />
          <span className="font-semibold text-black sm:text-xl/relaxed">
            Our Commitment
          </span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/images/AKCLogo.png"}
            alt="AKC Logo"
            width={140}
            height={80}
          />
          <span className="font-semibold text-black sm:text-xl/relaxed">
            Your Advantage
          </span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/images/Logo_Black.png"}
            alt="AKC Logo"
            width={140}
            height={80}
          />
          <span className="font-semibold text-black sm:text-xl/relaxed">
            Shared Vision
          </span>
        </div>
      </div>
    </div>
  );
};

export default IconContainer;
