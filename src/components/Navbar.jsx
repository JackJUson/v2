import React from "react";
import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className="fixed w-full h-[80px] flex justify-center 
      items-center px-4 bg-[#0a192f] text-gray-300"
    >
      <div className="flex w-full justify-between items-center max-w-7xl">
        <Link to="home" smooth={true} duration={500}>
          <img
            src={Logo}
            alt="Logo Image"
            style={{ width: "60px" }}
            className="cursor-pointer hover:brightness-50 duration-300"
          />
        </Link>
        {/* Main menu */}
        <ul className="hidden md:flex">
          <li className="mx-4">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="mx-4">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="mx-4">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="mx-4">
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="mx-4">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[32%] left-0">
        <ul>
          <li
            className="w-[150px] h-[60px] flex justify-between items-center ml-[-90px]
              hover:ml-[-5px] duration-300 bg-[#0A66C2] px-4"
          >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li
            className="w-[150px] h-[60px] flex justify-between items-center ml-[-90px]
              hover:ml-[-5px] duration-300 bg-[#333333] px-4"
          >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li
            className="w-[150px] h-[60px] flex justify-between items-center ml-[-90px]
              hover:ml-[-5px] duration-300 bg-[#6fc2b0] px-4"
          >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li
            className="w-[150px] h-[60px] flex justify-between items-center ml-[-90px]
              hover:ml-[-5px] duration-300 bg-[#565f69] px-4"
          >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
