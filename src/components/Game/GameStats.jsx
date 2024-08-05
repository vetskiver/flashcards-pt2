import React from 'react';

const GameStats = ({ correctAnswers, incorrectAnswers, skippedQuestions, currentStreak, longestStreak }) => {
  return (
    <div className="game-stats">
      <h4>Game Stats</h4>
      <p>Correct Answers: {correctAnswers}</p>
      <p>Incorrect Answers: {incorrectAnswers}</p>
      <p>Skipped Questions: {skippedQuestions}</p>
      <p>Current Streak: {currentStreak}</p>
      <p>Longest Streak: {longestStreak}</p>
    </div>
  );
};

export default GameStats;
