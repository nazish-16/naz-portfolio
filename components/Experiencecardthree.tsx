import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function Experiencecardthree({}: Props) {
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
              src="https://images-ext-2.discordapp.net/external/Yo1eukVVw_M_--cn1jy9Y1Q76tpl4zeTxIMo4PIYIus/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1050805630992138361/1db1209560e97f9c97445ceb774c367e.png?width=491&height=491"
          className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' alt='SOFI'
          />
          <div className='px-0 md:px-10'>
              <h4 className='text-4xl font-light'>Front-end developer</h4>
              <p className='font-bold text-2xl mt-1'>TYZEN</p>
              <p className='uppercase py-5 text-gray-300'>Started work at 18-11-2022 - PART TIME</p>
              <ul className='list-disc space-y-4 ml-5 text-lg'>
                  <li>Worked as a web developer and a designer</li>
                   <li>Developed the TYZEN page using Typescript and Tailwind</li>
                   <li>Managed the social media accounts of Tyzen.</li>
                  <li>Hosted the website through hostinger</li>
              </ul>
          </div>
    </article>
  )
}

export default Experiencecardthree