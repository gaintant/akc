"use client";

import { useState } from "react";
import NavButton from "./NavButton";
import Link from "next/link";

import Cross from "./Icons/Cross";
import { navItems } from "../constants";

type INavItem = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  onClickCallback: () => void;
};

const NavItem: React.FC<INavItem> = ({
  children,
  href,
  onClickCallback,
  ...props
}) => {
  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const targetId = (href ?? "").replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClickCallback();
  };

  return (
    <Link
      href={href ?? "#"}
      className="block text-xl w-max rounded-full px-8 py-3 font-bold"
      onClick={handleItemClick}
      {...props}
    >
      {children}
    </Link>
  );
};

// TODO: add slide up animation

const BottomSheetNavBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  return (
    <div className="z-30 md:hidden">
      <NavButton
        className={`fixed bottom-6 right-6 ${isNavVisible ? "hidden" : ""}`}
        onClick={() => {
          setIsNavVisible(true);
        }}
      />
      {isNavVisible && (
        <div className="fixed bottom-0 left-0 right-0 top-0 bg-black bg-opacity-35">
          <nav className="fixed bottom-0 left-0 right-0 rounded-tl-3xl rounded-tr-3xl bg-[#f4f6f8] pt-6">
            <ul className="flex flex-col gap-2">
              {navItems.map(({ name, url }) => (
                <li className="" key={name}>
                  <NavItem
                    href={url}
                    onClickCallback={() => {
                      setIsNavVisible(false);
                    }}
                  >
                    {name}
                  </NavItem>
                </li>
              ))}
            </ul>
            <button
              className="mb-6 ml-auto mr-6 mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#E5E7EB]"
              onClick={() => {
                setIsNavVisible(false);
              }}
            >
              <Cross />
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default BottomSheetNavBar;
