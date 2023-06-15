import React from 'react'

const VideoCard = ({video}) => {
    console.log(video)
  return (
    <div className='flex gap-2 xl:mx-4 flex-wrap justify-center pt-7 mx-3'>
      {video.map((item,index)=>{
        const title = item.video.title;
        const thumbnail = item.video.thumbnails[0];
        const movingThumbnail = item.video['movingThumbnails'];
        console.log(movingThumbnail)
        return (
            <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 max-w-sm max-h-xs rounded-lg'>
                <a href='#'>
                    <img className={`rounded-t-lg`} width={thumbnail.width} height={thumbnail.height} src={thumbnail['url']} />
                </a>
                <div>
                    <p className='mb-3 font-normal'>{title}</p>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default VideoCard
