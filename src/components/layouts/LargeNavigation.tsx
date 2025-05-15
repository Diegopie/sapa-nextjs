"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      toggleMobileMenu();
      menuButtonRef.current?.focus();
    }
  };


  return (
    <div onKeyDown={handleKeyDown}>
      {/* Mobile menu button */}
      <div
        className={`md:hidden flex justify-end pt-4 ${
          isMobileMenuOpen && "bg-ug-green-three"
        }`}
      >
        <button
          ref={menuButtonRef}
          onClick={toggleMobileMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-ug-green-two hover:text-ug-green-four"
          aria-expanded={isMobileMenuOpen}
          aria-label="Open menu"
        >
          <span className="sr-only">Open main menu</span>
          {!isMobileMenuOpen ? (
            <svg
              className="block h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="block h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden relative z-10 w-full top-0">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-ug-green-three shadow-lg">
            <li>
              <Link
                href="#appointments"
                className="hover:underline focus:underline uppercase text-ug-green-one block px-3 py-2 font-interstate text-sm font-semibold tracking-wider"
              >
                APPOINTMENTS
              </Link>
            </li>
            <li>
              <Link
                href="#medical-card-info"
                className="hover:underline focus:underline uppercase text-ug-green-one block px-3 py-2 font-interstate text-sm font-semibold tracking-wider"
              >
                MEDICAL CARD INFO
              </Link>
            </li>
            <li>
              <Link
                href="#faqs"
                className="hover:underline focus:underline uppercase text-ug-green-one block px-3 py-2 font-interstate text-sm font-semibold tracking-wider"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="#pharmacies"
                className="hover:underline focus:underline uppercase text-ug-green-one block px-3 py-2 font-interstate text-sm font-semibold tracking-wider"
              >
                PHARMACIES
              </Link>
            </li>
            <li> 
              <Link
                href="#about"
                className="hover:underline focus:underline uppercase text-ug-green-one block px-3 py-2 font-interstate text-sm font-semibold tracking-wider"
                
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default function LargeNavigation() {
  return (
    <nav className="relative w-full">
      {/* Background image with green overlay */}

      {/* Nav content */}
      <div className="relative mx-auto lg:px-8 h-112">
        <div className="absolute -z-10 inset-0 w-full h-full">
          <Image
            src="/images/TopHeaderImage.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <ul className="hidden md:flex justify-center md:space-x-20 pt-8">
          <li>
            <Link
              href="#appointments"
              className="text-ug-green-two hover:underline focus:underline uppercase font-interstate text-sm tracking-wider"
            >
              APPOINTMENTS
            </Link>
          </li>
          <li>
            <Link
              href="#medical-card-info"
              className="text-ug-green-two hover:underline focus:underline uppercase font-interstate text-sm tracking-wider"
            >
              MEDICAL CARD INFO
            </Link>
          </li>
          <li>
            <Link
              href="#faqs"
              className="text-ug-green-two hover:underline focus:underline uppercase font-interstate text-sm tracking-wider"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              href="#pharmacies"
              className="text-ug-green-two hover:underline focus:underline uppercase font-interstate text-sm tracking-wider"
            >
              PHARMACIES
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-ug-green-two hover:underline focus:underline uppercase font-interstate text-sm tracking-wider"
            >
              ABOUT
            </Link>
          </li>
        </ul>

        <MobileMenu />

        <Link href="/" className="absolute -bottom-8 left-0 right-0">
          <div className="flex flex-col items-center">
            <Image
              src="/images/UtahGrownLogo-Green.png"
              alt="Utah Grown Logo"
              width={400}
              height={280}
              className="object-contain w-sm md:w-xl transition-width duration-300"
              priority
            />
          </div>
        </Link>
      </div>
      <div className="h-10 bg-[#215a2c]"></div>
    </nav>
  );
}
