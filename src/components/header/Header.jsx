import {React,useState,useEffect} from 'react'
import './style.scss'
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";


const Header = () => {
  const [show,setShow]=useState('top');
  const [lastScrollY,setlastScrollY]=useState(0);
  const [mobilemenu,setMobileMenu]=useState(false);
  const [query,setQuery]=useState('');
  const [showSearch,setShowSearch]=useState('');
  const navigate=useNavigate();
  const location=useLocation();

  return (
    <header className='header'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="menuItems">
        <li className="menuItem" onClick={()=>{}}>Movies</li>
        <li className="menuItem" onClick={()=>{}}>TV Shows</li>
        <li className="menuItem" onClick={()=>{}}>
          <HiOutlineSearch/>
        </li>
      </ul>

      <div className="mobileMenuItems">
        <HiOutlineSearch/>
        {mobilemenu?<VscChromeClose/>:(
          <SlMenu/>)}
      </div>
    </header>
  )
}

export default Header