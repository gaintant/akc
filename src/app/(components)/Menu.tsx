"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const tabs = [
    { name: "Home", href: "/" },
    { name: "How it works", href: "/how-it-works" },
    { name: "The Competitions", href: "/competitions" },
    { name: "Pre-registration", href: "/pre-registration" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> */}
      {/* <div className="flex h-16 items-center justify-between"> */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleMenu}
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-64 transform bg-gray-800 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="mt-8">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              className={`block px-4 py-2 text-sm ${
                pathname === tab.href
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              onClick={toggleMenu}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Menu;
