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
              src="https://media.discordapp.net/attachments/882930814583726110/1053557242584105080/70dbf1a9-fd01-4272-b251-843cb24002f5.jpg?width=503&height=671"
              className='relative -mb-50 md:mb-0 flex-shrink-0 w-72 h-72 rounded-full object-cover md:rounded-lg md:w-62 h-62 xl:w-[500px] xl:h-[600px] border border-[#F7AB0A] bottom-2'
          />
          <motion.div
              viewport={{ once: true}}
              className='space-y-10 px-0 md:p-10'>
              <h4 className='text-4xl font-semibold uppercase relative bottom-10'><span className='text-[#ffcd61]'>Regarding</span> Me</h4>
              <p className='text-base relative bottom-10'>
                  Im a 15-year-old student and a web developer, pursuing MPC and preparing for Eamcet, Jee-mains at Sri-Chaitanya college Hyderabad. I am passionate about designing and building e-commerce, personal portfolios, statistics page websites and helping out people in their website development work. I like to work in a team and coordinate with the other devs and create something new. I have built many web development projects using React.js next.js and typescript. I dedicate my time to learning something new alongside my academics. When away from my IDE, I usually play games on my PC or will be busy reading books.
              </p>
              <p className='text-base relative bottom-10'>
                  I started to code around in 2020. I am a creative designer and developer, who aims to work with small businesses and marginalized communities to bring their passions to life. I offer both design and development services of web applications or websites! focused on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if youre looking for a developer to add to your team, Id love to hear from you!
            </p>
          </motion.div>
      </motion.div>
  )
}

export default About