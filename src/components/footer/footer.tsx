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
          <a href = 'https://github.com/ruanemanuell'><img src = {GithubIcon} className='footerButton'></img></a>
          <a href = 'https://www.linkedin.com/in/ruan-emanuell-649b97247/'><img src = {LinkedinIcon} className='footerButton'></img></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
