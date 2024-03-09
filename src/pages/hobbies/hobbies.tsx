import React, { useEffect, useState } from 'react';
import HobbieImg1 from '../../images/hobbies1.png';
import HobbieImg2 from '../../images/hobbies2.webp';
import HobbieImg3 from '../../images/hobbies3.webp';
import HobbieImg4 from '../../images/hobbies4.png';
import './styles/hobbies.css';

interface Props {
  hobbiesRef: React.RefObject<HTMLDivElement>;
}

const Hobbies: React.FC<Props> = ({ hobbiesRef }) => {
  const [hobbiesOpacity, setExperienceOpacity] = useState<string>('0');

  useEffect(() => {
    setTimeout(() => {
      setExperienceOpacity('1');
    }, 6500);
  }, []);

  return (
    <div className='hobbies' style={{ opacity: hobbiesOpacity }} ref={hobbiesRef}>
      <main className='container'>
        <h1 className='mainPhrase'>Hobbies</h1>
        <section className='hobbiesBox'>
          <div className='hobbie'>
            <h2 className='secondaryPhrase'>Fora da programação, um dos meus hobbies favoritos dentro da área de tecnologia é pesquisar sobre Hardware, com uma paixão especial por placas de vídeo e processadores.</h2>
            <img src={HobbieImg1} className='hobbiesPhoto' alt='Radeon VII, a placa de vídeo mais bonita já lançada (sem discussão).'></img>
            <figcaption><a href='https://www.techpowerup.com/gpu-specs/radeon-vii.c3358'>Radeon VII</a>, a placa de vídeo mais bonita já lançada (sem discussão).</figcaption>
          </div>

          <div className='hobbie'>
            <h2 className='secondaryPhrase'>Também gosto bastante de jogar, com Rocket League atualmente sendo meu jogo favorito e com mais horas jogadas registradas (e muitos gols contras marcados).</h2>
            <img src={HobbieImg2} className='hobbiesPhoto' alt='Imagem do Octane, carro principal do Rocket League.'></img>
            <figcaption>Se você quiser jogar qualquer hora, pode acessar minha Steam <a href='https://steamcommunity.com/id/GodofredoTroll/'>aqui.</a></figcaption>
          </div>


          <div className='hobbie'>
            <h2 className='secondaryPhrase'>Desde criança eu sempre gostei de ver animes também, com Dragon Ball e One Piece sendo meus favoritos, mas tenho descobrido alguns outros bons recentemente também.</h2>
            <img src={HobbieImg3} className='hobbiesPhoto' alt='Imagem do Ippo de Hajime no Ippo, o melhor anime de esporte que eu já vi.'></img>
            <figcaption>Ippo de <a href='https://www.netflix.com/br/title/80995578'>Hajime No Ippo </a>, o melhor anime de esporte que eu já vi.</figcaption>
          </div>

          <div className='hobbie'>
            <h2 className='secondaryPhrase'>Eu também adoro ir pra academia, tendo treinado 5 vezes por semana há mais ou menos 2 anos, e não penso em parar nem tão cedo.</h2>
            <img src={HobbieImg4} className='hobbiesPhoto' alt='Imagem de um haltere de academia.'></img>
            <figcaption>E não, eu não pulo o treino de pernas.</figcaption>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Hobbies;
