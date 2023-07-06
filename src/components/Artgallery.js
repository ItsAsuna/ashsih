import './Artgallery.css'

function Artgallery(){
    return(
        <div>
             <nav class="navbar bg-dark">
        <a href="/Artgallery" class="navbar-brand text-light">Art Gallery Spot</a>
        <div class="navbar nav">
            <a href="/Home" class="nav-link" id="navlink">Home</a>
            <a href="/About" class="nav-link" id="navlink">About</a>
            <a href ="/Contact" class="nav-link " id="navlink">Contact</a>
            <a href ="/" class="nav-link " id="navlink">Sign out</a>
        </div>
    </nav>
        <div className='artback'>
        <p id="artpara1">Welcome to The Spot</p>
          <p id="artpara2">Explore Various Kinds of Arts</p>
          
            <div className='container'>
            <div class="row">
        <div class="col">
            <div class="card1 h-100">
                <img src="https://worlduniversityofdesign.ac.in/assets/images/bgs/school-of-visual-arts-banner.jpg" class="card-img-top" />
                <div class="card-body">
                  <h3 class="card-title">Visual Art</h3>
                  <p class="card-text">Artist: Sri Vardhan</p>
                  <p class="card-text">Cost: 20000Rs</p>
                  <button id="btnpg">Proceed to Buy</button>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </div>
        </div>
        <div class="col">
            <div class="card1 h-100">
              <img class="card-img-top" src="https://assets.telegraphindia.com/telegraph/2022/Oct/1666424870_untitled-design-23.jpg"/>
                  <div class="card-body">
                  <h3 class="card-title">The Eye</h3>
                  <p class="card-text">Artist: Rupesh</p>
                  <p class="card-text">Cost: 80000Rs</p>
                  <button id="btnpg">Proceed to Buy</button>
                </div>
              </div>
        </div>
        <div class="col">
            <div class="card1 h-100">
              <img class="card-img-top" src="https://www.ecommercetimes.com/wp-content/uploads/sites/5/2021/12/xl-2021-jazz-singer-1.jpg" />
                <div class="card-body">
                  <h3 class="card-title">Survival Story</h3>
                  <p class="card-text">Artist: Ashish</p>
                  <p class="card-text">Cost: 40000Rs</p>
                  <button id="btnpg">Proceed to Buy</button>
                </div>
              </div>
        </div>
        <div class="col">
            <div class="card1 h-100">
              <img class="card-img-top" src="https://clipart-library.com/images/LTd5Ky4Kc.jpg" />
                <div class="card-body">
                  <h3 class="card-title">Love</h3>
                  <p class="card-text">Artist: Pavan</p>
                  <p class="card-text">Cost: 10000Rs</p>
                  <button id="btnpg">Proceed to Buy</button>
                </div>
              </div>
        </div>
    </div>
            </div>
        </div>
        </div>
    )
}

export default Artgallery;