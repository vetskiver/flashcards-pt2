// components/FeedbackMessage.js
import React from 'react';

const FeedbackMessage = ({ isCorrect }) => {
  if (isCorrect === null) return null;

  return (
    <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
      {isCorrect ? 'Correct!' : 'Incorrect!'}
    </div>
  );
};

export default FeedbackMessage;