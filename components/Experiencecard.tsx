import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function Experiencecard({}: Props) {
  return (
      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[980px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden'>
          <motion.img
              initial={{
                  y: -100,
                  opacity:0
              }}
              transition={{ duration: .7 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{once: true}}
              src="https://sofi.gg/_next/image?url=https%3A%2F%2Fapi.sofi.gg%2Fart%2Fimage%2F634e71bfe689632fac32778c.png&w=640&q=75"
          className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' alt='SOFI'
          />
          <div className='px-0 md:px-10'>
              <h4 className='text-4xl font-light'>Front-end developer</h4>
              <p className='font-bold text-2xl mt-1'>SOFI</p>
              <p className='uppercase py-5 text-gray-300'>Started work at 13-01-2022 - PART TIME</p>
              <ul className='list-disc space-y-4 ml-5 text-lg'>
                  <li>Designed the Sofi page.</li>
                  <li>Built a stats page for sofi using Next.js.</li>
                  <li>Worked as a web developer with co-workers.</li>
                  <li>Lorem ipsum dolor sit amet consectetur..</li>
              </ul>
          </div>
    </article>
  )
}

export default Experiencecard