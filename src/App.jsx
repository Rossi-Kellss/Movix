import { useState,useEffect } from 'react'
import { fetchFromApi } from './utils/api'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import s404 from './pages/404/404'
import Details from './pages/details/details'
import Explore from './pages/explore/Explore'
import SearchResult from './pages/searchResult/SearchResult'
import Header from './components/header/Header'
import { useDispatch } from 'react-redux'
import { getApiConfiguration } from './features/HomeSlice'
// import Footer from './components/footer/Footer'


import './App.css'

function App() {
  const dispatch=useDispatch();

  useEffect(()=>{
    fetchFromApiConfig()
  },[])

  const fetchFromApiConfig=()=>{
    fetchFromApi('/configuration').then((res)=>{
      console.log(res)
      const url={
        background:res.images.secure_base_url+'original',
        poster:res.images.secure_base_url+'original',
        profile:res.images.secure_base_url+'original'
  
  
      }
      dispatch(getApiConfiguration(url))
    })

    // 
  }

  
  


  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:mediaType/:id' element={<Details/>}/>
      <Route path='/search/:query' element={<SearchResult/>}/>
      <Route path='/explore/:mediaType' element={<Explore/>}/>
      <Route  path="*" element={s404()} />
      

    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App;
