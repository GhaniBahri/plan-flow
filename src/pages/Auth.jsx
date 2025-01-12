import React, { useState } from 'react'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Forgot from '../components/auth/Forgot'

function Auth() {
  const [tab, setTab] = useState('login')
  const switchTab = (selectedTab) =>{
    setTab(selectedTab)
  }
  return (
    <main className='flex justify-center items-center bg-white p-10 overflow-scroll'>
      <div className='fixed right-0 top-0 left-0 bottom-0 bg-[rgba(0,0,0,0.80)] z-0'></div>
        {tab === 'login' && <Login switcher={switchTab} /> }
        {tab === 'register' && <Register switcher={switchTab} />}
        {tab === 'forgot' && <Forgot /> }
    </main>         
  )
}

export default Auth