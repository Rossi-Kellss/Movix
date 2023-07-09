import { useState, useEffect } from 'react-router-dom'

import { fetchFromApi } from '../utils/api'

export default useFetch = () => {
    const [loading, setLoading] = useState(null);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
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

