// components/GameControls.js
import React from 'react';
import SubmitButton from './SubmitButton';
import NextButton from './NextButton';

const GameControls = ({ onSubmit, onNext, isSubmitDisabled, isNextDisabled }) => {
  return (
    <div className="game-controls">
      <SubmitButton onClick={onSubmit} disabled={isSubmitDisabled} />
      <NextButton onClick={onNext} disabled={isNextDisabled} />
    </div>
  );
};

export default GameControls;
