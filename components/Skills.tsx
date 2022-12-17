import React from 'react'
import { motion } from 'framer-motion';
import Skill from './Skill';
import Skill2 from './Skill2';
import Skill3 from './Skill3';
import Skills4 from './Skills4';
import Skill5 from './Skill5';
import Skill6 from './Skill6';
import Skill7 from './Skill7';
import Skill8 from './Skill8';
import Skill9 from './Skill9';
import Skill10 from './Skill10';
import Skill11 from './Skill11';
import Skill12 from './Skill12';
import Skill13 from './Skill13';
import Skill14 from './Skill14';
import Skill15 from './Skill15';

type Props = {}

function Skills({}: Props) {
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
      className='h-screen flex relative  flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
          <h3 className='absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
          <h3 className='absolute top-44 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for percentage-profeciency.</h3>
      <div className='grid grid-cols-4 gap-5 relative top-12'>
        <Skill/>
        <Skill2/>
        <Skill3/>
        <Skills4/>
        <Skill5/>
        <Skill6/>
        <Skill7/>
        <Skill8/>
        <Skill9/>
        <Skill10/>
        <Skill11/>
        <Skill12/>
        <Skill13/>
        <Skill14/>
        <Skill15/>
            </div>
      </motion.div>
  )
}   

export default Skills