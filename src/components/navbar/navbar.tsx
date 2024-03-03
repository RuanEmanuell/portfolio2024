import React, { useEffect, useState } from 'react';
import MenuIcon from '../../images/menu.png';
import './styles/navbar.css';

const NavBar:React.FC = () => {

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
      <div className='hamburguerMenuBox'>
        <img src={MenuIcon} className='hamburguerMenu'></img>
      </div>
    </div>
  </nav>
  );
}

export default NavBar;
