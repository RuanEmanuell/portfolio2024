import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/home/home.tsx';
import NavBar from './components/navbar/navbar.tsx';
import AboutMe from './pages/aboutme/aboutme.tsx';

const App:React.FC = () => {
  const [aboutMeOpacity, setAboutMeOpacity] = useState<string>('0');

  useEffect(() => {
    setTimeout(() => {
      setAboutMeOpacity('1');
    }, 3500);
  }, []);
  return (
    <>
      <NavBar/>
      <Home/>
      <AboutMe aboutMeOpacity={aboutMeOpacity}/>
    </>
  );
}

export default App;
