import './App.css';
import React, { useState } from 'react';

import ColorCodingInfo from './components/ColorCodingInfo';
import Data from './components/Data';
import FlashCard from './components/FlashCard';
import Header from './components/Header';
import NextButton from './components/NextButton';

const App = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleNext = () => {
    let nextCard; 
    do {
      nextCard = Math.floor(Math.random() * Data.length);
    } while (nextCard == currentCard)
    setCurrentCard(nextCard);
    setFlipped(false);
  };
  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="App">
      <div className='header'>
        <Header 
          numberOfCards = {Data.length}
        />
      </div>
      <div className='container'>
        <FlashCard 
          term={Data[currentCard].term}
          definition={Data[currentCard].definition}
          flipped={flipped}
          onClick={handleFlip}
          difficulty={Data[currentCard].difficulty.toLowerCase()}
        />
        <NextButton 
          onClick={handleNext}
        />
        <ColorCodingInfo />
      </div>
    </div>
  )
}

export default App