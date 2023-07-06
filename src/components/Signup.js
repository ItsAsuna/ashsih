import './Signup.css'
import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";


function Signup(){
    const navigate=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/Signup",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User Account Already exists")                   
                }
                else if(res.data==="notexist"){
                    navigate("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);

        }
    }

    return(
        <div className='background'>
        <div className="signup">
          <h1 id="h22">Signup</h1>
          <br></br>
          <br></br>
          <form action="POST">
            <input type="email" id="e1" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" /><br></br>
            <br></br>
            <input type="password" id="p1"onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" /><br></br>
            <br></br>

        <input type="submit" id="b1" onClick={submit}/>
          </form>

          <br />
          <p id="l2">Already Have an Account ? <Link to="/" id="lnew">Log in</Link>
</p>
          <br />

        </div>
        </div>
    )
}

export default Signup