import React from "react";
import { Link } from "react-scroll";

function NavLink({ link, linkName }) {
  return (
    <li className="mx-4 hover:text-[#8892b0] duration-300">
      <Link to={link} smooth={true} duration={500}>
        {linkName}
      </Link>
    </li>
  );
}

export default NavLink;
