import './App.css';
import React, { useState, useEffect } from 'react';
import Data from './components/Data';

// Components
import Header from './components/Header/Header';
import GuessInput from './components/GuessInput/GuessInput';
import FlashCardContainer from './components/FlashCards/FlashCardContainer';
import FeedbackMessage from './components/Feedback/FeedbackMessage';
import GameControls from './components/Game/GameControls';
import GameStats from './components/Game/GameStats';
import ColorCodingInfo from './components/Info/ColorCodingInfo';

// Utility
import Fuse from 'fuse.js';

const App = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [guess, setGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [submittedCards, setSubmittedCards] = useState(new Set());
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [skippedQuestions, setSkippedQuestions] = useState(0);
  const [cardHistory, setCardHistory] = useState([]);
  const [shuffledData, setShuffledData] = useState(Data);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);  

  const shuffleArray = (array) => {
    let shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleShuffle = () => {
    const newShuffledData = shuffleArray(Data);
    setShuffledData(newShuffledData);
    setCurrentCard(0);
    setCardHistory([]);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setSkippedQuestions(0);
    setSubmittedCards(new Set());
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
    if (shuffledData.length === 0) return;
    setCardHistory(prevHistory => [...prevHistory, currentCard]);
    const nextCard = getNextCard();
    setCurrentCard(nextCard);
    setFlipped(false);
    setGuess('');
    setIsCorrect(null);
    setShowAnswer(false);
  };

  const handleBack = () => {
    if (cardHistory.length > 0) {
      const previousCard = cardHistory[cardHistory.length - 1];
      setCardHistory(prevHistory => prevHistory.slice(0, -1));
      setCurrentCard(previousCard);
      setFlipped(false);
      setGuess('');
      setIsCorrect(null);
      setShowAnswer(false);
    }
  };

  const handleFlip = () => {
    if (!guess.trim()) {
      setSkippedQuestions(skippedQuestions + 1);
    }
    setFlipped(!flipped);
  };

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = () => {
    if (!guess.trim()) return;
  
    const correctAnswer = shuffledData[currentCard].answer.toLowerCase().trim();
    const userAnswer = guess.toLowerCase().trim();
  
    const fuse = new Fuse([correctAnswer], { includeScore: true });
    const result = fuse.search(userAnswer);
  
    const isFuzzyMatch = result.length > 0 && result[0].score < 0.3;
    const isAnswerCorrect = userAnswer === correctAnswer || isFuzzyMatch;
  
    setIsCorrect(isAnswerCorrect);
    setShowAnswer(true);
  
    if (isAnswerCorrect) {
      setCorrectAnswers(correctAnswers + 1);
      setCurrentStreak(prevStreak => {
        const newStreak = prevStreak + 1;
        setLongestStreak(prevLongest => Math.max(prevLongest, newStreak));
        return newStreak;
      });
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
      setCurrentStreak(0); // Reset current streak if the answer is incorrect
    }
  
    setSubmittedCards(prev => new Set(prev).add(currentCard));
  
    setTimeout(() => {
      setFlipped(true);
    }, 300);
  };
  

  useEffect(() => {
    if (flipped) {
      const timer = setTimeout(() => {
        handleNext();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [flipped]);

  const isCardGuessed = submittedCards.has(currentCard);
  const isSubmitDisabled = !guess.trim() || flipped || isCardGuessed;

  return (
    <div className="App">
      <Header numberOfCards={shuffledData.length} />
      <div className='container'>
        <FlashCardContainer
          term={shuffledData[currentCard].term}
          answer={shuffledData[currentCard].answer}
          flipped={flipped}
          onFlip={handleFlip}
          difficulty={shuffledData[currentCard].difficulty.toLowerCase()}
          showAnswer={showAnswer}
        />
        <GuessInput
          value={guess}
          onChange={handleGuessChange}
          disabled={flipped || isCardGuessed}
          className="input-field"
        />
        <FeedbackMessage isCorrect={isCorrect} />
        <GameControls
          onSubmit={handleSubmit}
          onNext={handleNext}
          onBack={handleBack}
          onShuffle={handleShuffle}
          isSubmitDisabled={isSubmitDisabled}
          isNextDisabled={false}
          isBackDisabled={cardHistory.length === 0}
        />
        <ColorCodingInfo />
        <GameStats
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
          skippedQuestions={skippedQuestions}
          currentStreak={currentStreak}
          longestStreak={longestStreak}
        />
      </div>
    </div>
  );
};

export default App;
