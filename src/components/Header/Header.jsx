import React from 'react';

const Header = ({ numberOfCards }) => (
  <div className='header'>
    <h1>The Ultimate ML & Data Science Flashcards</h1>
    <h2>How good of a Machine Learning Practitioner are you? Test all your ML knowledge here!</h2>
    <h3>Number of Cards: {numberOfCards}</h3>
  </div>
);

export default Header;