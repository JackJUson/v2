import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node-js.png';
import FireBase from '../assets/firebase.png';
import Tailwind from '../assets/tailwind.png';
import Electron from '../assets/electron.png';
import Skill from './Skill';

function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
          <p className='py-4'>These are the technologies I've worked with!</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <Skill image={HTML} title={'HTML'} />
          <Skill image={CSS} title={'CSS'} />
          <Skill image={JavaScript} title={'JavaScript'} />
          <Skill image={ReactImg} title={'React'} />
          <Skill image={Electron} title={'Electron'} />
          <Skill image={FireBase} title={'FireBase'} />
          <Skill image={Tailwind} title={'Tailwind'} />
          <Skill image={Node} title={'Node'} />
        </div>
      </div>
    </div>
  )
}

export default Skills