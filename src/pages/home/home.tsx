import React, { useEffect, useState } from 'react';
import MyImage from '../../images/ruan.jpg';
import JavascriptIcon from '../../images/js.png';
import TypescriptIcon from '../../images/ts.png';
import ReactIcon from '../../images/react.png';
import NodeIcon from '../../images/node.png';
import FlutterIcon from '../../images/flutter.png';
import SQLIcon from '../../images/sql.png';
import MongoDBIcon from '../../images/mongodb.png';
import FirebaseIcon from '../../images/firebase.png';
import './styles/home.css';

const Home:React.FC =  () => {
  const phrases = [
    '  Olá! Meu nome é Ruan Emanuell!', 
    '  Desenvolvedor Fullstack', 
    '  Desenvolvedor Javascript', 
    '  Desenvolvedor Typescript', 
    '  Desenvolvedor React', 
    '  Desenvolvedor Node',
    '  Desenvolvedor Flutter',
    '  Desenvolvedor SQL',
    '  Desenvolvedor MongoDB',
    '  Desenvolvedor Firebase'];

  const languages = {
    'Javascript': JavascriptIcon,
    'Typescript': TypescriptIcon,
    'React': ReactIcon,
    'Node': NodeIcon,
    'Flutter': FlutterIcon,
    'SQL': SQLIcon,
    'MongoDB': MongoDBIcon,
    'Firebase': FirebaseIcon,
  }

  const [phraseOnScreen, setPhrase] = useState<string>('');
  const [phraseOnScreenColor, setPhraseColor] = useState<string>('white');
  const [languageBoxOpacity, setLanguageBoxOpacity] = useState<string>('0');

  function sayPhrase(phraseSetter: React.Dispatch<React.SetStateAction<string>>, count: number) {
    switch (count) {
      case 2:
        setPhraseColor('yellow');
        break;
      case 3:
          setPhraseColor('#3178C6');
      break;
      case 4:
        setPhraseColor('skyblue');
      break;
      case 5:
        setPhraseColor('greenyellow');
      break;
      case 6:
        setPhraseColor('lightskyblue');
      break;
      case 7:
        setPhraseColor('#22E39E');
      break;
      case 8:
        setPhraseColor('#4FAA41');
      break;
      case 9:
        setPhraseColor('#FFCA2A');
      break;
      default:
        setPhraseColor('white');
        break;
    }

    let i = 0;
    const sayPhraseInterval = setInterval(() => {
      if (i < phrases[count].length - 1) {
        phraseSetter(prev => prev + phrases[count][i]);
        i++;
      } else {
        clearInterval(sayPhraseInterval);
        erasePhrase(setPhrase, count);
      }
    }, 75);
  }

  function erasePhrase(phraseSetter: React.Dispatch<React.SetStateAction<string>>, count: number) {
    let i = phrases[count].length;
    const erasePhraseInterval = setInterval(() => {
      if (i > 0) {
        phraseSetter(prev => prev.substring(0, prev.length - 1));
        i--;
      } else {
        clearInterval(erasePhraseInterval);
        count++;
        if (count >= phrases.length) {
          count = 0;
        }
        sayPhrase(setPhrase, count);
        if (count === 1) {
          setLanguageBoxOpacity('1');
        }
      }
    }, 35);
  }

  let count = 0;

  useEffect(() => {
    sayPhrase(setPhrase, count);
  }, []);

  return (
      <div className='container'>
        <main>
          <section className='myImageBox'>
            <img src={MyImage} className='myImage'></img>
          </section>
          <h1 className='mainPhrase' style = {{color : phraseOnScreenColor}}>{phraseOnScreen}</h1>
          <article className='languagesBox' style={{ opacity: languageBoxOpacity }}>
            {Object.entries(languages).map(([key, language]) => <img src={language} title={key} alt={key} className='languageIcon'></img>)}
          </article>
        </main>
      </div>
  );
}

export default Home;
