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
              src="https://images-ext-1.discordapp.net/external/tOoG1h4wr-o3-9ilqx23UrjzYxDztBY4aXrWIL3llDs/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/880765863953858601/8375721897d9e015a3ca616c6ef52e9c.png?width=702&height=702"
          className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' alt='NORI'
          />
          <div className='px-0 md:px-10'>
              <h4 className='text-4xl font-light'>Front-end developer</h4>
              <p className='font-bold text-2xl mt-1'>Gateway</p>
              <p className='uppercase py-5 text-gray-300'>Started work at 21-01-2023 - PART TIME</p>
              <ul className='list-disc space-y-4 ml-5 text-lg'>
                  <li>Worked as a web developer and a designer</li>
                   <li>Developed the Gateway page using Typescript, next.js and Tailwind</li>
                   <li>Designed the Gateway website</li>
              </ul>
          </div>
    </article>
  )
}

export default Experiencecardthree