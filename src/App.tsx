import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/home/home.tsx';
import NavBar from './components/navbar/navbar.tsx';

const App:React.FC = () => {

  return (
    <>
      <NavBar/>
      <Home/>
    </>
  );
}

export default App;
