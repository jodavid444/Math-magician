import React, { useState } from 'react';

import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({});

  const buttonClick = (element) => {
    setState(calculate(state, element.target.textContent));
  };

  const { next } = state;
  const { total } = state;

  return (

    <div className="button-container">
      <div className="calc-section">{next || total || 0}</div>
      <div className="grid-container">
        <div className="button-container-row">
          <button type="button" onClick={buttonClick} className="gray-button">AC</button>
          <button type="button" onClick={buttonClick} className="gray-button">+/-</button>
          <button type="button" onClick={buttonClick} className="gray-button">%</button>
          <button type="button" onClick={buttonClick} className="orange-button">÷</button>
        </div>

        <div className="button-container-row">
          <button type="button" onClick={buttonClick} className="gray-button">7</button>
          <button type="button" onClick={buttonClick} className="gray-button">8</button>
          <button type="button" onClick={buttonClick} className="gray-button">9</button>
          <button type="button" onClick={buttonClick} className="orange-button">x</button>
        </div>

        <div className="button-container-row">
          <button type="button" onClick={buttonClick} className="gray-button">4</button>
          <button type="button" onClick={buttonClick} className="gray-button">5</button>
          <button type="button" onClick={buttonClick} className="gray-button">6</button>
          <button type="button" onClick={buttonClick} className="orange-button">-</button>
        </div>

        <div className="button-container-row">
          <button type="button" onClick={buttonClick} className="gray-button">1</button>
          <button type="button" onClick={buttonClick} className="gray-button">2</button>
          <button type="button" onClick={buttonClick} className="gray-button">3</button>
          <button type="button" onClick={buttonClick} className="orange-button">+</button>
        </div>

        <div className="third-row-bottom">
          <button type="button" onClick={buttonClick} className="gray-button">0</button>
          <button type="button" onClick={buttonClick} className="gray-button">.</button>
          <button type="button" onClick={buttonClick} className="orange-button">=</button>
        </div>
      </div>

    </div>
  );
};
export default Calculator;
