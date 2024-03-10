import React, { useEffect, useRef, useState } from 'react';
import SpriteRight1 from '../../images/sprite1r.png';
import SpriteRight2 from '../../images/sprite2r.png';
import SpriteRight3 from '../../images/sprite3r.png';
import SpriteLeft1 from '../../images/sprite1l.png';
import SpriteLeft2 from '../../images/sprite2l.png';
import SpriteLeft3 from '../../images/sprite3l.png';
import Cloud from '../../images/cloud.png';
import Ground from '../../images/ground.png';
import ProjectImg1 from '../../images/project1.png';
import ProjectImg2 from '../../images/project2.png';
import ProjectImg3 from '../../images/project3.jpg';
import ProjectImg4 from '../../images/project4.png';
import ProjectImg5 from '../../images/project5.png';
import GithubImg from '../../images/github.svg';
import './styles/projects.css';

interface Props {
  projectsRef: React.RefObject<HTMLDivElement>;
}

const Projects: React.FC<Props> = ({ projectsRef }) => {

  const projects = [
    ['HardwareMaster', ProjectImg1, 'Site para simplificar o processo de montagem de PCs personalizados. Feito com Node, React e MongoDB'],
    ['WaterReminder', ProjectImg2, 'App para lembrar de beber água, feito com Flutter. Disponível na Google Play'],
    ['RTChat', ProjectImg3, 'Um chat em tempo real feito com Flutter e Firebase'],
    ['TodoNode', ProjectImg4, 'Um Todo List web feito com Node, Express e MongoDB'],
    ['ProgEdu', ProjectImg5, 'Aplicativo para aprender a programar, com ranking online, feito com Flutter e Firebase'],
  ]

  const [projectsOpacity, setProjectsOpacity] = useState<string>('0');
  const [mySpritePosition, setSpritePosition] = useState<number>(-60);
  const [mySpriteImage, setSpriteImage] = useState<string>(SpriteRight1);
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [canClick, setCanClick] = useState<boolean>(true);

  let projectTvRef = useRef<HTMLDivElement>(null);
  let animationStartTime: number | null = null;
  let animationFrameId: number | null = null;

  function runSprite(direction: string) {
    let spritePos: number = mySpritePosition;
    const tvWidth = projectTvRef.current!.clientWidth / 1.4;
    const initialSpritePos = -60;
    const spriteStepWidth = tvWidth / 15;

    if (canClick) {
      setCanClick(false);
      animationStartTime = performance.now();
      let doStep = 4;

      function animate(timestamp: number) {
        switch (direction) {
          case 'left':
            if (spritePos > initialSpritePos && currentProject > 0) {
              if (doStep === 4) {
                spritePos = spritePos - spriteStepWidth;
                setSpriteImage((prev) => (prev === SpriteLeft2 ? SpriteLeft3 : SpriteLeft2));
                setSpritePosition(spritePos);
                doStep = 0
              } else {
                doStep++
              }
            } else {
              if (currentProject > 0) {
                spritePos = tvWidth;
                setCurrentProject((prev) => prev - 1);
                setSpritePosition(spritePos);
              }
              setSpriteImage(SpriteLeft1);
              setCanClick(true);
              cancelAnimationFrame(animationFrameId!);
              return;
            }
            break;
          case 'right':
            if (spritePos < tvWidth && currentProject < projects.length - 1) {
              if (doStep === 4) {
                spritePos = spritePos + spriteStepWidth;
                setSpriteImage((prev) => (prev === SpriteRight2 ? SpriteRight3 : SpriteRight2));
                setSpritePosition(spritePos);
                doStep = 0;
              } else {
                doStep++;
              }
            } else {
              if (currentProject < projects.length - 1) {
                spritePos = initialSpritePos;
                setCurrentProject((prev) => prev + 1);
                setSpritePosition(spritePos);
              }
              setSpriteImage(SpriteRight1);
              setCanClick(true);
              cancelAnimationFrame(animationFrameId!);
              return;
            }
            break;
        }

        animationFrameId = requestAnimationFrame(animate);
      };

      animate(animationStartTime);
    }
  }


  function correctSpritePosition() {
    let spritePos: number = mySpritePosition;
    spritePos = -60;
    setSpritePosition(spritePos);
  }

  useEffect(() => {
    setTimeout(() => {
      setProjectsOpacity('1');
    }, 3000);

    window.addEventListener('resize', correctSpritePosition);

    return () => {
      window.removeEventListener('resize', correctSpritePosition);
    };
  }, []);

  return (
    <div className='projects' style={{ opacity: projectsOpacity }} ref={projectsRef}>
      <main className='container'>
        <h1 className='mainPhrase'>Projetos</h1>
        <div className='projectsDisplay'>
          <section className='projectsTVBox'>
            <div className='projectsTV' ref={projectTvRef}>
              <img src={Cloud} className='cloudSprite' alt='Srite de uma nuvem se mexendo'></img>
              <img src={mySpriteImage} className='mySprite' style={{ left: mySpritePosition }} alt='Sprite de um boneco meu'></img>
              <div className='project'>
                <img src={projects[currentProject][1]} className='projectImg' alt={`Imagem do meu projeto ${projects[currentProject][0]}`}></img>
                <div className='projectInfo'>
                  <h3>{projects[currentProject][0]}</h3>
                  <h4>{projects[currentProject][2]}</h4>
                </div>
              </div>
              <img src={Ground} className='groundSprite' alt='Sprite do chão'></img>
            </div>
          </section>
          <section className='projectsControllerBox'>
            <div className='projectsController'>
              <div className='dpad'>
                <div className='dpadButton' onClick={() => runSprite('left')}>
                  <h1>←</h1>
                </div>
                <div className='dpadButton' onClick={() => runSprite('right')}>
                  <h1>→</h1>
                </div>
              </div>
              <div className='buttons'>
                <div className='button'>🔴</div>
                <div className='button'>🔵</div>
              </div>
            </div>
          </section>
        </div>
        <article>
          <h2 className='secondaryPhrase'>Estes são alguns dos meus projetos, você pode ver mais no meu Github:</h2>
          <a href='https://github.com/RuanEmanuell' className='githubButton'>
            <h1 className='mainPhrase githubPhrase'>Github</h1>
            <img src={GithubImg} className='githubImage'></img>
          </a>
        </article>
      </main>
    </div>
  );
}

export default Projects;
