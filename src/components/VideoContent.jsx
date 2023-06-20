import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MdVerified } from "react-icons/md";


const VideoContent = ({videoRelatedContent}) => {

    const navigate = useNavigate();

    

    const contentArray = videoRelatedContent.contents;
    console.log(videoRelatedContent)
  return (
    <div className='flex flex-col w-full dark:text-white'>
        {contentArray && contentArray.map((item,index)=>{
            console.log(item)
            const videoId = item.hasOwnProperty('video') && item.video.videoId; 
            const title = item.hasOwnProperty('video') && item.video.title;
            const thumbnail = item.hasOwnProperty('video') && item.video.thumbnails[0];
            const authorDetails = item.hasOwnProperty('video') && item.video.author;
            const views = item.hasOwnProperty('video') && item.video.stats['views'];
            const publishTime = item.hasOwnProperty('video') && item.video.publishedTimeText;
            
            return(
                <Link to={'/watch/' + videoId} key={index}>

                <div className='flex flex-row gap-2 mb-2' >
                        <div>
                            <img src={thumbnail.url} width={thumbnail.width} height={thumbnail.height} className={`min-w-[${thumbnail.width}px]` + ' rounded-lg'} />
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold md:line-clamp-2'>{title}</p>
                            <div className='flex font-normal text-sm text-zinc-600 dark:text-zinc-400 items-center '>
                                <Link to={`https://youtube.com${authorDetails.canonicalBaseUrl}`}>{authorDetails.title}</Link>
                                <MdVerified />
                            </div>
                            <div className='flex font-normal text-sm text-zinc-600 dark:text-zinc-400 items-center '>
                                <span>{views} views | {publishTime}</span>
                            </div>
                        </div>
                </div>
                </Link>

            )
        })}
    </div>
  )
}

export default VideoContent
