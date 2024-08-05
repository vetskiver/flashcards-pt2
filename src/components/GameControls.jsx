// components/GameControls.js
import React from 'react';
import SubmitButton from './SubmitButton';
import NextButton from './NextButton';
import BackButton from './BackButton';

const GameControls = ({ onSubmit, onNext, onBack, isSubmitDisabled, isNextDisabled, isBackDisabled }) => {
  return (
    <div className="game-controls">
      <BackButton onClick={onBack} disabled={isBackDisabled} /> 
      <SubmitButton onClick={onSubmit} disabled={isSubmitDisabled} />
      <NextButton onClick={onNext} disabled={isNextDisabled} />
    </div>
  );
};

export default GameControls;