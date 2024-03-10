import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './pages/home/home.tsx';
import NavBar from './components/navbar/navbar.tsx';
import AboutMe from './pages/aboutme/aboutme.tsx';
import Projects from './pages/projects/projects.tsx';
import Experience from './pages/experience/experience.tsx';
import Hobbies from './pages/hobbies/hobbies.tsx';
import Footer from './components/footer/footer.tsx';

const App: React.FC = () => {
  const HomeRef = useRef<HTMLDivElement>(null);
  const AboutMeRef = useRef<HTMLDivElement>(null);
  const ProjectsRef = useRef<HTMLDivElement>(null);
  const ExperienceRef = useRef<HTMLDivElement>(null);
  const HobbiesRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <NavBar homeRef={HomeRef} aboutMeRef={AboutMeRef} projectsRef={ProjectsRef} experienceRef={ExperienceRef} hobbiesRef={HobbiesRef}/>
      <Home homeRef={HomeRef} />
      <AboutMe aboutMeRef={AboutMeRef} />
      <Projects projectsRef={ProjectsRef} />
      <Experience experienceRef={ExperienceRef} />
      <Hobbies hobbiesRef={HobbiesRef} />
      <Footer/>
    </>
  );
}

export default App;
