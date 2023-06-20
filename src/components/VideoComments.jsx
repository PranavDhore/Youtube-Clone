import React from 'react'
import { MdSort } from "react-icons/md";

const VideoComments = ({videoComments}) => {
    console.log(videoComments)
  return (
    <div className='flex flex-col dark:text-white mt-6'>
       <div className='flex flex-row items-center justify-start gap-8'>
            <h2>{videoComments.hasOwnProperty('comments') && videoComments.comments.length} Comments</h2>
            <div className='flex flex-row items-center justify-start cursor-pointer'>
                <MdSort className='text-[26px]' />
                <b>Sort By</b>
            </div>
       </div>
    </div>
  )
}

export default VideoComments
