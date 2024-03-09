import React, { useEffect, useRef, useState } from 'react';
import MenuIcon from '../../images/menu.png';
import './styles/navbar.css';

interface Props {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutMeRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
}

const NavBar: React.FC<Props> = ({ homeRef, aboutMeRef, projectsRef, experienceRef }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openModal() {
    dialogRef.current?.showModal();
  }

  function closeModal() {
    dialogRef.current?.close();
  }

  function scrollToComponent(componentRef: React.RefObject<HTMLDivElement>) {
    componentRef.current?.scrollIntoView({ behavior: 'smooth' });
    closeModal();
  }


  return (
    <nav className='navBar'>
      <div className='navContainer'>
        <ul className='navBarOptions'>
          <li onClick={() => scrollToComponent(homeRef)}>Home</li>
          <li onClick={() => scrollToComponent(aboutMeRef)}>Sobre mim</li>
          <li onClick={() => scrollToComponent(projectsRef)}>Projetos</li>
          <li onClick={() => scrollToComponent(experienceRef)}>Experiência profissional</li>
          <li>Hobbies</li>
        </ul>
        <div className='hamburguerMenuBox' onClick={openModal}>
          <img src={MenuIcon} className='hamburguerMenu'></img>
        </div>
        <dialog ref={dialogRef} className='lateralMobileMenu'>
          <ul>
            <li onClick={() => scrollToComponent(homeRef)}>Home</li>
            <li onClick={() => scrollToComponent(aboutMeRef)}>Sobre mim</li>
            <li onClick={() => scrollToComponent(projectsRef)}>Projetos</li>
            <li onClick={() => scrollToComponent(experienceRef)}>Experiência profissional</li>
            <li>Hobbies</li>
          </ul>
        </dialog>
      </div>
    </nav>
  );
}

export default NavBar;
