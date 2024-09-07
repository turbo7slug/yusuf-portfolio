import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full py-4 px-10 bg-black fixed top-0 shadow-lg z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto relative">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          {/* Wrapper for the GIF logo */}
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <img
              src="/pyramid.png"
              alt="logo"
              className="w-30 h-30 object-cover"
            />
          </div>

          {/* Brand Name */}
          <h1 className="text-2xl font-bold text-white tracking-wide">Yusuf</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden text-white text-2xl relative z-50 ${isOpen ? 'hidden' : 'block'}`}
          onClick={toggleMenu}
        >
          <FaBars />
        </button>

        {/* Mobile Menu Close Button */}
        <button
          className={`fixed top-4 right-4 text-white text-2xl z-50 ${isOpen ? 'block' : 'hidden'}`}
          onClick={toggleMenu}
        >
          <FaTimes />
        </button>

        {/* Navigation Links for Desktop */}
        <ul className="hidden lg:flex space-x-8">
          <li>
            <a href="#features" className="text-gray-400 hover:text-white transition duration-300">
              Features
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-400 hover:text-white transition duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="text-gray-400 hover:text-white transition duration-300">
             Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-400 hover:text-white transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black bg-opacity-90 z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center justify-center h-full relative">
            <ul className="space-y-6 text-white text-lg">
              <li>
                <a href="#features" className="hover:text-purple-400 transition duration-300" onClick={toggleMenu}>
                  Features
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-400 transition duration-300" onClick={toggleMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-purple-400 transition duration-300" onClick={toggleMenu}>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-400 transition duration-300" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
