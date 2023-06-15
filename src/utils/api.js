import axios from "axios";
  
export const fetchYoutubeData = async (url) =>{

    const options = {
        method: 'GET',
        url: `${process.env.REACT_APP_YOUTUBE_API_URL}${url}/`,
        params: {hl: 'en', gl: 'US'},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API,
          'X-RapidAPI-Host': process.env.REACT_APP_YOUTUBE_HOST
        }
    };

    try {
        const response = await axios.request(options);
        
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

 

