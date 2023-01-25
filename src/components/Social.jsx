import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Resume from "../assets/cv.pdf";
import SocialLink from "./SocialLink";

function Social() {
  return (
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
  );
}

export default Social;
