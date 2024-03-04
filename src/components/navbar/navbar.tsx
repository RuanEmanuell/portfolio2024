import React, { useEffect, useRef, useState } from 'react';
import MenuIcon from '../../images/menu.png';
import './styles/navbar.css';

const NavBar: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openModal(){
    dialogRef.current?.showModal();
  }

  function closeModal(){
    dialogRef.current?.close();
  }

  return (
    <nav className='navBar'>
      <div className='navContainer'>
        <ul className='navBarOptions'>
          <li>Home</li>
          <li>Sobre mim</li>
          <li>Projetos</li>
          <li>Experiência profissional</li>
          <li>Hobbies</li>
        </ul>
        <div className='hamburguerMenuBox' onClick = {openModal}>
          <img src={MenuIcon} className='hamburguerMenu'></img>
        </div>
        <dialog ref = {dialogRef} className='lateralMobileMenu'>
          <ul>
            <li>Home</li>
            <li>Sobre mim</li>
            <li>Projetos</li>
            <li>Experiência profissional</li>
            <li>Hobbies</li>
          </ul>
        </dialog>
      </div>
    </nav>
  );
}

export default NavBar;
