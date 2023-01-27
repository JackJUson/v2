import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-[50vh] min-h-[600px] bg-[#0a192f] flex flex-col justify-center items-center 
      p-4 text-[#8892b0] text-center"
    >
      <div className="h-full flex flex-col justify-center items-center">
        <h3 className="text-[#64ffda] tracking-wider font-bold">
          What's Next?
        </h3>
        <h1 className="text-6xl text-gray-300 block font-bold my-6">
          Get In Touch
        </h1>
        <p className="max-w-[600px]">
          I am currently looking for new opportunities so my inbox is always
          open. Whether you have a question or just want to say hi, please send
          me a message and I'll get back to you!
        </p>
        <a href="mailto:jackson.w.jung@gmail.com" target="_blank">
          <button
            className="border-[#ccd6f6] text-[#ccd6f6] group border-2 px-6 py-3 my-11 flex items-center rounded
          hover:bg-[#64ffda] hover:bg-opacity-40 hover:border-[#64ffda] hover:text-white duration-300"
          >
            Say Hello
          </button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
