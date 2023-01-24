import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/de311da6-1e13-4759-baa8-95744e3eacf1"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#64ffda] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            I'm currently open to new opportunities - email@email.com
          </p>
        </div>
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="mt-4 p-2 bg-[#ccd6f6]"
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>

        <button
          className="text-white border-2 duration-300 hover:bg-[#64ffda] hover:bg-opacity-40
           hover:border-[#64ffda] px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
