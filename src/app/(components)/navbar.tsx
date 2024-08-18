'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { SlMenu, SlArrowDown, SlArrowUp, SlArrowRight } from 'react-icons/sl';
import clsx from 'clsx';
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";

const navItems = [
  {
    href: '/',
    label: 'Home',
    subItems: [
      { href: '/home/sub1', label: 'Sub Home 1' },
      { href: '/home/sub2', label: 'Sub Home 2' },
    ],
  },
  {
    href: '/competition',
    label: 'Competition',
    subItems: [
      { href: '/competition/sub1', label: 'Sub Competition 1' },
      { href: '/competition/sub2', label: 'Sub Competition 2' },
    ],
  },
  {
    href: '/organizers',
    label: 'Organizers',
    subItems: [
      { href: '/organizers/sub1', label: 'Sub Organizers 1' },
      { href: '/organizers/sub2', label: 'Sub Organizers 2' },
    ],
  },
  {
    href: '/faq',
    label: 'FAQ',
    subItems: [
      { href: '/faq/sub1', label: 'Sub FAQ 1' },
      { href: '/faq/sub2', label: 'Sub FAQ 2' },
    ],
  },
  {
    href: '/about',
    label: 'About AKC',
    subItems: [
      { href: '/about/sub1', label: 'Sub About 1' },
      { href: '/about/sub2', label: 'Sub About 2' },
    ],
  },
  {
    href: '/contact',
    label: 'Contact Us',
    subItems: [
      { href: '/contact/sub1', label: 'Sub Contact 1' },
      { href: '/contact/sub2', label: 'Sub Contact 2' },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const toggleSubMenu = (label: string) =>
    setOpenSubMenu((prev) => (prev === label ? null : label));

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubMenu(null);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      {/* Navbar Toggle Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 focus:outline-none fixed bottom-4 right-4 md:static md:bottom-auto md:right-auto z-20"
      >
        <SlMenu fontSize={40} />
      </button>

      {/* Sidebar Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-3/4 md:w-1/4 h-full bg-white shadow-lg z-10 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300`}
      >
        <div className="flex p-2 justify-between">
          <Link href="/">
            <div className="flex items-center w-2/3 ">
              <Image
                src="/images/AKCLogo_ALt.png"
                alt="Athletics Kids Cup Logo"
                height={71.16}
                width={360}
                className="h-auto w-[212px] md:w-[360px]"
              />
            </div>
          </Link>
          <button onClick={toggleMenu}>
            <RxCross2
              fontSize={35}
              style={{
                boxShadow: "2px 4px black",
                borderRadius: "50%",
                margin: 0,
                width: "100%",
                borderBlockColor: "black",
                border: "solid",
                borderWidth: "2px",
                padding: "0.4rem",
              }}
            />
          </button>
        </div>

        {/* Links */}
        <nav className="mt-8">
          <ul className="space-y-6">
            {navItems.map(({ href, label, subItems }) => (
              <li key={href} className="px-6">
                <div
                  className="flex items-center justify-between text-gray-700 text-xl hover:text-red-600 cursor-pointer"
                  onClick={() => toggleSubMenu(label)}
                >
                  <div
                    className="flex flex-row items-center space-x-2"
                    onMouseEnter={() => setHoveredItem(label)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <button
                      className={clsx(
                        'flex h-8 w-8 min-w-8 transform items-center justify-center rounded-full transition-transform duration-200',
                        !hoveredItem || hoveredItem !== label
                          ? 'bg-white text-black shadow-[2px_3px_0_#12141d]'
                          : 'bg-green-300 text-black shadow-[2px_3px_0_#12141d]'
                      )}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path
                          d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                          fill="black"
                          transform={hoveredItem === label ? "rotate(135 12 12)" : "rotate(90 12 12)"}
                        />
                      </svg>
                    </button>
                    <div
                      className={clsx(
                        !hoveredItem || hoveredItem !== label
                          ? 'text-black'
                          : 'text-green-300 font-bold'
                      )}
                    >
                      {label}
                    </div>
                  </div>
                  <span className="ml-auto">
                    {openSubMenu === label ? <SlArrowUp /> : <SlArrowDown />}
                  </span>
                </div>
                {openSubMenu === label && (
                  <ul className="pl-10 mt-2 space-y-2 transition-all duration-300">
                    {subItems.map((subItem) => (
                      <li key={subItem.href}>
                        <Link href={subItem.href} className="text-gray-600 text-lg hover:text-red-500 flex items-center">
                          <SlArrowRight className="mr-2" /> {/* Horizontal arrow icon */}
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                <hr className="mt-2 border-dashed border-gray-300" />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
