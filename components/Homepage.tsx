import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import Backgroundcircle from './Backgroundcircle'
import Link from 'next/link'
import { motion } from 'framer-motion';


type Props = {}

function Homepage({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hola, I'm Nazish Ahmed AKA Frezz1ck", "Front-end Web Developer.", "Web Designer.", "Pro gamer too lol!"],
        loop: true,
        delaySpeed: 2000
    })
  return (
      <section className='h-screen flex flex-col space-y-8 justify-center text-center overflow-hidden'>
          <Backgroundcircle />
          <div className='relative bottom-20'>
              <motion.img
                  initial={{
                      scale: 1,
                  }}
                  whileHover={{
                      scale:1.01
                  }}
                  src="https://i.pinimg.com/originals/68/a0/53/68a05334870c857cc65f008d7849e69c.jpg" className='relative rounded-full h-52 w-52 mx-auto object-cover border border-[#F7AB0A] bottom-5' />
          <div className='z-20'>
              <h2 className='text-sm text-gray-500 pb-2 tracking-[12px]'>SOFTWARE DEVELOPER</h2>
        <h1 className='text-1.5xl lg:text-2xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
              </h1>
              <div className='pt-5'>
                  <Link href="#about">
                  <button className='heroButton'>About</button>
                  </Link>
                  <Link href="#experience">
                  <button className='heroButton'>Experience</button>
                  </Link>
                  <Link href="#skills">
                  <button className='heroButton'>Skills</button>
                      </Link>
                      <Link href="#contact">
                  <button className='heroButton'>Contact</button>
                  </Link>
              </div>
          </div>
          </div>
    </section> 
  )
}

export default Homepage