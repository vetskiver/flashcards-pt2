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
  const [showAnswer, setShowAnswer] = useState(false);

  // State variables for tracking answers
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [skippedQuestions, setSkippedQuestions] = useState(0);

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
    setShowAnswer(false); // Hide answer when going to the next card
  };

  const handleFlip = () => {
    if (!guess.trim()) {
      // Increment skipped questions if no guess was made
      setSkippedQuestions(skippedQuestions + 1);
    }
    setFlipped(!flipped);
  };

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = () => {
    const correctAnswer = Data[currentCard].answer.toLowerCase();
    const isAnswerCorrect = guess.toLowerCase() === correctAnswer;
    
    setIsCorrect(isAnswerCorrect);
    setShowAnswer(true); // Show answer immediately when submitting

    // Update correct and incorrect answers
    if (isAnswerCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    // Delay the flip action to prevent showing the next card's answer briefly
    setTimeout(() => {
      setFlipped(true);
    }, 300); // Adjust delay as needed
  };

  // Optionally, auto-flip card after showing answer and a delay
  React.useEffect(() => {
    if (flipped) {
      const timer = setTimeout(() => {
        handleNext();
      }, 1000); // Adjust delay if needed
      return () => clearTimeout(timer);
    }
  }, [flipped]);

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
          showAnswer={showAnswer} // Pass this to control answer visibility
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

        {/* Display statistics */}
        <div className="stats">
          <h3>Statistics</h3>
          <p>Correct Answers: {correctAnswers}</p>
          <p>Incorrect Answers: {incorrectAnswers}</p>
          <p>Skipped Questions: {skippedQuestions}</p>
        </div>
      </div>
    </div>
  );
};

export default App;