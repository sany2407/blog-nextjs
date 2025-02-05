"use client";
import { useState } from "react";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      id="navbar"
      className="bg-background/50 fixed top-0 w-full z-50 border-b border-foreground/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">Opinion Matters</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="#hero"
                className=" px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="#featured"
                className=" px-3 py-2 rounded-md text-sm font-medium"
              >
                Featured
              </Link>
              <Link
                href="#categories"
                className=" px-3 py-2 rounded-md text-sm font-medium"
              >
                Categories
              </Link>
              <Link
                href="#latest"
                className=" px-3 py-2 rounded-md text-sm font-medium"
              >
                Latest
              </Link>
              <Link
                href="#about"
                className=" px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="#popular"
                className=" px-3 py-2 rounded-md text-sm font-medium"
              >
                Popular
              </Link>
              <li className="list-none ">
                <ModeToggle />
              </li>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="hamburger-btn inline-flex items-center justify-center p-2 rounded-md  hover:bg-background/40 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="#hero"
            className=" block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            href="#featured"
            className=" block px-3 py-2 rounded-md text-base font-medium"
          >
            Featured
          </Link>
          <Link
            href="#categories"
            className=" block px-3 py-2 rounded-md text-base font-medium"
          >
            Categories
          </Link>
          <Link
            href="#latest"
            className=" block px-3 py-2 rounded-md text-base font-medium"
          >
            Latest
          </Link>
          <Link
            href="#about"
            className=" block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            href="#popular"
            className=" block px-3 py-2 rounded-md text-base font-medium"
          >
            Popular
          </Link>
          <ul className="pl-[10px]">
            <ModeToggle />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
