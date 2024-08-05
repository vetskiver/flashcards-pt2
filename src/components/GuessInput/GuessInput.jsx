// components/GuessInput.js
import React from 'react';

const GuessInput = ({ value, onChange, disabled, className }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Your Guess"
      disabled={disabled}
      className={className}
    />
  );
};

export default GuessInput;