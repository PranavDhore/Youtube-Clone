import React from 'react'
import { MdVerified } from "react-icons/md";
import { Link } from 'react-router-dom';


const VideoCard = ({video}) => {
    console.log(video)
  return (
    <div className='flex gap-2  flex-wrap justify-center pt-7 bg-white dark:bg-black text-black dark:text-white'>
      {video.length != 0 && video.map((item,index)=>{
        const title = item.video.title;
        const views = item.video.stats['views'];
        const publishTime = item.video.publishedTimeText;
        const thumbnail = item.video.thumbnails[0];
        const movingThumbnail = item.video['movingThumbnails'];
        const authorDetails = item.video.author;
        console.log(authorDetails)
        return (
          
            <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 max-w-sm max-h-xs rounded-lg'>
                
                <img className='w-full rounded-lg ' src={thumbnail['url']} />
                
                <div className='flex w-full mt-2'>
                    <img className='rounded-full w-[36px] h-[36px] me-2' src={authorDetails.avatar[0]['url']} />
                    <div>
                      <p className='mb-0 font-bold line-clamp-2'>{title}</p>
                      <div className='flex font-normal text-zinc-600 dark:text-zinc-400 items-center '>
                        <Link to={`https://youtube.com${authorDetails.canonicalBaseUrl}`}>{authorDetails.title}</Link>
                        <MdVerified />
                      </div>
                      <div className='flex font-normal text-zinc-600 dark:text-zinc-400 items-center '>
                        <span>{views} views | {publishTime}</span>
                      </div>
                    </div>
                   
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default VideoCard
