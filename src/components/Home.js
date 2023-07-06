import './Home.css';
import Nav from './Nav';
import React from "react";
import { BrowserRouter, useLocation,useNavigate } from "react-router-dom";


function Home(){
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/Artgallery")
    }
    return(
        <div className='home'>
        <nav class="navbar bg-dark">
        <a href="/Artgallery" class="navbar-brand text-light">Art Gallery Spot</a>
        <div class="navbar nav">
            <a href="/About" class="nav-link" id="navlink">About</a>
            <a href ="/Contact" class="nav-link " id="navlink">Contact</a>
            <a href ="/" class="nav-link " id="navlink">Sign out</a>
        </div>
    </nav>
        <div className='background2'>
        <p id="homepara1">Welcome to our Art Gallery Spot, where creativity thrives.</p>
        <p id="homepara2"> Discover captivating masterpieces, explore diverse artists, and immerse yourself in the world of art.</p>
        <p id="homepara3"> Welcome to a digital sanctuary of inspiration and beauty.</p>
        <br></br>
        <br></br>
        <br></br>
        <p id="homepara4">Enjoy your journey!</p>
        <button id="homebtn" onClick={handleClick}>Go To The Art Gallery Spot</button>


        </div>
            
        </div>
    )
}

export default Home