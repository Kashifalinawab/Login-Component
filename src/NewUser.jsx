import React from 'react';

import{useNavigate} from "react-router-dom"

import {ImHome} from "react-icons/im"
import { useState } from 'react';



function NewUser({setDatabase}) {
    const[userId,setUserId]=useState('');
    const[password,setPassword]=useState('')

    const goToPage=useNavigate()


    



    const addSubmitEvent=(e)=>{
        e.preventDefault()
        const newUserData={userId,password}
        setDatabase((prev)=>[...prev,newUserData])
        goToPage("/")
        

    }


    return (
        <div id='mainDivNewUser'>
            <span> <ImHome onClick={()=>{goToPage("/")}}/></span>
            
            <h2> Please Write Your Correct Detail </h2>

            <div id="input1">

<span id="newUserSpan1">Id :</span><input type="text" placeholder="Enter Your userId" onChange={(e)=>setUserId(e.target.value)}id="Area1" />
<br />
<br />
<span id="newUserSpan2">Password:</span><input type="text" placeholder="Enter Your Phone Number" onChange={(e)=>setPassword(e.target.value)} id="Area2" />
<br />
<br />
<span>
<button id="btnSub" onClick={addSubmitEvent}>Sumbit</button>

</span>

</div>




        </div>
    );
}

export default NewUser;