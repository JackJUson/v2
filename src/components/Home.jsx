import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Jackson Jung
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I have a strong passion for software engineering with experience
          building responsive multiplatform web applications.
        </p>
        <div>
          {/* <button
            className="text-white group border-2 px-6 py-3 my-2 flex items-center
                  hover:bg-pink-600 hover:border-pink-600"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button> */}
          <a
            href="#_"
            class="relative inline-flex items-center justify-start inline-block
            px-6 py-4 overflow-hidden group"
          >
            <span
              class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2
             absolute left-0 top-0 bg-white opacity-[3%]"
            ></span>
            <span
              class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all 
            duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24
             bg-pink-600 opacity-100 group-hover:-translate-x-8"
            ></span>
            <span class="relative w-full text-left text-white transition-colors duration-100 ease-in-out">
              View Work
            </span>
            <span class="absolute inset-0 border-2 border-white hover:border-pink-600 duration-200 "></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
