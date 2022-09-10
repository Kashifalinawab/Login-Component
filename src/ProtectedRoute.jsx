import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute(props) {

    const  navigate=useNavigate()

    const {Component}=props
    useEffect(()=>{
        let login= localStorage.getItem("token")
        if (!login){
            navigate("/")
        }

    })
    return (
        <div>

       <Component />
        </div>
    ); 
}

export default ProtectedRoute;