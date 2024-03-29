import React from "react";
import Profile from "../assets/profile.png";

function About() {
  return (
    <div
      name="about"
      className="w-full h-full bg-[#0a192f] flex justify-evenly items-center"
    >
      <div
        className="lg:h-[50vh] min-h-[500px] max-w-[80%] w-[1000px] mx-auto flex 
        justify-evenly text-[#8892b0] flex-col lg:flex-row items-center"
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-delay="400"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <p className="lg:w-1/2 m-11 mt-[4rem] lg:m-0">
          <span
            className="text-4xl text-gray-300 block font-bold border-b-4 
            border-[#64ffda] w-[169px] mb-5"
          >
            About Me
          </span>
          Hi there! My name is Jackson and I enjoy creating useful web
          applications that could help others and myself.
          <br />
          <br />
          My interest in{" "}
          <span className="text-[#64ffda] text-underline">
            web development
          </span>{" "}
          started with customising my own website that had a few productitivity
          tools such as a simple todo list during lockdown of 2019. Turns out
          just playing and trying different styling taught me alot about CSS
          flexbox!
          <br />
          <br />
          As of today, I am studying computer science at UNSW and a graduate of
          the notorious{" "}
          <span className="text-[#64ffda] text-underline">
            frontend simplified internship!
          </span>
          <br />
        </p>
        <div className="relative group hidden sm:block group mb-[4rem] lg:mb-0">
          <img
            src={Profile}
            alt="Profile Image"
            className="relative w-[300px] z-20 rounded-md"
          />
          <div
            className="absolute border-2 rounded-md border-[#64ffda] w-[300px]
            h-[300px] top-5 left-5 z-10 group-hover:top-3 group-hover:left-3 duration-200"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default About;
