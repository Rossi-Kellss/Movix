
import { useState, useEffect } from 'react'

import { fetchFromApi } from '../utils/api'

const useFetch = (url) => {
    console.log(url);
    const [loading, setLoading] = useState(null);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);
       

        results();
        

    }
    , [url]);
    const results=()=>{
        fetchFromApi(url).then((res)=>{
            setLoading(false)
            setData(res);
        }).catch((err)=>setError(err))
    }

    return  {loading,data,error};



}
export default useFetch;

