import React, { useEffect, useState } from 'react';
import MenuIcon from './images/menu.png';
import MyImage from './images/ruan.jpg';
import JsIcon from './images/js.png';
import TsIcon from './images/ts.png';
import ReactIcon from './images/react.png';
import NodeIcon from './images/node.png';
import FlutterIcon from './images/flutter.png';
import MongoIcon from './images/mongodb.png';
import FirebaseIcon from './images/firebase.png';
import './App.css';

const App = () => {
  const myNameComplete: string = '  Olá! Meu nome é Ruan Emanuell!';
  const whatAmI: string = '  Desenvolvedor Fullstack';
  const [phraseOnScreen, setPhrase] = useState<string>('');
  const [languageBoxOpacity, setLanguageBoxOpacity] = useState<string>('0');

  function sayPhrase(phraseSetter: React.Dispatch<React.SetStateAction<string>>, completePhrase: string, eraseThisPhrase: boolean) {
    let i = 0;
    const sayPhraseInterval = setInterval(() => {
      if (i < completePhrase.length - 1) {
        phraseSetter(prev => prev + completePhrase[i]);
        i++;
      } else {
        clearInterval(sayPhraseInterval);
        if (eraseThisPhrase) {
          erasePhrase(setPhrase, myNameComplete, true, whatAmI);
        } else {
          setLanguageBoxOpacity('1');
        }
      }
    }, 75);
  }

  function erasePhrase(phraseSetter: React.Dispatch<React.SetStateAction<string>>, completePhrase: string, writeAnotherPhrase: boolean, nextPhrase?: string) {
    let i = completePhrase.length;
    const erasePhraseInterval = setInterval(() => {
      if (i > 0) {
        phraseSetter(prev => prev.substring(0, prev.length - 1));
        i--;
      } else {
        clearInterval(erasePhraseInterval);
        if (writeAnotherPhrase) {
          sayPhrase(setPhrase, whatAmI, false);
        }
      }
    }, 35);
  }

  useEffect(() => {
    sayPhrase(setPhrase, myNameComplete, true);
  }, []);

  return (
    <>
      <nav className='navBar'>
        <div className='navContainer'>
          <ul className='navBarOptions'>
            <li>Home</li>
            <li>Sobre mim</li>
            <li>Experiência profissional</li>
            <li>Projetos</li>
            <li>Hobbies</li>
          </ul>
          <div className='hamburguerMenuBox'>
            <img src={MenuIcon} className='hamburguerMenu'></img>
          </div>
        </div>
      </nav>
      <div className='container'>
        <main>
          <section className='myImageBox'>
            <img src={MyImage} className='myImage'></img>
          </section>
          <h1 className='mainPhrase'>{phraseOnScreen}</h1>
          <article className='languagesBox' style={{ opacity: languageBoxOpacity }}>
            <img src={JsIcon} title="JavaScript" alt="JavaScript" className="languageIcon" />
            <img src={TsIcon} title="TypeScript" alt="TypeScript" className="languageIcon" />
            <img src={ReactIcon} title="React" alt="React" className="languageIcon" />
            <img src={NodeIcon} title="Node" alt="Node" className="languageIcon" />
            <img src={FlutterIcon} title="Flutter" alt="Flutter" className="languageIcon" />
            <img src={MongoIcon} title="MongoDB" alt="MongoDB" className="languageIcon" />
            <img src={FirebaseIcon} title="Firebase" alt="Firebase" className="languageIcon" />
          </article>
        </main>
      </div>
    </>
  );
}

export default App;
