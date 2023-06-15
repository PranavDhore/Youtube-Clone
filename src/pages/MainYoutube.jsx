import React, { useEffect, useState } from 'react'
import Base from '../hoc/Base'
import Sidebar from '../components/Sidebar'
import { fetchYoutubeData } from '../utils/api'
import VideoCard from '../components/VideoCard'

import { homeData,exploreData,moreFromYoutube,youtubeHelp } from '../utils/constants'

const MainYoutube = () => {

  const [video,setVideo] = useState([]);

  useEffect(()=>{
    
    const fetchData = async () =>{
      const res = await fetchYoutubeData("home");
      // console.log(res)
      setVideo(res.contents);
    }
    fetchData();
   
    console.log(video)

  },[])

  return (
    <Base>
      <Sidebar youtubeHelp={youtubeHelp} homeData={homeData} exploreData={exploreData} moreFromYoutube={moreFromYoutube} />
      <div className='absolute overflow-hidden  z-0 top-[7.5%] right-0 md:w-[calc(100%-80px)] xl:w-[calc(100%-240px)]'>
        <VideoCard video={video} />
      </div>
    </Base>
  )
}

export default MainYoutube
