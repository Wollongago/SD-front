import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import logo from './assets/logo.svg';
import './App.css';
import Home from './pages/Home';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;