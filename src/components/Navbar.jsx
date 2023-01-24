import React from "react";
import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Resume from "../assets/cv.pdf";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import NavLink from "./NavLink";
import SocialLink from "./SocialLink";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className="fixed w-full h-[80px] flex justify-center 
      items-center px-4 bg-[#0a192f] text-gray-300 z-50"
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
        <ul className="hidden md:flex items-center">
          <NavLink screen={true} link={"home"} name={"Home"} />
          <NavLink screen={true} link={"about"} name={"About"} />
          <NavLink screen={true} link={"work"} name={"Work"} />
          <NavLink screen={true} link={"contact"} name={"Contact"} />
          <li>
            <a
              className="border-2 border-gray-300 px-2 py-1 mx-3 flex items-center rounded
          hover:bg-[#64ffda] hover:bg-opacity-40 hover:text-white hover:border-[#64ffda] duration-300"
              href={Resume}
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer text-2xl"
      >
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
        <NavLink link={"home"} name={"Home"} handleClick={handleClick} />
        <NavLink link={"about"} name={"About"} handleClick={handleClick} />
        <NavLink link={"work"} name={"Work"} handleClick={handleClick} />
        <NavLink link={"contact"} name={"Contact"} handleClick={handleClick} />
        <li className="my-6 text-4xl hover:text-[#64ffda] duration-300">
          <a href={Resume} target="_blank">Resume</a>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[40%] left-0">
        <ul>
          <SocialLink
            name={"Linkedin"}
            link={"https://www.linkedin.com/in/jackson-jung-07837616a/"}
            background={"bg-[#0A66C2]"}
            icon={<FaLinkedin size={30} />}
          />
          <SocialLink
            name={"Github"}
            link={"https://github.com/JackJUson"}
            background={"bg-[#333333]"}
            icon={<FaGithub size={30} />}
          />
          <SocialLink
            name={"Email"}
            link={"mailto:jackson.w.jung@gmail.com"}
            background={"bg-[#6fc2b0]"}
            icon={<HiOutlineMail size={30} />}
          />
          <SocialLink
            name={"Resume"}
            link={Resume}
            background={"bg-[#565f69]"}
            icon={<BsFillPersonLinesFill size={30} />}
          />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
