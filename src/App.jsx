import './App.css';
import React, { useState, useEffect } from 'react';

import ColorCodingInfo from './components/ColorCodingInfo';
import Data from './components/Data';
import FlashCard from './components/FlashCard';
import Header from './components/Header';
import NextButton from './components/NextButton';
import SubmitButton from './components/SubmitButton';

const App = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [guess, setGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const getNextCard = () => {
    let nextCard; 
    do {
      nextCard = Math.floor(Math.random() * Data.length);
    } while (nextCard === currentCard);
    return nextCard;
  };

  const handleNext = () => {
    const nextCard = getNextCard();
    
    setCurrentCard(nextCard);
    setFlipped(false);
    setGuess('');
    setIsCorrect(null);
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
    if (e.target.value.trim() !== '') {
    }
  };

  const handleSubmit = () => {

    const correctAnswer = Data[currentCard].answer.toLowerCase();
    if (guess.toLowerCase() === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setFlipped(true);
  };
  
  return (
    <div className="App">
      <div className='header'>
        <Header numberOfCards={Data.length} />
      </div>
      <div className='container'>
        <FlashCard 
          term={Data[currentCard].term}
          answer={Data[currentCard].answer}
          flipped={flipped}
          onClick={handleFlip}
          difficulty={Data[currentCard].difficulty.toLowerCase()}
        />
        <input 
          type="text"
          value={guess}
          onChange={handleGuessChange}
          placeholder='Your Guess'
          disabled={flipped}
        />
        <SubmitButton 
          onClick={handleSubmit}
          disabled={flipped || guess.trim() === ''}
        />
        {isCorrect !== null && (
          <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? 'Correct!' : 'Incorrect!'}
          </div>
        )}
        <NextButton 
          onClick={handleNext}
          disabled={isCorrect === null || guess.trim() === ''}
        />
        <ColorCodingInfo />
      </div>
    </div>
  );
};

export default App;