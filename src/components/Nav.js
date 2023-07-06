import './Nav.css'
import React from "react";
import { useLocation,useNavigate } from "react-router-dom";

function Nav(){
    const location=useLocation()

    return(
        <div className="homepage">
        <nav class="navbar bg-dark">
            <a href="/" class="navbar-brand text-light">Art Gallery Spot</a>
            <div class="navbar nav">
                <a href="/About" class="nav-link" id="navlink">About</a>
                <a href ="/Contact" class="nav-link " id="navlink">Contact</a>
                <a href="/" class="nav-link" id="navlink">Signout</a>
            </div>
        </nav>

        </div>
    )
}

export default Nav;