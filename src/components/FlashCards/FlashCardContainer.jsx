// components/FlashCardContainer.js
import React from 'react';
import FlashCard from './FlashCard';

const FlashCardContainer = ({ term, answer, flipped, onFlip, difficulty }) => {
  return (
    <div onClick={onFlip}>
      <FlashCard
        term={term}
        answer={answer}
        flipped={flipped}
        difficulty={difficulty}
      />
    </div>
  );
};

export default FlashCardContainer;
