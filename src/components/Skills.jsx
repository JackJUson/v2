import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node-js.png';
import FireBase from '../assets/firebase.png';
import Tailwind from '../assets/tailwind.png';
import Electron from '../assets/electron.png';

function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-grey-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p>Experience</p>
          <p>Thse are the technologies I've worked with!</p>
        </div>

        <div>
          <div>
            <img src={HTML} alt="HTML Icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills