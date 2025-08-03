import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img
              src="media/images/logo.svg"
              className="h-8 w-auto"
              alt="Logo"
            />
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="/signup"
              className={`font-medium transition-colors duration-200 ${
                isActive("/signup")
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Signup
            </a>
            <a
              href="/about"
              className={`font-medium transition-colors duration-200 ${
                isActive("/about")
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              About
            </a>
            <a
              href="/product"
              className={`font-medium transition-colors duration-200 ${
                isActive("/product")
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Product
            </a>
            <a
              href="/pricing"
              className={`font-medium transition-colors duration-200 ${
                isActive("/pricing")
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Pricing
            </a>
            <a
              href="/support"
              className={`font-medium transition-colors duration-200 ${
                isActive("/support")
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Support
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} mt-4`}>
          <div className="flex flex-col space-y-2">
            <a
              href="/signup"
              className={`font-medium py-2 transition-colors duration-200 ${
                isActive("/signup")
                  ? "text-blue-600 bg-blue-50 px-2 rounded"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Signup
            </a>
            <a
              href="/about"
              className={`font-medium py-2 transition-colors duration-200 ${
                isActive("/about")
                  ? "text-blue-600 bg-blue-50 px-2 rounded"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              About
            </a>
            <a
              href="/product"
              className={`font-medium py-2 transition-colors duration-200 ${
                isActive("/product")
                  ? "text-blue-600 bg-blue-50 px-2 rounded"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Product
            </a>
            <a
              href="/pricing"
              className={`font-medium py-2 transition-colors duration-200 ${
                isActive("/pricing")
                  ? "text-blue-600 bg-blue-50 px-2 rounded"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Pricing
            </a>
            <a
              href="/support"
              className={`font-medium py-2 transition-colors duration-200 ${
                isActive("/support")
                  ? "text-blue-600 bg-blue-50 px-2 rounded"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
