import{ React,  useState, useEffect }from 'react'
import "./style.scss"
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux';
import Img from '../../../components/Lazyloading/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
    const [background,setBackground]=useState("");
    const {url}=useSelector(state=>state.home)
    
    const {data}=useFetch("/movie/upcoming");
    useEffect(()=>{
        const bg=url.background+data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
        setBackground(bg);



    },[data])

    
    

    const [query,setQuery]=useState('');
    const navigate=useNavigate();
    const searchQueryFinder=(e)=>{
        if(e.key==='Enter' && query.length>0){
            navigate(`/search/${query}`)


        }

    }
    return (
        <div className='heroBanner'>
            <div className="backgroundImg">
                <Img src={background}/>
                
            </div>
            <div className="opactiy-layer"></div>

            <ContentWrapper>
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


            </ContentWrapper>
            

        </div>
    )
}

export default HeroBanner;