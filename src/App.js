//import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Artgallery from './components/Artgallery';
import Nav from './components/Nav';
import About from './components/About';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { useState } from "react";
function App(){
  return(

    <div classname="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Artgallery" element={<Artgallery />}/>
        </Routes>
      </Router>

    </div>
  )
}



export default App;
