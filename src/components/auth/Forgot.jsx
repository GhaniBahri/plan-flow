import React from 'react'
import logo from '../../assets/images/PF-full.svg'

function Forgot({switcher}) {
  return (
    <form className='w-full lg:w-1/3 flex flex-col justify-between items-center rounded-md bg-white overflow-hidden pb-10 z-10'>
            <div className='w-full flex items-center justify-center p-8 py-6 bg-brandiesBlue'>
                <img src={logo} alt="PF " width={150} height={100} className='' />
            </div>
            <p className='font-semibold text-center text-xl py-4 text-slate-500'>Login now and start planning</p>
            <div className='w-full flex flex-col items-center justify-start px-14  py-1 text-left text-lg font-normal text-slate-500'>
              <label className='w-full ' htmlFor="email">Email</label>
              <input className='w-full h-14 px-1 rounded border border-slate-400 bg-white outline-none focus:border-brandiesBlue ' type="email" id="email" name="userEmail" />
            </div>
            <button type="submit" className='bg-brandiesBlue text-white text-lg font-normal rounded-md w-1/3  h-14 my-6'>Log in</button>
            <p className='font-light text-lg text-slate-400 text-left w-full px-14'>Don't have an account ? {" "} 
              <button type='button' className='text-brandiesBlue font-medium' onClick={()=> switcher('register')}> Sign up</button>
            </p>
        </form>

  )
}

export default Forgot