import React from 'react'
import logo from '../assets/images/PF-full.svg'

function Auth() {
  return (
    <main className='fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-white'>
      <div className='fixed left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,0.15)]'></div>
        <form className='w-full lg:w-1/3 flex flex-col justify-between items-center rounded-md bg-white'>
            <div className='w-full flex items-center justify-center p-3'>
                <img src={logo} alt="PF " className='' />
            </div>
            <div className='w-full flex flex-col items-center justify-start'>
              <label htmlFor=""></label>
              <input type="text" />
            </div>
            <div className='w-full flex flex-col items-center justify-start'>
              <label htmlFor=""></label>
              <input type="text" />
            </div>
        </form>
    </main>         
  )
}

export default Auth