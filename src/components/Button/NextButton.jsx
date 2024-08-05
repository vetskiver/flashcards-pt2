import React from 'react';

const NextButton = ({ onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled}>Next</button>
);

export default NextButton;