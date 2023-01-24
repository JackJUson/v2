import React from "react";
import Profile from "../assets/profile.png";

function About() {
  return (
    <div name="about" className="w-full h-[600px] bg-[#0a192f]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full flex justify-evenly text-[#8892b0]">
          <p className="w-1/2">
            <span className="text-4xl text-gray-300 block font-bold border-b-4 
            border-[#64ffda] w-[169px] mb-5">
              About Me
            </span>
            Hi there! My name is Jackson and I enjoy creating useful web
            applications that could help others and myself.
            <br />
            <br />
            My interest in{" "}
            <span className="text-[#64ffda]">web development</span> started with
            customising my own website that had a few productitivity tools such
            as a simple todo list during lockdown of 2019. Turns out just
            playing and trying different styling taught me alot about CSS
            flexbox!
            <br />
            <br />
            Today, I am enrolled in UNSW as a penultimate computer science
            student and a graduate of the notorious{" "}
            <span className="text-[#64ffda]">
              frontend simplified internship!
            </span>
            <br />
          </p>
          <div className="relative group">
            <div
              className="bg-[#64ffda] bg-opacity-30 absolute w-[300px]
            h-[300px] rounded-md group-hover:collapse z-30"
            ></div>
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
    </div>
  );
}

export default About;
