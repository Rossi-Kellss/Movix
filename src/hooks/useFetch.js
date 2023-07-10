
import { useState, useEffect } from 'react'

import { fetchFromApi } from '../utils/api'

const useFetch = (url) => {
    const [loading, setLoading] = useState(null);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect((url) => {
        setLoading(true);
        setData(null);
        setError(null);

        fetchFromApi(url).then((res)=>{
            setLoading(false);
            setData(res)
        }).catch((error)=>{
            setLoading(false);
            setError(error);

        })

        return  {loading,data,error};

    }, [url]);


}
export default useFetch;

