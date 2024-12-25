import React from 'react'
import logo from '../assets/images/PF-full.svg'

function Navbar() {
  return (
    <div className="bg-brandiesBlue">
      <div className="flex flex-row justify-between items-center w-full h-20 px-32 py-8">
        <a href="/" ><img src={logo} alt="PF home" width={150} height={100} /></a>
        <button className='border border-white text-white w-28 h-12 rounded-lg text-lg text-center font-medium font-poppins'> Login</button>
      </div>
    </div>
  )
}

export default Navbar