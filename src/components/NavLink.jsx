import React from "react";
import { Link } from "react-scroll";

function NavLink({ screen, link, name, handleClick }) {
  return screen ? (
    <li className="mx-4 hover:text-[#64ffda] duration-300">
      <Link to={link} smooth={true} duration={500}>
        {name}
      </Link>
    </li>
  ) : (
    <li className="my-6 text-4xl hover:text-[#64ffda] duration-300">
      <Link onClick={handleClick} to={link} smooth={true} duration={500}>
      {name}
      </Link>
    </li>
  );
}

export default NavLink;
