"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative w-full">
      {/* Background image with green overlay */}
      
      {/* Nav content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute -z-10 inset-0 w-full h-full">
        <Image
          src="/images/TopHeaderImage.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
        <div className="hidden md:flex justify-center space-x-12 pt-5">
          <Link
            href="/appointments"
            className="text-ug-green-two hover:underline focus:underline font-interstate text-sm tracking-wider"
          >
            APPOINTMENTS
          </Link>
          <Link
            href="/medical-card-info"
            className="text-ug-green-two hover:underline focus:underline font-interstate text-sm tracking-wider"
          >
            MEDICAL CARD INFO
          </Link>
          <Link
            href="/faqs"
            className="text-ug-green-two hover:underline focus:underline font-interstate text-sm tracking-wider"
          >
            FAQs
          </Link>
          <Link
            href="/pharmacies"
            className="text-ug-green-two hover:underline focus:underline font-interstate text-sm tracking-wider"
          >
            PHARMACIES
          </Link>
          <Link
            href="/about"
            className="text-ug-green-two hover:underline focus:underline font-interstate text-sm tracking-wider"
          >
            ABOUT
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex justify-end pt-4">
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-200"
            aria-expanded={isMobileMenuOpen}
            aria-label="Open menu"
          >
            <span className="sr-only">Open main menu</span>
            {!isMobileMenuOpen ? (
              <svg
                className="block h-6 w-6"
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
                className="block h-6 w-6"
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
        
        <div className="flex justify-center py-6">
          <Link href="/">
            <div className="flex flex-col items-center">
              <Image
                src="/images/UtahGrownLogo-Green@2x.png"
                alt="Utah Grown Logo"
                width={350}
                height={175}
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Utah's Cannabis Community text */}
        
      </div>
      
      <div className="h-12 bg-[#215a2c]"></div>
      <div className="text-center pb-6">
          <p className="font-interstate text-ug-green-two text-lg">
            Utah&apos;s Cannabis Community
          </p>
        </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden relative z-20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-ug-green-three shadow-lg">
            <Link
              href="/appointments"
              className="hover:underline focus:underline text-ug-green-one block px-3 py-2 font-interstate text-sm font-semibold tracking-wider"
            >
              APPOINTMENTS
            </Link>
            <Link
              href="/medical-card-info"
              className="hover:underline focus:underline text-ug-green-one block px-3 py-2 font-interstate text-sm font-semibold tracking-wider"
            >
              MEDICAL CARD INFO
            </Link>
            <Link
              href="/faqs"
              className="hover:underline focus:underline text-ug-green-one block px-3 py-2 font-interstate text-sm font-semibold tracking-wider"
            >
              FAQs
            </Link>
            <Link
              href="/pharmacies"
              className="hover:underline focus:underline text-ug-green-one block px-3 py-2 font-interstate text-sm font-semibold tracking-wider"
            >
              PHARMACIES
            </Link>
            <Link
              href="/about"
              className="hover:underline focus:underline text-ug-green-one block px-3 py-2 font-interstate text-sm font-semibold tracking-wider"
            >
              ABOUT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
