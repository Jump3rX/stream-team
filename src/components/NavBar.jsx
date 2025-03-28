import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Home, Headphones, Info, Menu, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-100 bg-gray-900 text-white p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav
        className={`h-screen w-64 bg-gray-900 z-50 text-white flex flex-col items-center py-6 fixed top-0 left-0 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } lg:translate-x-0`}
      >
        <img src={logo} alt="logo" className="w-24 mb-6" />
        <div className="flex flex-col w-full space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-center flex items-center gap-2 justify-center ${
                isActive ? "bg-gray-700" : "hover:bg-gray-800"
              }`
            }
          >
            <Home size={20} /> Home
          </NavLink>
          <NavLink
            to="/listen"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-center flex items-center gap-2 justify-center ${
                isActive ? "bg-gray-700" : "hover:bg-gray-800"
              }`
            }
          >
            <Headphones size={20} /> Listen
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-center flex items-center gap-2 justify-center ${
                isActive ? "bg-gray-700" : "hover:bg-gray-800"
              }`
            }
          >
            <Info size={20} /> About
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
