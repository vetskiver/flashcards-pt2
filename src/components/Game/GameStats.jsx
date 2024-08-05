import React from 'react';

const GameStats = ({ correctAnswers, incorrectAnswers, skippedQuestions }) => (
  <div className="stats">
    <h3>Statistics</h3>
    <p>Correct Answers: {correctAnswers}</p>
    <p>Incorrect Answers: {incorrectAnswers}</p>
    <p>Skipped Questions: {skippedQuestions}</p>
  </div>
);

export default GameStats;
