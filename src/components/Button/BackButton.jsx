// components/BackButton.js
import React from 'react';

const BackButton = ({ onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled}>Previous</button>
);

export default BackButton;