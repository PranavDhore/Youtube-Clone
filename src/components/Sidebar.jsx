import React, { useState } from 'react'

const Sidebar = ({homeData,exploreData,moreFromYoutube,youtubeHelp}) => {

//   const [active,setActive] = useState('Home');

  return (
    <div className='fixed bottom-0 flex flex-col xl:w-60 w-20 xl:overflow-scroll xl:py-1 xl:px-4 px-1 h-[92.5%] bg-black'>
       <div className='flex flex-col gap-2 text-white mb-4'>
            {homeData.map((item,index)=>{
                return (
                    <a href='#' className={`flex xl:flex-row flex-col justify-start items-center cursor-pointer py-4 px-3 rounded-lg xl:py-2 hover:bg-zinc-700 xl:gap-5 ${item.name == 'Home' && 'bg-zinc-700'}` } ><div className='text-xl'>{item.icon}</div> <span className='xl:text-[16px] text-[12px]'>{item.name}</span></a>
                )
            })}
       </div>
       <hr className='bg-zinc-700 border-y-zinc-700 mb-2 ' />

        {/* Sign In Div */}
        <div className='hidden xl:block text-white py-2 px-2 text-sm'>
            <p>Sign in to like videos, comment, and subscribe.</p>
            <a className='text-md text-blue-500 font-medium hover:bg-blue-300 cursor-pointer px-4 py-2 mt-2 border-2 rounded-full inline-block text-center border-blue-500'>Sign In</a>
        </div>
       
        <hr className='bg-zinc-700 border-y-zinc-700 mb-2 mt-2 hidden xl:block' />
        <div className='hidden xl:flex flex-col gap-2 text-white mb-4'>
            <h3 className='px-3 font-medium'>Explore</h3>
            {exploreData.map((item,index)=>{
                return (
                    <a href='#' className={`flex xl:flex-row flex-col justify-start items-center cursor-pointer py-4 px-3 rounded-lg xl:py-2 hover:bg-zinc-700 xl:gap-5 ${item.name == 'Home' && 'bg-zinc-700'}` } ><div className='text-xl'>{item.icon}</div> <span className='xl:text-[16px] text-[12px]'>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span></a>
                )
            })}
       </div>

       <hr className='bg-zinc-700 border-y-zinc-700 mb-2 mt-2 hidden xl:block' />
       <div className='hidden xl:flex flex-col gap-2 text-white mb-4'>
            <h3 className='px-3 font-medium'>More from YouTube</h3>
            {moreFromYoutube.map((item,index)=>{
                return (
                    <a href='#' className={`flex xl:flex-row flex-col justify-start items-center cursor-pointer py-4 px-3 rounded-lg xl:py-2 hover:bg-zinc-700 xl:gap-5 ${item.name == 'Home' && 'bg-zinc-700'}` } ><div className='text-xl text-red-500'>{item.icon}</div> <span className='xl:text-[16px] text-[12px]'>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span></a>
                )
            })}
       </div>

       <hr className='bg-zinc-700 border-y-zinc-700 mb-2 mt-2 hidden xl:block' />
        <div className='hidden xl:flex flex-col gap-2 text-white mb-4'>
            {youtubeHelp.map((item,index)=>{
                return (
                    <a href='#' className={`flex xl:flex-row flex-col justify-start items-center cursor-pointer py-4 px-3 rounded-lg xl:py-2 hover:bg-zinc-700 xl:gap-5 ${item.name == 'Home' && 'bg-zinc-700'}` } ><div className='text-xl'>{item.icon}</div> <span className='xl:text-[16px] text-[12px]'>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span></a>
                )
            })}
       </div>
    </div>
  )
}

export default Sidebar
