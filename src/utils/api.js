import axios from "axios";
  
export const fetchYoutubeData = async (url) =>{

    const options = {
        method: 'GET',
        url: `https://youtube138.p.rapidapi.com/${url}/`,
        params: {hl: 'en', gl: 'US'},
        headers: {
          'X-RapidAPI-Key': '426e511a0cmshc3d8a7be642496fp1e16e3jsn04ab4f9d2605',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

 

