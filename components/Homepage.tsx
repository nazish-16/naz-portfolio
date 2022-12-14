import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import Backgroundcircle from './Backgroundcircle'
import Link from 'next/link'

type Props = {}

function Homepage({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hola, I'm Nazish AKA Frezz1ck", "I am a Web Developer", "And a Web Designer"],
        loop: true,
        delaySpeed: 2000
    })
  return (
      <section className='h-screen flex flex-col space-y-8 justify-center text-center overflow-hidden'>
          <Backgroundcircle />
          <div className='relative bottom-20'>
          <img src="https://i.pinimg.com/736x/37/67/cc/3767ccc3563df32f9612a8f8c67e6306.jpg" className='relative rounded-full h-52 w-52 mx-auto object-cover' />
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
              </div>
          </div>
          </div>
    </section> 
  )
}

export default Homepage