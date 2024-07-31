"use client";

import Link from "next/link";
import React, { useState } from "react";
import { navItems } from "../constants";

const NavTab: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  href,
  ...props
}) => {
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = (href ?? "").replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link
      href={href ?? "#"}
      className="block w-max rounded-full px-4 py-2 font-bold text-altTextColor transition-colors hover:bg-primary hover:text-white"
      onClick={smoothScroll}
      {...props}
    >
      {children}
    </Link>
  );
};

const FloatingNavbar = () => {
  return (
    <nav className="fixed bottom-4 left-1/2 z-30 hidden -translate-x-1/2 transform rounded-full border-2 border-gray-700 bg-[#F4F6F8] px-2 py-[10px] shadow-[2.16px_4.32px_0_#12141d] md:flex">
      <ul className="flex w-full flex-1 items-center justify-between text-xs sm:text-sm md:text-base">
        {navItems.map(({ name, url }) => (
          <li className="" key={name}>
            <NavTab href={url}>{name}</NavTab>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FloatingNavbar;
