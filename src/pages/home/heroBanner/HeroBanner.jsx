import{ React,  useState }from 'react'
import "./style.scss"
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch'

const HeroBanner = () => {
    const data=useFetch("/movie/upcoming");
    console.log(data);

    const [query,setQuery]=useState('');
    const navigate=useNavigate();
    const searchQueryFinder=(e)=>{
        if(e.key==='Enter' && query.length>0){
            navigate(`/search/${query}`)


        }

    }
    return (
        <div className='heroBanner'>
            <div className="wrapper">
                <div className="herobannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subtitle">Millions of movies, TV shows and people to discover,Explore now.</span>
                    <div className="searchInput">
                        <input type="text" placeholder='Search for a movie or show'
                        onChange={(e)=>{setQuery(e.target.value)}}
                        onKeyUp={searchQueryFinder}
                        />
                        <button>Search</button>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default HeroBanner