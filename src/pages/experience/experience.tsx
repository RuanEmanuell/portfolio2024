import React, { useEffect, useState } from 'react';
import ExperienceImg1 from '../../images/experience1.png';
import ExperienceImg2 from '../../images/experience2.png';
import ExperienceImg3 from '../../images/experience3.gif';
import ExperienceImg4 from '../../images/experience4.jpeg';
import './styles/experience.css';

interface Props{
  experienceRef: React.RefObject<HTMLDivElement>;
}

const Experience: React.FC<Props>= ({experienceRef}) => {
  const [experienceOpacity, setExperienceOpacity] = useState<string>('0');

  useEffect(() => {
    setTimeout(() => {
      setExperienceOpacity('1');
    }, 4000);
  }, []);
  return (
    <div className='experience' style={{ opacity: experienceOpacity }} ref = {experienceRef}>
      <main className='container'>
        <h1 className='mainPhrase'>Experiência profissional</h1>

        <h2 className='secondaryPhrase'>Minha primeira experiência com programação foi com programação de PLCs em linguagem Ladder durante meu tempo como jovem aprendiz na Bunge Bio Energia, em 2021.</h2>
        <img src = {ExperienceImg1} className = 'experiencePhoto' alt = 'Exemplo de lógica em Ladder.'></img>
        <figcaption>Exemplo de lógica em Ladder.</figcaption>

        <h2 className='secondaryPhrase'>Em 2022, comecei a estudar programação web e mobile, lançando alguns projetos como desenvolvedor independente, inclusive alguns aplicativos na Google Play.</h2>
        <img src = {ExperienceImg2} className = 'experiencePhoto' alt = 'Um app meu disponível na Google Play, Water Reminder.'></img>
        <figcaption>Um app meu disponível na Google Play, <a href = 'https://play.google.com/store/apps/details?id=com.ruanemanuell.water_reminder&pli=1'>Water Reminder</a>.</figcaption>

        <h2 className='secondaryPhrase'>Em 2023, alguns meses depois de entrar na faculdade, eu comecei um estágio em desenvolvimento desktop na Cândido Empresarial, onde pude participar do desenvolvimento de alguns sistemas empresariais.</h2>
        <img src = {ExperienceImg3} className = 'experiencePhoto' alt = 'Uma parte do sistema que eu desenvolvi, que transforma tabelas do banco de dados em planilhas do Excel automaticamente.'></img>
        <figcaption>Uma parte do sistema que eu desenvolvi, que transforma tabelas do banco de dados em planilhas do Excel automaticamente.</figcaption>

        <h2 className='secondaryPhrase'>Desde então, tenho me focado no meu projeto da minha Iniciação Científica do IFTM, um aplicativo de avaliação de açougues em parceria com a Vigilância Sanitária, bem como meus projetos independentes.</h2>
        <img src = {ExperienceImg4} className = 'experiencePhoto' alt = 'Imagens do protótipo do app, este que está sendo desenvolvido com Flutter.'></img>
        <figcaption>Imagens do protótipo do app, este que está sendo desenvolvido com Flutter.</figcaption>
      </main>
    </div>
  );
}

export default Experience;
