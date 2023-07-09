import axios from "axios";
const baseURL='https://api.themoviedb.org/3'
const token=import.meta.env.VITE_APP_TMDB_TOKEN;

const headers={
    accept: 'application/json',
    Authorization:`Bearer ${token}`
}

 export const fetchFromApi=async (url,params)=>{
    try {
        const {data}=await axios.get(baseURL+url,{
            headers,
            params
        })
        return data;
        
    } catch (error) {
        return error;
        
    }


}