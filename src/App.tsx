import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/home/home.tsx';
import NavBar from './components/navbar/navbar.tsx';
import AboutMe from './pages/aboutme/aboutme.tsx';
import Projects from './pages/projects/projects.tsx';

const App:React.FC = () => {
  return (
    <>
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Projects/>
    </>
  );
}

export default App;
