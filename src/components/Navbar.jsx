import React from "react";
import { FaBars, FaTime } from "react-icons/fa";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <div
      className="fixed w-full h-[80px] flex justify-between 
      items-center px-4 bg-[#0a192f] text-gray-300"
    >
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "60px" }} />
      </div>

      {/* menu */}
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div className="hidden">
        <FaBars />
      </div>

      {/* Mobile menu */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Social icons */}
      <div></div>
    </div>
  );
}

export default Navbar;
