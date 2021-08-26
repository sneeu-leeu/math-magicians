/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../logic/operate';

export default function Calculator() {
  const [calc, setValues] = useState({
    operation: null,
    next: null,
    total: null,
  });
  const buttonClicked = (e) => {
    const buttonName = e.target.innerText;
    const result = calculate(calc, buttonName);

    const { operation, next, total } = calc;
    setValues({
      operation: ((result.operation === undefined) ? operation : result.operation),
      next: ((result.next === undefined) ? next : result.next),
      total: ((result.total === undefined) ? total : result.total),
    });
  };

  const { next, total } = calc;
  return (
    <div id="calculator">
      <div className="buttons grid-box">
        <input className="bg-grey grid-item input" value={next || (total || 0)} readOnly />

        <button className="grid-item" type="button" onClick={buttonClicked}>+/-</button>
        <button className="grid-item" type="button" onClick={buttonClicked}>%</button>
        <button className="grid-item" type="button" onClick={buttonClicked}>AC</button>
        <button className="grid-item bg-orange" type="button" onClick={buttonClicked}>÷</button>

        <button className="grid-item" type="button" onClick={buttonClicked}>7</button>
        <button className="grid-item" type="button" onClick={buttonClicked}>8</button>
        <button className="grid-item" type="button" onClick={buttonClicked}>9</button>
        <button className="grid-item bg-orange" type="button" onClick={buttonClicked}>x</button>

        <button className="grid-item" type="button" onClick={buttonClicked}>4</button>
        <button className="grid-item" type="button" onClick={buttonClicked}>5</button>
        <button className="grid-item" type="button" onClick={buttonClicked}>6</button>
        <button className="grid-item bg-orange" type="button" onClick={buttonClicked}>-</button>

        <button className="grid-item" type="button" onClick={buttonClicked}>1</button>
        <button className="grid-item" type="button" onClick={buttonClicked}>2</button>
        <button className="grid-item" type="button" onClick={buttonClicked}>3</button>
        <button className="grid-item bg-orange" type="button" onClick={buttonClicked}>+</button>

        <button className="grid-item nill-btn" type="button" onClick={buttonClicked}>0</button>
        <button className="grid-item" type="button" onClick={buttonClicked}>.</button>
        <button className="grid-item bg-orange" type="button" onClick={buttonClicked}>=</button>
      </div>
    </div>
  );
}
