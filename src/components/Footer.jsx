import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[#0a192f] text-[#8892b0] text-xs">
      <div className="flex flex-col justify-center items-center py-4">
        <p className="mb-2">
          <a
            href="https://github.com/JackJUson/v2"
            target="_blank"
            className="hover:text-[#64ffda] duration-200"
          >
            Built by Jackson Jung
          </a>{" "}
          &{" "}
          <a
            href="https://github.com/bchiang7/v4"
            target="_blank"
            className="hover:text-[#64ffda] duration-200"
          >
            Designed by Brittany Chiang
          </a>
        </p>
        <p className="mb-2">&copy; Copyright 2023 | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
