import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function About({}: Props) {
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
          className='flex flex-col relative h-screen text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl'>ABOUT</h3>
          <motion.img
              initial={{
                  x: -200,
                  opacity:0.7
              }}
              whileInView={{
                  x: 0,
                  opacity:0.7
              }}
              transition={{
                  duration: .5
              }}
              whileHover={{
                  opacity: 0.8,
              }}
              viewport={{once: true}}
              src="https://media.licdn.com/dms/image/D4E03AQG5HCuFjT2WGA/profile-displayphoto-shrink_800_800/0/1671209267323?e=1678320000&v=beta&t=q8jeapd4MQa1NtdgO1Pz2adnc0-EsFILgMqGLNPVs6w"
              className='relative -mb-50 md:mb-0 flex-shrink-0 w-72 h-72 rounded-full object-cover md:rounded-lg md:w-62 h-62 xl:w-[500px] xl:h-[600px] border border-[#F7AB0A] bottom-2'
          />
          <motion.div
              viewport={{ once: true}}
              className='space-y-10 px-0 md:p-10'>
              <h4 className='text-4xl font-semibold uppercase relative bottom-10'><span className='text-[#ffcd61]'>About</span> Me</h4>
              <p className='text-base relative bottom-10'>
                  I am a skilled and dedicated Web developer that is self-taught and self-assured. I have a diverse range of skills, traits, and abilities cultivated through the years and guarantee my success in this line of work. I enjoy developing e-commerce websites, online portfolios, and statistics pages and helping others with their website development work. Working in a team, brainstorming new ideas, and cooperating with other developers are things I enjoy doing. Many of the web development projects Ive worked on, have been built using React.js, Next.js, and Typescript. I spend time learning new topics outside of my academic career.
              </p>
              <p className='text-base relative bottom-10'>
                  Around 2020, I began learning to code. Im a talented designer and developer who wants to help small businesses and underserved areas realize their ambitions. I provide both design and development services for websites and online applications! Although I mostly used the MERN stack, I am continuously investigating other technologies and frameworks that interest me. Id love to hear from you if you want to expand your team with a developer!
            </p>
          </motion.div>
      </motion.div>
  )
}

export default About