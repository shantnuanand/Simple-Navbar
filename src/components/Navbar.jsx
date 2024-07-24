import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="w-full h-[80px] flex justify-between items-center px-4 bg-gray-900 text-white font-pop shadow-lg">
        <div>
          <h1 className="text-3xl font-bold text-white">Navbar</h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="px-4 hover:text-blue-400 transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-blue-400 transition duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 hover:text-blue-400 transition duration-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div
          onClick={handleClick}
          className="md:hidden z-10 p-2 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out"
        >
          {nav ? (
            <FaTimes className="text-2xl text-white" />
          ) : (
            <FaBars className="text-2xl text-white" />
          )}
        </div>

        {/* Mobile menu */}
      </div>
      <aside
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${
          nav ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <ul className="space-y-8">
          <li className="text-4xl hover:text-blue-400 transition duration-300">
            <Link onClick={handleClick} to="/">
              Home
            </Link>
          </li>
          <li className="text-4xl hover:text-blue-400 transition duration-300">
            <Link onClick={handleClick} to="/about">
              About
            </Link>
          </li>
          <li className="text-4xl hover:text-blue-400 transition duration-300">
            <Link onClick={handleClick} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
