import React, { useEffect, useState } from 'react';
import Sprite from '../../images/sprite.png';
import Sprite2 from '../../images/sprite2.png';
import Sprite3 from '../../images/sprite3.png';
import './styles/aboutme.css';

interface Props {
  aboutMeOpacity: string;
}

const AboutMe: React.FC<Props> = ({ aboutMeOpacity }) => {
  const [mySpritePosition, setSpritePosition] = useState<number>(0);
  const [currentSprite, setCurrentSprite] = useState<string>(Sprite);
  let isSpriteStopped : boolean = true;

  function stopRunning() {
    setCurrentSprite(Sprite);
    isSpriteStopped = true;
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const pressedKey = event.key;
      if (pressedKey === 'ArrowRight') {
        isSpriteStopped = false;
        setSpritePosition(prev => prev + 5);
        setCurrentSprite(prev => prev === Sprite2 ? Sprite3 : Sprite2);
      }
    }

    function handleKeyUp(event: KeyboardEvent) {
      stopRunning();
    }


    document.addEventListener('keydown', handleKeyDown);

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [])

  return (
    <div className='aboutMe' style={{ opacity: aboutMeOpacity }}>
      <main className='container'>
        <h1 className='mainPhrase'>Sobre mim</h1>
        <div className='aboutMePhrase'></div>
        <img src={currentSprite} className='sprite' style={{ left: `${mySpritePosition}px` }}></img>
      </main>
    </div>
  );
}

export default AboutMe;
