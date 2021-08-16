/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div id="calculator">
        <input className="" value="0" />
        <div className="buttons grid-box">
          <div className="buttons-row">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button">/</button>
          </div>
          <div className="buttons-row">
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button">x</button>
          </div>
          <div className="buttons-row">
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button">-</button>
          </div>
          <div className="buttons-row">
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">+</button>
          </div>
          <div className="buttons-row">
            <button id="nill-button" type="button">0</button>
            <button type="button">.</button>
            <button type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
