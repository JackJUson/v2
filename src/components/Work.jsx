import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/projects";

function Work() {
  return (
    <div name="work" className="w-full text-[#ccd6f6] bg-[#0a192f] pt-11">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="my-11">
          <h1 className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
            Work
          </h1>
        </div>

        {projects.map((project, index) =>
          index % 2 === 0 ? (
            <div className="flex max-h-[50%] mb-[4rem]" key={index}>
              <div className="rounded-sm overflow-hidden lg:block flex items-center shadow-2xl">
                <a
                  href={project.github}
                  target="_blank"
                  className="relative group"
                >
                  <div
                    className="bg-[#0f8a6d] bg-opacity-30 absolute rounded-md 
                          group-hover:bg-opacity-0 z-30 w-full h-full duration-200"
                  ></div>
                  <img
                    src={project.image}
                    alt="Project Image"
                    className="w-full relative grayscale-[100%] group-hover:grayscale-0"
                  />
                </a>
              </div>
              <div className="text-right items-end flex flex-col justify-evenly min-w-[300px]">
                <div>
                  <h3 className="text-[#64ffda] text-sm tracking-wide mb-2">
                    Featured Project
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-3xl font-bold tracking-wide hover:text-[#64ffda] duration-200"
                  >
                    {project.title}
                  </a>
                </div>
                <p className="bg-[#112240] w-[110%] p-6 pr-9 z-40 rounded-sm shadow-xl min-w-[400px] text-[#a8b2d1]">
                  {project.description}
                </p>
                <ul className="flex justify-between text-sm w-[90%] z-40 font-thin">
                  {project.techs.map((tech) => (
                    <li>{tech}</li>
                  ))}
                </ul>
                <div className="flex">
                  <a
                    href={project.github}
                    target="_blank"
                    className="mr-6 hover:text-[#64ffda] duration-200"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="hover:text-[#64ffda] duration-200"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex max-h-[50%] mb-[4rem]" key={index}>
              <div className="text-left items-start flex flex-col justify-evenly min-w-[400px]">
                <div>
                  <h3 className="text-[#64ffda] text-sm tracking-wide mb-2">
                    Featured Project
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-3xl font-bold tracking-wide hover:text-[#64ffda] duration-200"
                  >
                    {project.title}
                  </a>
                </div>
                <p className="bg-[#112240] w-[110%] p-6 pl-9 z-40 rounded-sm shadow-xl text-[#a8b2d1]">
                  {project.description}
                </p>
                <ul className="flex justify-between text-sm w-[90%] z-40 font-thin">
                  {project.techs.map((tech) => (
                    <li>{tech}</li>
                  ))}
                </ul>
                <div className="flex">
                  <a
                    href={project.github}
                    target="_blank"
                    className="mr-6 hover:text-[#64ffda] duration-200"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="hover:text-[#64ffda] duration-200"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="rounded-sm overflow-hidden md:block flex items-center shadow-2xl">
                <a
                  href={project.github}
                  target="_blank"
                  className="relative group"
                >
                  <div
                    className="bg-[#64ffda] bg-opacity-30 absolute rounded-sm 
                          group-hover:bg-opacity-0 z-30 w-full h-full duration-200"
                  ></div>
                  <img
                    src={project.image}
                    alt="Project Image"
                    className="w-full relative grayscale-[100%] group-hover:grayscale-0"
                  />
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Work;
