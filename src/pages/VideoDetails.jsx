import React, { useEffect, useState } from 'react'
import Base from '../hoc/Base';
import { fetchYoutubeData } from '../utils/api';
import { FaShare } from "react-icons/fa";
import {BsDownload,BsThreeDots} from "react-icons/bs";
import VideoComments from '../components/VideoComments';
import VideoContent from '../components/VideoContent';
import { useParams } from 'react-router-dom';


const VideoDetails = () => {

    const [videoDetailObj,setVideoDetailObj] = useState({});
    const [videoComments,setVideoComments] = useState({});
    const [videoRelatedContent,setVideoContent] = useState({});
    const [descOpen,setDesc] = useState(false);
    const [avatar,setAvatar] = useState([]);

    const urlParams = new URLSearchParams(window.location.search);
    const {videoId} = useParams(); 
    const params = {
        id:videoId,
        hl: 'en',
        gl: 'US'
    }
    useEffect(()=>{
        const fetchData = async () =>{
            const res = await Promise.all([fetchYoutubeData("video/details",params),fetchYoutubeData("video/comments",params),fetchYoutubeData("video/related-contents",params)]);
            setVideoDetailObj(res[0]);
            setAvatar(res[0].author['avatar']);
            setVideoComments(res[1]);
            setVideoContent(res[2]);
            console.log(res); 
            
        }
        fetchData();

    },[videoId]);
    
    
    

  return (
    <Base>
      <div className='w-full h-full flex lg:flex-row flex-col justify-start items-start dark:bg-black mt-[56px] xl:px-14 px-6'>
        <div className='flex flex-col min-h-screen h-screen lg:flex-auto p-3 lg:w-2/3 w- w-full '>
            
            <iframe
                
                className='w-full h-3/4 object-contain'
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            ></iframe>
            <h2 className='text-xl font-bold dark:text-white font-sans mt-2'>{videoDetailObj.title}</h2>
            <div className='flex flex-row flex-wrap items-center justify-between'>
                <div className='flex flex-row items-center justify-start'>
                    <img className='rounded-full w-[42px] h-[42px] me-2' alt='Loading Avatar' src={avatar.length !=0 && avatar[0].url} />
                    <div className='flex flex-col'>
                        <p className='font-bold dark:text-white m-0 '>{videoDetailObj.hasOwnProperty('author') && videoDetailObj.author.title}</p>
                        <p className='dark:text-gray-400 text-xs'>{videoDetailObj.hasOwnProperty('author') && videoDetailObj.author.stats['subscribersText']}</p>
                    </div>
                    <a className='ms-8 rounded-full font-normal bg-black text-white dark:text-black dark:bg-white p-1 px-3' href='#'>Subscribe</a>
                </div>
                <div className='flex flex-row items-center justify-end'>
                    <a className='flex flex-row items-center justify-between gap-3 me-4 font-normal rounded-full p-1 px-3 bg-slate-300 text-black dark:bg-slate-600 dark:text-white ' href='#'><FaShare />Share</a>
                    <a className='flex flex-row items-center justify-between gap-3 me-4 font-normal rounded-full p-1 px-3 bg-slate-300 text-black dark:bg-slate-600 dark:text-white ' href='#'><BsDownload />Download</a>
                    <a className='flex flex-row items-center justify-between gap-3 me-4 font-normal rounded-full p-3 px-3 bg-slate-300 text-black dark:bg-slate-600 dark:text-white ' href='#'><BsThreeDots /></a>
                    
                </div>
            </div>
            <VideoComments videoComments={videoComments} />
        </div>
        <div className='flex flex-col lg:flex-auto lg:w-1/4 w-full p-3 gap-2'>
            <VideoContent videoRelatedContent={videoRelatedContent} />
        </div>
      </div>
    </Base>
  )
}

export default VideoDetails
