import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Home, Headphones, Info } from "lucide-react";
function NavBar() {
  return (
    <nav className="h-screen w-64 bg-gray-900 text-white flex flex-col items-center py-6 fixed left-0 top-0 shadow-lg">
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
  );
}

export default NavBar;
