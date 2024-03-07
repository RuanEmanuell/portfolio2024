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

const Home: React.FC = () => {
  const phrases = [
    'Olá! Meu nome é Ruan Emanuell!',
    'Desenvolvedor Fullstack',
    'Desenvolvedor Javascript',
    'Desenvolvedor Typescript',
    'Desenvolvedor React',
    'Desenvolvedor Node',
    'Desenvolvedor Flutter',
    'Desenvolvedor SQL',
    'Desenvolvedor MongoDB',
    'Desenvolvedor Firebase'];

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

  const [phraseOnScreen, setPhrase] = useState<string>(phrases[0]);
  const [phraseOnScreenColor, setPhraseColor] = useState<string>('white');
  const [languageBoxOpacity, setLanguageBoxOpacity] = useState<string>('0');

  function sayPhrase() {
    let i = 0;

    setTimeout(() => {
      setLanguageBoxOpacity('1');
    }, 1000);

    setInterval(() => {
      i < phrases.length - 1 ? i++ : i--;
      setPhrase(phrases[i]);

      switch (i) {
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
    }, 3000);
  }

  useEffect(() => {
    sayPhrase();
  }, []);

  return (
    <div className='container'>
      <main>
        <section className='myImageBox'>
          <img src={MyImage} className='myImage'></img>
        </section>
        <h1 className='mainPhrase' 
        style={{ color: phraseOnScreenColor, opacity: languageBoxOpacity }}>{phraseOnScreen}</h1>
        <article className='languagesBox' style={{ opacity: languageBoxOpacity }}>
          {Object.entries(languages).map(([key, language]) => <img src={language} title={key} alt={key} className='languageIcon'></img>)}
        </article>
      </main>
    </div>
  );
}

export default Home;
