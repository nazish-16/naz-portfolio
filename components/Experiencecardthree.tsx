import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function Experiencecardthree({}: Props) {
  return (
      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[980px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-90 cursor-pointer transition-opacity duration-200 overflow-hidden'>
          <motion.img
              initial={{
                  y: -100,
                  opacity:0
              }}
              transition={{ duration: .7 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{once: true}}
              src="https://media.discordapp.net/attachments/1064131944759165038/1067502804379373640/bruahdm_a_nori_sheet_illustratet_as_a_cute_girl_with_short_gree_0031ac5a-d7c7-4291-9d24-e6745c0942dd.png"
          className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' alt='NORI'
          />
          <div className='px-0 md:px-10'>
              <h4 className='text-4xl font-light'>Front-end developer</h4>
              <p className='font-bold text-2xl mt-1'>NORI</p>
              <p className='uppercase py-5 text-gray-300'>Started work at 21-01-2023 - PART TIME</p>
              <ul className='list-disc space-y-4 ml-5 text-lg'>
                  <li>Worked as a web developer and a designer</li>
                   <li>Developed the NORI page using Typescript, next.js and Tailwind</li>
                   <li>Designed the NORI website</li>
                   <li>Managed the social media accounts of NORI.</li>
              </ul>
          </div>
    </article>
  )
}

export default Experiencecardthree