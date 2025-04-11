import React, { useState } from "react";
import { X } from "lucide-react";
import { HiMenuAlt1 } from "react-icons/hi";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="relative bg-white shadow-md">
      <div className="flex justify-between items-center p-4 border-b">
        {/* Logo */}
        <div className="flex items-center space-x-14">
          <img
            src="/assets/logo-title.png"
            alt="Logo"
            className="md:w-26 md:h-10 h-5"
          />
        </div>

        {/* Botón con cruz o hamburguesa */}
        <button 
          className="md:w-10 md:h-10 w-12 h-12 flex items-center justify-center md:rounded-xl rounded-full md:p-0 p-2 md:bg-[#D4F7FF] shadow-[0px_4px_4px_0px_#00000040] md:shadow-none transition"
          onClick={toggleMenu}
        >
          <X className="h-6 w-6 text-[#2D264B] md:block hidden" />
          <HiMenuAlt1
            size={20}
            className="w-16 h-20 text-[#283B72] md:hidden"
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:hidden z-50`}
        >
          <button
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
            onClick={toggleMenu}
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
          <ul className="flex flex-col items-center mt-20 space-y-6 text-xl text-[#394A8F] font-medium">
            <li className="cursor-pointer hover:text-blue-600 transition">
              Contacto
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition">
              Sobre nosotros
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition">
              Ayuda
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;