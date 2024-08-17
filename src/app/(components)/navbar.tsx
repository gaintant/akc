'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SlMenu, SlArrowDown, SlArrowUp } from 'react-icons/sl';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  return (
    <div>
      {/* Navbar Toggle Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 focus:outline-none"
      >
        <SlMenu fontSize={40} />
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-1/5 h-full bg-white shadow-lg z-10 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 text-gray-600 focus:outline-none"
        >
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 w-8 h-0.5 bg-gray-600 rotate-45"></div>
            <div className="absolute inset-0 w-8 h-0.5 bg-gray-600 -rotate-45"></div>
          </div>
        </button>

        {/* Links */}
        <nav className="mt-8">
          <ul className="space-y-6">
            {[
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
            ].map((link) => (
              <li key={link.href} className="px-6">
                <div className="flex items-center justify-between text-gray-700 text-xl hover:text-red-600 cursor-pointer" onClick={() => toggleSubMenu(link.label)}>
                  <div className="flex items-center">
                    <span className="mr-3">{openSubMenu === link.label ? <SlArrowUp /> : <SlArrowDown />}</span>
                    {link.label}
                  </div>
                </div>
                {openSubMenu === link.label && (
                  <ul className="pl-10 mt-2 space-y-2 transition-all duration-300">
                    {link.subItems.map((subItem) => (
                      <li key={subItem.href}>
                        <Link href={subItem.href} className="text-gray-600 text-lg hover:text-red-500">
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
