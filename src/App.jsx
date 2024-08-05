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

  // State variables for tracking answers and card history
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [skippedQuestions, setSkippedQuestions] = useState(0);
  const [cardHistory, setCardHistory] = useState([]); // To keep track of visited cards
  const [shuffledData, setShuffledData] = useState(Data);

  const shuffleArray = (array) => {
    let shuffled = array.slice(); // Create a copy of the array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
  };

  const handleShuffle = () => {
    const newShuffledData = shuffleArray(Data);
    setShuffledData(newShuffledData);
    setCurrentCard(0); // Reset to the first card
    setCardHistory([]); // Clear card history

    // Reset the game stats
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setSkippedQuestions(0);

    // Optionally, reset any other states if needed
    setFlipped(false);
    setGuess('');
    setIsCorrect(null);
    setShowAnswer(false);
  };

  const getNextCard = () => {
    let nextCard;
    do {
      nextCard = Math.floor(Math.random() * shuffledData.length);
    } while (nextCard === currentCard);
    return nextCard;
  };

  const handleNext = () => {
    setCardHistory([...cardHistory, currentCard]); // Push current card onto history stack
    const nextCard = getNextCard();
    setCurrentCard(nextCard);
    setFlipped(false);
    setGuess('');
    setIsCorrect(null);
    setShowAnswer(false); // Hide answer when going to the next card
  };

  const handleBack = () => {
    if (cardHistory.length > 0) {
      const previousCard = cardHistory.pop();
      setCardHistory([...cardHistory]); // Update the history stack by creating a new array
      setCurrentCard(previousCard);
      setFlipped(false);
      setGuess('');
      setIsCorrect(null);
      setShowAnswer(false); // Hide answer when going back
    }
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
    const correctAnswer = shuffledData[currentCard].answer.toLowerCase(); // Use shuffledData here
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
        <Header numberOfCards={shuffledData.length} /> {/* Use shuffledData.length */}
      </div>
      <div className='container'>
        <FlashCardContainer
          term={shuffledData[currentCard].term} // Use shuffledData here
          answer={shuffledData[currentCard].answer} // Use shuffledData here
          flipped={flipped}
          onFlip={handleFlip}
          difficulty={shuffledData[currentCard].difficulty.toLowerCase()} // Use shuffledData here
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
          onBack={handleBack} // Pass the handler for the BackButton
          onShuffle={handleShuffle} // Pass the handler for the ShuffleButton
          isSubmitDisabled={flipped || guess.trim() === ''}
          isNextDisabled={isCorrect === null}
          isBackDisabled={cardHistory.length === 0}
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
