import React, { useState } from 'react'
import logo from '../assets/images/PF-full.svg'
import { LuEye, LuEyeOff } from "react-icons/lu";

function Auth() {
  const [showPass, setShowPass] = useState(false)
  const showPassword = (e)=>{
    e.preventDefault()
    setShowPass(!showPass)
  }
  return (
    <main className='fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-white'>
      <div className='fixed left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,0.80)] -z-10'></div>
        <form className='w-full lg:w-1/3 flex flex-col justify-between items-center rounded-md bg-white overflow-hidden pb-10'>
            <div className='w-full flex items-center justify-center p-8 py-6 bg-brandiesBlue'>
                <img src={logo} alt="PF " width={150} height={100} className='' />
            </div>
            <p className='font-semibold text-center text-xl py-4 text-slate-500'>Login now and start planning</p>
            <div className='w-full flex flex-col items-center justify-start px-14  py-1 text-left text-lg font-normal text-slate-500'>
              <label className='w-full ' htmlFor="email">Email</label>
              <input className='w-full h-14 px-1 rounded border border-slate-400 bg-white outline-none focus:border-brandiesBlue ' type="email" id="email" name />
            </div>
            <div className='w-full flex flex-col items-center justify-start px-14  py-1 text-left text-lg font-normal text-slate-500'>
              <label className='w-full ' htmlFor="password">Password</label>
              <div className='relative w-full p-0'>
                <input className='w-full h-14 px-1 rounded border border-slate-400 bg-white outline-none focus:border-brandiesBlue ' type={showPass? "text":"password"} id='password'/>
                <button type='button' onClick={showPassword} className='absolute h-full  top-1/2 -translate-y-1/2 right-2 w-6'>
                  { showPass?  <LuEyeOff className='text-slate-400 w-full h-full' />:<LuEye className='text-slate-400 w-full h-full' />}
                </button>
              </div>
            </div>
            <p className='font-bold text-lg text-slate-500 w-full px-14 text-left'><a href="/#">Forgot password?</a></p>
            <button type="submit" className='bg-brandiesBlue text-white text-lg font-normal rounded-md w-1/3  h-14 my-6'>Log in</button>
            <p className='font-light text-lg text-slate-400 text-left w-full px-14'>Don't have an account ? {" "} 
              <button type='button' className='text-brandiesBlue font-medium'> Sign up</button>
            </p>
        </form>
    </main>         
  )
}

export default Auth