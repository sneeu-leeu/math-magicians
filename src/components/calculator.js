/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../logic/calculate';
import '../logic/operate';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      operation: null,
      next: null,
      total: null,
    };
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(e) {
    const buttonName = e.target.innerText;
    const result = calculate(this.state, buttonName);
    this.setState((previousState) => {
      const { operation, next, total } = previousState;
      return {
        operation: ((result.operation === undefined) ? operation : result.operation),
        next: ((result.next === undefined) ? next : result.next),
        total: ((result.total === undefined) ? total : result.total),
      };
    });
  }

  render() {
    return (
      <div id="calculator">
        <input className="cal-val" value="0" />
        <div className="buttons grid-box">

          <button className="grid-item" type="button">+/-</button>
          <button className="grid-item" type="button">%</button>
          <button className="grid-item" type="button">AC</button>
          <button className="grid-item bg-orange" type="button">/</button>

          <button className="grid-item" type="button">7</button>
          <button className="grid-item" type="button">8</button>
          <button className="grid-item" type="button">9</button>
          <button className="grid-item bg-orange" type="button">x</button>

          <button className="grid-item" type="button">4</button>
          <button className="grid-item" type="button">5</button>
          <button className="grid-item" type="button">6</button>
          <button className="grid-item bg-orange" type="button">-</button>

          <button className="grid-item" type="button">1</button>
          <button className="grid-item" type="button">2</button>
          <button className="grid-item" type="button">3</button>
          <button className="grid-item bg-orange" type="button">+</button>

          <button className="grid-item nill-btn" type="button">0</button>
          <button className="grid-item" type="button">.</button>
          <button className="grid-item bg-orange" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
