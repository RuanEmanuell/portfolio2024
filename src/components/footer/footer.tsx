import React, { useEffect, useRef, useState } from 'react';
import GithubIcon from '../../images/github.svg';
import LinkedinIcon from '../../images/linkedin.png';
import './styles/footer.css';

const Footer: React.FC = () => {

  return (
    <footer>
      <div className='footerContainer'>
        <h1 className='footerPhrase'>@Ruan Emanuell - 2024</h1>
        <div className='footerButtons'>
          <a href='https://github.com/ruanemanuell' target="_blank"><img src={GithubIcon} className='footerButton' alt='Acessar meu Github'></img></a>
          <a href='https://www.linkedin.com/in/ruan-emanuell-649b97247/' target="_blank"><img src={LinkedinIcon} className='footerButton' alt='Acessar meu Linkedin'></img></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
