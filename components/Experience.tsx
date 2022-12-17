import React from 'react'
import { motion } from 'framer-motion';
import Experiencecard from './Experiencecard';
import Experiencecardtwo from './Experiencecardtwo';
import Experiencecardthree from './Experiencecardthree';

type Props = {}

function Experience({}: Props) {
  return (
      <motion.div
          initial={{
              opacity:0
          }}
          whileInView={{
              opacity:1
          }}
          transition={{
              duration:.6
          }}
          className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl'>EXPERIENCE</h3>
          <div className='relative w-full flex space-x-5 overflow-x-scroll p-10 snap-x-axis snap-mandatory top-5'>
              <Experiencecard />
              <Experiencecardtwo/>
              <Experiencecardthree/>
          </div>
    </motion.div>
  )
}

export default Experience