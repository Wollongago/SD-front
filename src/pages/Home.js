import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Link, Button } from '@mui/material';

const Home = () => {
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const[isTourProvider,setIsTourProvider]=useState(false)
    useEffect(()=>{

        fetch("http://localhost:8000/tour/all")
        .then(res=>res.json())
        .then((result)=>{
          console.log(result);
          const test = result;
          console.log("test")
          console.log(test) 
        }
        ).then( ()=> {
        setIsLoggedIn(localStorage.getItem('isLoggedIn'))
        console.log(isLoggedIn)
        setIsTourProvider(localStorage.getItem('isTourProvider'))
        console.log(isTourProvider)
        })
    })
}

export default Home;

