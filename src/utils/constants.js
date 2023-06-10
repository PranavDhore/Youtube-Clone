import { AiFillHome,AiOutlineShopping,AiOutlineTrophy,AiOutlineSetting } from "react-icons/ai";
import { BsFillCameraReelsFill,BsLightbulb,BsHouseCheckFill,BsFlag } from "react-icons/bs";
import { MdOutlineFeedback,MdHelpOutline,MdAddCircleOutline,MdOutlineSubscriptions,MdOutlineLiveTv,MdOutlineVideoLibrary,MdOutlineHistory,MdOutlineMusicNote,MdOutlineMovieFilter } from "react-icons/md";
import { FaFire,FaRegNewspaper,FaYoutubeSquare } from "react-icons/fa";
import { SiYoutubegaming,SiYoutube,SiYoutubestudio,SiYoutubemusic } from "react-icons/si";

export const homeData = [
    {name:'Home', icon : <AiFillHome />},
    {name:'Shorts', icon : <BsFillCameraReelsFill />},
    {name:'Subscriptions', icon : <MdOutlineSubscriptions />},
    {name:'Library', icon : <MdOutlineVideoLibrary />},
    {name:'History', icon : <MdOutlineHistory />},
]

export const exploreData = [
    {name:'trending',icon:<FaFire />},
    {name:'shopping',icon:<AiOutlineShopping />},
    {name:'music',icon:<MdOutlineMusicNote />},
    {name:'movies',icon:<MdOutlineMovieFilter />},
    {name:'live',icon:<MdOutlineLiveTv />},
    {name:'gaming',icon:<SiYoutubegaming />},
    {name:'news',icon:<FaRegNewspaper />},
    {name:'sports',icon:<AiOutlineTrophy />},
    {name:'learning',icon:<BsLightbulb />},
    {name:'fahsion & beauty',icon:<BsHouseCheckFill />},
    {name:'browse channels',icon:<MdAddCircleOutline />},
]

export const moreFromYoutube = [
    {name:'YouYube Premium',icon:<SiYoutube />},
    {name:'YouYube Studio',icon:<SiYoutubestudio />},
    {name:'YouYube Music',icon:<SiYoutubemusic />},
    {name:'YouYube Kids',icon:<FaYoutubeSquare />}
]

export const youtubeHelp = [
    {name:'settings',icon:<AiOutlineSetting />},
    {name:'report history',icon:<BsFlag />},
    {name:'Yhelp',icon:<MdHelpOutline />},
    {name:'send feedback',icon:<MdOutlineFeedback />}
]