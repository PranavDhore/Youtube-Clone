import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Base = ({children}) => {

  const [mode,setMode] = useState('');

  const handleClick = () =>{
    if(mode!=''){
      setMode('');
    }else{
      setMode('dark');
    }

  }

  return (
    <div className={mode}>
      <div onClick={handleClick} className='w-[40px] h-[40px] flex justify-center items-center cursor-pointer fixed z-30 bottom-4 right-2 bg-slate-400 text-black rounded-full'>Dark</div>
      <Navbar setMode={setMode} />  
      {children}
    </div>
  )
}

export default Base

