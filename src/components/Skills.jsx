import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node-js.png';
import FireBase from '../assets/firebase.png';
import Tailwind from '../assets/tailwind.png';
import TypeScript from '../assets/typescript.png';
import Skill from './Skill';

function Skills() {
  return (
    <div name='skills' className='w-full md:h-[50vh] md:min-h-[600px] bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto md:p-4 md:pb-4 p-8 pb-[50px] flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#64ffda]'>Experience</p>
          <p className='py-4'>These are the technologies I've worked with!</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pt-8'>
          <Skill image={HTML} title={'HTML'} />
          <Skill image={CSS} title={'CSS'} />
          <Skill image={JavaScript} title={'JavaScript'} />
          <Skill image={TypeScript} title={'TypeScript'} />
          <Skill image={ReactImg} title={'React'} />
          <Skill image={FireBase} title={'FireBase'} />
          <Skill image={Tailwind} title={'Tailwind'} />
          <Skill image={Node} title={'Node'} />
        </div>
      </div>
    </div>
  )
}

export default Skills