import React, {useState} from 'react'
import logo from '../../assets/images/PF-full.svg'
import { LuEye, LuEyeOff } from "react-icons/lu";
import axios from 'axios';

function Register({switcher}) {
    const [showPass, setShowPass] = useState(false)
    const [data, setData] = useState({fullName:'', email:'', password:''})
    const showPassword = (e)=>{
        e.preventDefault()
        setShowPass(!showPass)
      }
    const register = async (e) => {
      console.log('before')
      e.preventDefault()
      console.log('submiiing')
      const config = {
        url:'http://localhost:8000/register',
        method: 'post',
        data: {
          fullName:'',
          email:'',
          password:''
        }
      }
      const response = await axios.request(config)
      console.log(response)
    }
  return (
    <form method='POST' className='w-full lg:w-1/3 flex flex-col justify-between items-center rounded-md bg-white overflow-hidden pb-10 z-10'>
            <div className='w-full flex items-center justify-center p-8 py-6 bg-brandiesBlue'>
                <img src={logo} alt="PF " width={150} height={100} className='' />
            </div>
            <p className='font-semibold text-center text-xl py-4 text-slate-500'>Welcome to PlanFlow</p>
            <div className='w-full flex flex-col items-center justify-start px-14  py-1 text-left text-lg font-normal text-slate-500'>
                <label className='w-full ' htmlFor="name">Full Name</label>
                <input className='w-full h-14 px-1 rounded border border-slate-400 bg-white outline-none focus:border-brandiesBlue ' type="text" id="name" name="userName"
                onChange={(e)=> setData({...data, fullName: e.target.value})} value={data.fullName} />
            </div>
            <div className='w-full flex flex-col items-center justify-start px-14  py-1 text-left text-lg font-normal text-slate-500'>
                <label className='w-full ' htmlFor="email">Email</label>
                <input className='w-full h-14 px-1 rounded border border-slate-400 bg-white outline-none focus:border-brandiesBlue ' type="email" id="email" name="userEmail"
                onChange={(e)=> setData({...data, email: e.target.value})} value={data.email} />
            </div>
            <div className='w-full flex flex-col items-center justify-start px-14  py-1 text-left text-lg font-normal text-slate-500'>
              <label className='w-full ' htmlFor="password">Password</label>
              <div className='relative w-full p-0'>
                <input className='w-full h-14 px-1 rounded border border-slate-400 bg-white outline-none focus:border-brandiesBlue ' type={showPass? "text":"password"} id='password' name="userPass"
                onChange={(e)=> setData({...data, password: e.target.value})} value={data.password}/>
                <button type='button' onClick={showPassword} className='absolute h-full  top-1/2 -translate-y-1/2 right-2 w-6'>
                  { showPass?  <LuEyeOff className='text-slate-400 w-full h-full' />:<LuEye className='text-slate-400 w-full h-full' />}
                </button>
              </div></div>
              <div className='w-full flex flex-col items-center justify-start px-14  py-1 text-left text-lg font-normal text-slate-500'>
              <label className='w-full ' htmlFor="confirmpassword">Confirm Password</label>
              <div className='relative w-full p-0'>
                <input className='w-full h-14 px-1 rounded border border-slate-400 bg-white outline-none focus:border-brandiesBlue ' type={showPass? "text":"password"} id='confirmpassword' name="confirmUserPass"/>
                <button type='button' onClick={showPassword} className='absolute h-full  top-1/2 -translate-y-1/2 right-2 w-6'>
                  { showPass?  <LuEyeOff className='text-slate-400 w-full h-full' />:<LuEye className='text-slate-400 w-full h-full' />}
                </button>
              </div>
            </div>
            
            <button onClick={(e)=>register(e)} type="submit" className='bg-brandiesBlue text-white text-lg font-normal rounded-md w-1/3  h-14 my-6'>Register</button>
            <p className='font-light text-lg text-slate-400 text-left w-full px-14'>Already have an account ? {" "} 
              <button type='button' className='text-brandiesBlue font-medium' onClick={()=> switcher('login')}> Log in</button>
            </p>
        </form>
  )
}

export default Register