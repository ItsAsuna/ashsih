import './About.css';
import React from 'react';
import img1 from './images/me2.jpg';
import img2 from './images/pavan.jpeg';
import img3 from './images/rupesh.jpeg';
import img4 from './images/ashish2.jpeg';

function About(){
    return(      
        <div>
            <nav class="navbar bg-dark">
        <a href="/Artgallery" class="navbar-brand text-light">Art Gallery Spot</a>
        <div class="navbar nav">
            <a href="/Home" class="nav-link" id="navlink">Home</a>
            <a href ="/Contact" class="nav-link " id="navlink">Contact</a>
            <a href ="/" class="nav-link " id="navlink">Sign out</a>
        </div>
    </nav>

            <div class="background3">
                <p id="homepara4">About our Team</p>
             
                <div class="container">
                <div class="row">
        <div class="col">
            <div class="card h-100" id="mycard">
                <img src={img1} class="card-img-top" id="abtimgs1"/>
                <div class="card-body">
                  <h3 class="card-title">Sri Vardhan</h3>
                  <p class="card-text">Contributed to Frontend and Backend</p>
                
                </div>
              </div>
        </div>
        <div class="col">
            <div class="card h-100">
              <img class="card-img-top" id="abtimgs2" src={img2}/>
                  <div class="card-body">
                  <h3 class="card-title">Pavan</h3>
                  <p class="card-text">Contributed to Frontend and Backend</p>
                
                </div>
              </div>
        </div>
        <div class="col">
            <div class="card h-100">
              <img class="card-img-top" id="abtimgs3" src={img3} />
                <div class="card-body">
                  <h3 class="card-title">Rupesh</h3>
                  <p class="card-text">Contributed to Frontend and Backend</p>
                  
                </div>
              </div>
        </div>
        <div class="col">
            <div class="card h-100">
              <img class="card-img-top" id="abtimgs4" src={img4} />
                <div class="card-body">
                  <h3 class="card-title">Ashish</h3>
                  <p class="card-text">Contributed to Frontend and Backend</p>
                  
                </div>
              </div>
        </div>
    </div>
                </div>
          </div>  
          </div>

    )
}

export default About;