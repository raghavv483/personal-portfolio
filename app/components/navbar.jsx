// @flow strict
"use client"
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent relative z-50">
      <div className="flex items-center justify-between py-5 px-4">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-3xl font-bold">
            RK
          </Link>
        </div>

        {/* Hamburger Menu Button - Made more visible */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center p-2 w-12 h-12 text-white bg-gray-800/50 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white border border-gray-600"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger Icon */}
          <svg
            className={`${isOpen ? 'hidden' : 'block'} h-7 w-7`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {/* Close Icon */}
          <svg
            className={`${isOpen ? 'block' : 'hidden'} h-7 w-7`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:flex-row md:space-x-1 md:items-center">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700`}>
        <ul className="px-4 py-2 space-y-1">
          <li>
            <Link
              className="block px-4 py-3 text-white hover:bg-gray-800 rounded-md transition-colors duration-200"
              href="/#about"
              onClick={() => setIsOpen(false)}
            >
              <div className="text-sm">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-3 text-white hover:bg-gray-800 rounded-md transition-colors duration-200"
              href="/#experience"
              onClick={() => setIsOpen(false)}
            >
              <div className="text-sm">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-3 text-white hover:bg-gray-800 rounded-md transition-colors duration-200"
              href="/#skills"
              onClick={() => setIsOpen(false)}
            >
              <div className="text-sm">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-3 text-white hover:bg-gray-800 rounded-md transition-colors duration-200"
              href="/#education"
              onClick={() => setIsOpen(false)}
            >
              <div className="text-sm">EDUCATION</div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-3 text-white hover:bg-gray-800 rounded-md transition-colors duration-200"
              href="/#projects"
              onClick={() => setIsOpen(false)}
            >
              <div className="text-sm">PROJECTS</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;