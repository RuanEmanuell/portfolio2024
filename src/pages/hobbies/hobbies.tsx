import React, { useEffect, useState } from 'react';
import HobbieImg1 from '../../images/hobbies1.png';
import HobbieImg2 from '../../images/hobbies2.png';
import HobbieImg3 from '../../images/hobbies3.png';
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
    }, 5000);
  }, []);

  return (
    <div className='hobbies' style={{ opacity: hobbiesOpacity }} ref={hobbiesRef}>
      <main className='container'>
        <h1 className='mainPhrase'>Hobbies</h1>
        <section className='hobbiesBox'>
          <div className='hobby'>
            <h2 className='secondaryPhrase'>Fora da programação, um dos meus hobbies favoritos dentro da área de tecnologia é pesquisar sobre Hardware, com uma paixão especial por placas de vídeo e processadores.</h2>
            <img src={HobbieImg1} className='hobbiesPhoto' alt='AMD Radeon VII, a placa de vídeo mais bonita já lançada (sem discussão).'></img>
            <figcaption><a href='https://www.techpowerup.com/gpu-specs/radeon-vii.c3358' target="_blank">AMD Radeon VII</a>, a placa de vídeo mais bonita já lançada (sem discussão).</figcaption>
          </div>

          <div className='hobby'>
            <h2 className='secondaryPhrase'>Também gosto bastante de jogar, com Rocket League atualmente sendo meu jogo favorito e com mais horas jogadas (e muitos gols contras marcados).</h2>
            <img src={HobbieImg2} className='hobbiesPhoto' alt='Imagem do Octane, carro principal do Rocket League.'></img>
            <figcaption>Se você quiser jogar qualquer hora, pode acessar minha Steam <a href='https://steamcommunity.com/id/GodofredoTroll/' target="_blank"> aqui.</a></figcaption>
          </div>


          <div className='hobby'>
            <h2 className='secondaryPhrase'>Desde criança eu também sempre gostei de ver TV, desde séries e filmes até animes.</h2>
            <img src={HobbieImg3} className='hobbiesPhoto' alt='Imagem do Ippo do anime Hajime no Ippo, uns dos melhores que eu já vi.'></img>
            <figcaption>Ippo do anime <a href='https://www.netflix.com/br/title/80995578' target="_blank">Hajime No Ippo</a>, uns dos melhores que eu já vi.</figcaption>
          </div>

          <div className='hobby'>
            <h2 className='secondaryPhrase'>Eu também adoro ir para a academia, tendo treinado 5 vezes por semana há mais ou menos 2 anos, e não penso em parar nem tão cedo.</h2>
            <img src={HobbieImg4} className='hobbiesPhoto' alt='Imagem de um haltere de academia.'></img>
            <figcaption>E não, eu não pulo o treino de pernas.</figcaption>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Hobbies;
