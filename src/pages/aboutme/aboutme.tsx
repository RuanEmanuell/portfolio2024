import React, { useEffect, useState } from 'react';
import './styles/aboutme.css';

interface Props{
  aboutMeOpacity : string;
}

const AboutMe: React.FC<Props> = ({aboutMeOpacity}) => {
  return (
    <div className='aboutMe' style = {{opacity : aboutMeOpacity}}>
      <div className='container'>
        <h1 className='mainPhrase'>Sobre mim</h1>
      </div>
    </div>
  );
}

export default AboutMe;
