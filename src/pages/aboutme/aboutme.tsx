import React, { useEffect, useState } from 'react';
import gdgPhoto from '../../images/gdguberlandia.png';
import './styles/aboutme.css';

interface Props{
  aboutMeRef: React.RefObject<HTMLDivElement>;
}

const AboutMe: React.FC<Props>= ({aboutMeRef}) => {
  const [aboutMeOpacity, setAboutMeOpacity] = useState<string>('0');

  useEffect(() => {
    setTimeout(() => {
      setAboutMeOpacity('1');
    }, 3500);
  }, []);
  return (
    <div className='aboutMe' style={{ opacity: aboutMeOpacity }} ref = {aboutMeRef}>
      <main className='container'>
        <h1 className='mainPhrase'>Sobre mim</h1>
        <h2 className='secondaryPhrase'>Tenho 20 anos de idade, sendo desenvolvedor há cerca de 2 anos,
          sou apaixonado por programação e tecnologia em geral. Comecei minha
          trajetória na área de desenvolvimento com alguns cursos e desde lá
          não penso em parar mais. No ínicio de 2023 iniciei o curso de Análise
          e Desenvolvimento de Sistemas no Uberaba Parque tecnológico, onde estou
          tendo a oportunidade de conhecer muita gente legal e participar de muitos
          eventos.
        </h2>
        <div className='aboutMePhotoBox'>
          <img src={gdgPhoto} className='aboutMePhoto' alt = 'Eu e a turma do IFTM CAUPT no Google Devfest Triângulo 2023.'></img>
        </div>
        <figcaption>Eu e a turma do IFTM CAUPT no Google Devfest Triângulo 2023.</figcaption>
      </main>
    </div>
  );
}

export default AboutMe;
