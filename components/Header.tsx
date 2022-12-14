import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {}

export default function Header({}: Props) {
  return (
      <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
          <motion.div
              initial={{
                  x: -500,
                  opacity: 0,
                  scale: 0.5,
              }}
              animate={{
                  x: 0,
                  opacity: 1,
                  scale:1,
              }}
              transition={{
                  duration: .6
              }}
              className='flex flex-row items-center'>
              <SocialIcon url="https://github.com/nazish-16" bgColor='transparent'
              fgColor='gray'/>
              <SocialIcon url="https://twitter.com" bgColor='transparent'
              fgColor='gray'/>
              <SocialIcon url="https://www.linkedin.com/in/nazish-ahmed-920b9a245/" bgColor='transparent'
              fgColor='gray'/>
          </motion.div>
          <motion.div
              initial={{
                  x: 500,
                  opacity: 0,
                  scale:0.5
              }}
              animate={{
                  x: 0,
                  opacity: 1,
                  scale:1,
              }}
              transition={{
                  duration: .6
              }}
            className='flex flex-row items-center text-gray-400 cursor-pointer '>
              <SocialIcon
                  className='cursor-pointer'
                  network='email'
                  fgColor='gray'
                  bgColor='transparent'
                  href=''
              />
              <p className='uppercase hidden md:inline-flex text-sm text-gray-500'>Get in touch</p>
          </motion.div>
      </header>
  )
}