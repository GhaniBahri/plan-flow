import React from 'react'
import hero from '../assets/images/hero.svg'

function Hero() {
  return (
    <section className='flex flex-col-reverse overflow-hidden w-full lg:flex-row bg-white h-full pb-24 ' >
        <div className='w-full lg:w-1/2 flex flex-col justify-center items-start gap-20 px-24'>
            <h1 className='text-brandiesBlue font-black lg:text-7xl text-4xl w-full'>The ALL in 1 management tool</h1>
            <button className='border border-brandiesBlue text-brandiesBlue lg:w-52 w-44 lg:h-16 h-12 rounded-lg text-xl lg:text-2xl text-center font-semibold font-poppins'>Get started</button>
        </div>
        <div className='overflow-hidden relative w-1/2'>
            <img src={hero} alt="" width={100} height={500} className=' rotate-[25deg] object-cover w-full absolute -right-24 top-36 shadow-[0_0_16px_12px_rgba(0,0,0,0.15)]'/>
        </div>
    </section>
  )
}

export default Hero