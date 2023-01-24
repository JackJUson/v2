import React from "react";

function SocialLink({ name, link, background, icon }) {
  return (
    <li
      className={`w-[150px] h-[60px] flex justify-between items-center 
      ml-[-90px] hover:ml-[-5px] duration-300 ${background} px-4`}
    >
      <a
        className="flex justify-between items-center w-full text-gray-300"
        href={link}
        target="_blank"
      >
        {name} {icon}
      </a>
    </li>
  );
}

export default SocialLink;
