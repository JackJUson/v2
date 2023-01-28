import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node-js.png";
import FireBase from "../assets/firebase.png";
import Tailwind from "../assets/tailwind.png";
import TypeScript from "../assets/typescript.png";
import Skill from "./Skill";

function Skills() {
  return (
    <div name="skills" className="w-full h-full bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div
        className="lg:h-[50vh] min-h-[700px] max-w-[80%] w-[1000px] 
      mx-auto flex flex-col justify-center h-full px-11 py-[4rem]"
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-delay="500"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
            Experience
          </p>
          <p className="py-4">These are my favourite technologies!</p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center pt-8">
          <Skill image={HTML} title={"HTML"} />
          <Skill image={CSS} title={"CSS"} />
          <Skill image={JavaScript} title={"JavaScript"} />
          <Skill image={TypeScript} title={"TypeScript"} />
          <Skill image={ReactImg} title={"React"} />
          <Skill image={FireBase} title={"FireBase"} />
          <Skill image={Tailwind} title={"Tailwind"} />
          <Skill image={Node} title={"Node"} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
