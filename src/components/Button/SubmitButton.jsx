import React from 'react';

const SubmitButton = ({ onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled}>Submit</button>
);

export default SubmitButton;