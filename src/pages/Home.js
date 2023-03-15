import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Link, Button } from '@mui/material';

import HeroBanner from '../components/HeroBanner';


const Home = () => {
  const[isLoggedIn,setIsLoggedIn]=useState(false)
  const[isTourProvider,setIsTourProvider]=useState(false)
  useEffect(()=>{

    

    fetch("http://localhost:3000/tour/all")
    .then(res=>res.json())
    .then((result)=>{
      console.log(result);
      const test = result;
      console.log("test")
      console.log(test) 
      
      //setExercises(result);
    }
    ).then( ()=>{
      setIsLoggedIn(localStorage.getItem('isLoggedIn'))
      console.log(isLoggedIn)
      setIsTourProvider(localStorage.getItem('isTourProvider'))
      console.log(isTourProvider)
      })

  },[])

  return (
    <Box>
      <HeroBanner />
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Browse Tours</Typography>
      </Box>
  );
};

export default Home;