import React from 'react'
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
}

export default function Skill14({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        viewport={{once:true}}
        src="https://img.icons8.com/fluency/512/chatbot.png"
        className='rounded-full border border-gray-500 object-cover h-24 w-24 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-400 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>55%</p>
        </div>
      </div>
    </div>
  )
}