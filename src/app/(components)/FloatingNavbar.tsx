"use client";

import Link from "next/link";
import React from "react";

type NavItem = {
  name: string;
  url: string;
};

const navItems: Array<NavItem> = [
  {
    name: "Home",
    url: "#home",
  },
  {
    name: "How it works",
    url: "#how-it-works",
  },
  {
    name: "The Competition",
    url: "#the-competition",
  },
  {
    name: "Pre-registration",
    url: "#pre-registration",
  },
  {
    name: "Contact Us",
    url: "#contact-us",
  },
];

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
      className="text-altTextColor hover:bg-primary rounded-full font-bold transition-colors hover:text-white px-4 py-2 w-max block"
      onClick={smoothScroll}
      {...props}
    >
      {children}
    </Link>
  );
};

const FloatingNavbar = () => {
  return (
    <nav className="fixed z-30 bottom-4 left-1/2 flex -translate-x-1/2 transform rounded-full border-2 border-gray-700 bg-[#F4F6F8] px-2 py-[10px] shadow-[2.16px_4.32px_0_#12141d]">
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
