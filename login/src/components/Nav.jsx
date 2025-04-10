import React, { useState } from "react";
import { X } from "lucide-react";

const Nav = () => {
  return (
    <nav className="relative bg-white shadow-md">
      <div className="flex justify-between items-center p-4 border-b">
        {/* Logo */}
        <div className="flex items-center space-x-14">
          <img src="/assets/logo-title.png" alt="Logo" className="w-26 h-10" />
        </div>

        {/* Botón con cruz */}
        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#D4F7FF]  transition">
          <X className="h-6 w-6 text-[#2D264B]" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
