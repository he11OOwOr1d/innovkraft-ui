'use client'
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-lime-50 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center py-4">
          <p className="text-lime-700 font-bold text-xl md:text-2xl tracking-wide">
            Abhyanjana
          </p>

        <nav className="hidden md:flex space-x-6">
          {["Home", "Our Story", "Products", "Contact Us"].map((item, index) => (
            <Link key={index} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-700 hover:text-lime-700 transition-colors font-medium">
              {item}
            </Link>
          ))}
        </nav>

        <button className="hidden md:block px-6 py-2 bg-lime-600 text-white rounded-lg font-semibold hover:bg-lime-700 transition-shadow shadow-lg">
          Shop Now
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center text-gray-700 hover:text-lime-700 transition-colors"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-lime-50 shadow-md">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            {["Home", "Our Story", "Products", "Contact Us"].map((item, index) => (
              <li key={index}>
                <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="block text-gray-700 hover:text-lime-700 font-medium transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="py-4 px-6">
            <button className="w-full px-6 py-2 bg-lime-600 text-white rounded-lg font-semibold hover:bg-lime-700 transition-shadow shadow-lg">
              Shop Now
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
