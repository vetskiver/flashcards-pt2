// ColorCodingInfo.js
import React from 'react';
import '../App.css';

const ColorCodingInfo = () => {
  return (
    <div className="color-coding">
      <h4>Color Coding Information</h4>
      <div className="color-sample">
        <div style={{ backgroundColor: '#d4edda' }}></div>
        <span>Easy Card</span>
      </div>
      <div className="color-sample">
        <div style={{ backgroundColor: '#fff3cd' }}></div>
        <span>Medium Card</span>
      </div>
      <div className="color-sample">
        <div style={{ backgroundColor: '#f8d7da' }}></div>
        <span>Hard Card</span>
      </div>
    </div>
  );
};

export default ColorCodingInfo;
