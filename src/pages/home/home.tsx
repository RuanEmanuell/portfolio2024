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
    'Desenvolvedor Fullstack',
    'Desenvolvedor Javascript',
    'Desenvolvedor Typescript',
    'Desenvolvedor React',
    'Desenvolvedor Node',
    'Desenvolvedor Flutter',
    'Desenvolvedor SQL',
    'Desenvolvedor MongoDB',
    'Desenvolvedor Firebase'];

  const colors = [
    'white',
    'yellow',
    '#3178C6',
    'skyblue',
    'greenyellow',
    'lightskyblue',
    '#22E39E',
    '#4FAA41',
    '#FFCA2A'
  ]

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
      i < phrases.length - 1 ? i++ : i  = 0;
      setPhrase(phrases[i]);
      setPhraseColor(colors[i])
    }, 3000);
  }

  useEffect(() => {
    sayPhrase();
  }, []);

  return (
    <div className='container'>
      <main>
        <section className='myImageBox'>
          <img src={MyImage} className='myImage' alt = 'Minha foto'></img>
        </section>
        <h1 className='mainPhrase' 
        style={{opacity: languageBoxOpacity }}>Olá! Meu nome é Ruan Emanuell!</h1>
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
