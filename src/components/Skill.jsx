import React from "react";

function Skill({ image, title }) {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:font-bold 
    hover:text-[#64ffda] duration-200">
      <img className="w-20 my-4 mx-auto" src={image} alt={`${title} Icon`}/>
      <p className="my-4">{title}</p>
    </div>
  );
}

export default Skill;
