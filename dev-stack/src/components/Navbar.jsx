import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none cursor-pointer p-1"
          >
            {isOpen ? (

              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm md:text-base">
            DS
          </div>

          <h2 className="font-bold text-base md:text-lg">
            <span className="text-gray-900">Dev</span>{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
        </div>

        <div className="hidden md:flex items-center justify-center gap-7 text-sm text-gray-600">
          <a href="#" className="text-pink-500 font-medium">
            Home
          </a>
          <a href="#technologies" className="hover:text-pink-500 transition">
            Technologies
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            Projects
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            About
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="text-xs sm:text-sm text-gray-600 hover:text-pink-500 transition cursor-pointer">
            Sign In
          </button>

          <button className="px-3 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm text-white bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 hover:opacity-90 transition cursor-pointer font-medium">
            Sign Up
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-4 space-y-3">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium text-pink-500"
          >
            Home
          </a>
          <a
            href="#technologies"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-gray-600 hover:text-pink-500 transition"
          >
            Technologies
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-gray-600 hover:text-pink-500 transition"
          >
            Projects
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-gray-600 hover:text-pink-500 transition"
          >
            About
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-gray-600 hover:text-pink-500 transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;