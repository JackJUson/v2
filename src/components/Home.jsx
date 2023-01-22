import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <h1>Jackson Jung</h1>
        <h2>I'm a Frontend Web Developer.</h2>
        <p>
          I have a strong passion for software engineering with 
          experience building responsive multiplatform web applications.
        </p>
        <div>
          <button>View Work <HiArrowNarrowRight /></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
