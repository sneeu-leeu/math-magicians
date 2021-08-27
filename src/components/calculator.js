/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../logic/operate';

export default function Calculator() {
  const [calc, setValues] = useState({
    operation: null,
    next: null,
    total: null,
    error: null,
  });

  const buttonClicked = (e) => {
    const { error } = calc;
    if (error) {
      setValues({ ...calc, error: null });
    }
    const buttonName = e.target.innerText || e.target.innerHTML;
    let result;
    try {
      result = calculate(calc, buttonName);
    } catch (err) {
      setValues({
        operation: null,
        next: null,
        total: 0,
        error: err,
      });
      return;
    }

    const { operation, next, total } = calc;
    setValues({
      operation: ((result.operation === undefined) ? operation : result.operation),
      next: ((result.next === undefined) ? next : result.next),
      total: ((result.total === undefined) ? total : result.total),
    });
  };

  const { next, total, error } = calc;
  return (
    <div id="calculator">
      <div className="buttons grid-box">
        <input className="bg-grey grid-item input" value={error || next || (total || 0)} readOnly />

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
