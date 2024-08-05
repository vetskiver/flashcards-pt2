import './App.css';
import React, { useState } from 'react';

import ColorCodingInfo from './components/ColorCodingInfo';
import Data from './components/Data';
import Header from './components/Header';
import GuessInput from './components/GuessInput';
import FeedbackMessage from './components/FeedbackMessage';
import FlashCardContainer from './components/FlashCardContainer';
import GameControls from './components/GameControls';

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
  };

  const handleSubmit = () => {
    const correctAnswer = Data[currentCard].answer.toLowerCase();
    setIsCorrect(guess.toLowerCase() === correctAnswer);
    setFlipped(true);
  };

  return (
    <div className="App">
      <div className='header'>
        <Header numberOfCards={Data.length} />
      </div>
      <div className='container'>
        <FlashCardContainer
          term={Data[currentCard].term}
          answer={Data[currentCard].answer}
          flipped={flipped}
          onFlip={handleFlip}
          difficulty={Data[currentCard].difficulty.toLowerCase()}
        />
        <GuessInput
          value={guess}
          onChange={handleGuessChange}
          disabled={flipped}
          className="input-field"
        />
        <FeedbackMessage isCorrect={isCorrect} />
        <GameControls
          onSubmit={handleSubmit}
          onNext={handleNext}
          isSubmitDisabled={flipped || guess.trim() === ''}
          isNextDisabled={isCorrect === null}
        />
        <ColorCodingInfo />
      </div>
    </div>
  );
};

export default App;
