// components/Game/GameControls.jsx
import React from 'react';
import SubmitButton from '../Button/SubmitButton';
import NextButton from '../Button/NextButton';
import BackButton from '../Button/BackButton'; // Adjusted path
import ShuffleButton from '../Button/ShuffleButton'; // Adjusted path

const GameControls = ({ onSubmit, onNext, onBack, onShuffle, isSubmitDisabled, isNextDisabled, isBackDisabled }) => (
  <div className="game-controls">
    <BackButton onClick={onBack} disabled={isBackDisabled} />
    <SubmitButton onClick={onSubmit} disabled={isSubmitDisabled} />
    <NextButton onClick={onNext} disabled={isNextDisabled} />
    <ShuffleButton onClick={onShuffle} />
  </div>
);

export default GameControls;
