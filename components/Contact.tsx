import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

function Contact({}: Props) {
      const { register, handleSubmit,} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);
  return (
      <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'  id='contact'>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

        <div className='space-y-8'>
          <div className='flex flex-col space-y-7'>
              <h4 className='text-2xl font-semibold text-center'>Feel free to contact.</h4>
              <div className='flex items-center space-x-5 justify-center'>
                  <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                  <p className='text-1xl'>91+ 81795 56511</p>
              </div>
              <div className='flex items-center space-x-5 justify-center'>
                  <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                  <p className='text-1xl'>Hyderabad, Telengana</p>
              </div>
              <div className='flex items-center space-x-5 justify-center'>
                  <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                  <p className='text-1xl'>arshiahmer@gmail.com</p>
              </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                  <div className='flex space-x-2'>
                      <input {...register('name')}  
                    className='contactInput' type="text" placeholder='Name' /><input className='contactInput' type="email" placeholder='Email' {...register('email')}/>
                  </div>
                  <input {...register('subject')}
                    className='contactInput' type="text" placeholder='Subject' />
                  <textarea className='contactInput' placeholder='Message'
                    {...register('message')}
                  />
                  <button type='submit' className='border border-[#F7AB0A] py-5 px-10 rounded-md text-white font-bold text-lg transition-all hover:bg-[#f7ac0a62] hover:border-[]'>Submit</button>
              </form>
          </div>
      </div>
  )
}

export default Contact