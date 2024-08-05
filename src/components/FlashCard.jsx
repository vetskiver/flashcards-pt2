import React from 'react';

const FlashCard = ({ term, definition, flipped, onClick, difficulty }) => {

  return (
    <div className={`flashcard card-${difficulty}`} onClick={onClick}>
      <div className={`card ${flipped ? 'flipped' : ''}`}>
        <div className='front'>
          <div className="card-text">{term}</div>
        </div>
        <div className='back'>
          <div className="card-text">{definition}</div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;