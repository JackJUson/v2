import React from "react";
import Project from "../assets/project.jpg";

function Work() {
  return (
    <div name="work" className="w-full sm:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#64ffda]">
            Projects I've Built
          </p>
        </div>

        {/* Container */}
        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
           Item 
          <div
            style={{ backgroundImage: `url(${Project})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
              items-center mx-auto content-div"
          >
             Hover Effects 
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>

              <div className="pt-8 text-center">
                <a href="">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white 
                  text-gray-700 text-lg font-bold"
                  >
                    Demo
                  </button>
                </a>
                <a href="">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white 
                  text-gray-700 text-lg font-bold"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>  */}

        <div className="flex max-h-[50%]">
          <div className="rounded-sm overflow-hidden md:block flex items-center w-[240%]">
            <img src={Project} alt="Project Image" className="w-full"/>
          </div>
          <div className="text-right flex flex-col justify-evenly items-end">
            <h3>Featured Project</h3>
            <h2>Project Title</h2>
            <p className="bg-[#112240] w-[110%] py-6 pr-6 pl-6 z-40 rounded-sm">
              Project Description Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. culpa debitis similique. Facilis,
              vitae sapiente? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Pariatur quas rerum minima commodi
            </p>
            <ul className="flex justify-between">
              <li>React</li>
              <li>JavaScript</li>
              <li>TailwindCss</li>
              <li>Vercel</li>
              <li>NextJs</li>
            </ul>
            <div>
              <a href="" className="mr-6">
                Github Icon
              </a>
              <a href="">Link Icon</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
