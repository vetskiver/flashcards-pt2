// components/GameControls.js
import React from 'react';
import SubmitButton from './SubmitButton';
import NextButton from './NextButton';
import BackButton from './BackButton';
import ShuffleButton from './ShuffleButton';


const GameControls = ({ onSubmit, onNext, onBack, onShuffle, isSubmitDisabled, isNextDisabled, isBackDisabled }) => {
  return (
    <div className="game-controls">
      <BackButton onClick={onBack} disabled={isBackDisabled} /> 
      <SubmitButton onClick={onSubmit} disabled={isSubmitDisabled} />
      <NextButton onClick={onNext} disabled={isNextDisabled} />
      <ShuffleButton onClick={onShuffle} />
    </div>
  );
};

export default GameControls;