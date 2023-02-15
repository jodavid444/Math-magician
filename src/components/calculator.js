import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="button-container">
        <div className="calc-section">0</div>
        <div className="grid-container">
          <div className="button-container-row">
            <button type="button" className="gray-button">AC</button>
            <button type="button" className="gray-button">+/-</button>
            <button type="button" className="gray-button">%</button>
            <button type="button" className="orange-button">÷</button>
          </div>

          <div className="button-container-row">
            <button type="button" className="gray-button">7</button>
            <button type="button" className="gray-button">8</button>
            <button type="button" className="gray-button">9</button>
            <button type="button" className="orange-button">x</button>
          </div>

          <div className="button-container-row">
            <button type="button" className="gray-button">4</button>
            <button type="button" className="gray-button">5</button>
            <button type="button" className="gray-button">6</button>
            <button type="button" className="orange-button">-</button>
          </div>

          <div className="button-container-row">
            <button type="button" className="gray-button">1</button>
            <button type="button" className="gray-button">2</button>
            <button type="button" className="gray-button">3</button>
            <button type="button" className="orange-button">+</button>
          </div>

          <div className="third-row-bottom">
            <button type="button" className="gray-button">0</button>
            <button type="button" className="gray-button">.</button>
            <button type="button" className="orange-button">=</button>
          </div>
        </div>

      </div>
    );
  }
}

export default Calculator;
