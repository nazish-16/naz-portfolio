import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function Experiencecardtwo({}: Props) {
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
              src="https://media.discordapp.net/attachments/943954324608921630/1051781726797578260/New_Project.png?width=606&height=606"
          className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' alt='SOFI'
          />
          <div className='px-0 md:px-10'>
              <h4 className='text-4xl font-light'>Front-end developer</h4>
              <p className='font-bold text-2xl mt-1'>ORATOR</p>
              <p className='uppercase py-5 text-gray-300'>Started work at 05-10-2022 - PART TIME</p>
              <ul className='list-disc space-y-4 ml-5 text-lg'>
                  <li>Worked as a web developer and a designer</li>
                   <li>Designed and Developed the Orator page.</li>
                   <li>Managed the twitter and Linkedin account of Orator.</li>
                  <li>Built a page for the bot `orator.xyz`.</li>
              </ul>
          </div>
    </article>
  )
}

export default Experiencecardtwo