import React from 'react'

// Icons Imports
import { AiOutlineMenu,AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaMicrophone,FaUserCircle,FaRegBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='w-full h-[56px] px-4 bg-gray-950 text-white flex flex-wrap justify-between items-center'>
        <div className='flex flex-row justify-start items-center'>
            <AiOutlineMenu className='text-white text-[40px] p-2 hover:bg-gray-900 cursor-pointer rounded-full' />
            <img src='./logo/youtubeLogo.png' alt='Youtube Logo' className='w-[90px] h-[20px]' />
        </div>
        <div className='grow'>
            <form>   
                <div class="relative flex justify-center items-center">
                <div class="absolute inset-y-0 right-1/4 me-10 flex items-center pl-3 ">
                    <a href='#'><svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></a>
                </div>
                <input type="search" id="search" class="block w-2/4 p-2 pl-4 text-sm text-gray-900 bg-black border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                <FaMicrophone className='text-white ml-2 text-[40px] p-2 bg-gray-900 cursor-pointer rounded-full' />
                
                </div>
            </form>
        </div>
        <div className='flex justify-end items-center gap-2'>
            <AiOutlineVideoCameraAdd className='text-white text-[40px] p-2 hover:bg-gray-900 cursor-pointer rounded-full' />
            <FaRegBell className='text-white text-[40px] p-2 hover:bg-gray-900 cursor-pointer rounded-full' />
            <FaUserCircle className='text-white text-[40px] p-2 hover:bg-gray-900 cursor-pointer rounded-full' />

        </div>
    </nav>
  )
}

export default Navbar
