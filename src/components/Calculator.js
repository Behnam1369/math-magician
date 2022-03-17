import React, { useState } from 'react';
import './caclulator.css';
import calculate from '../logic/calculate';
import Button from './Button';

function Calculator() {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const handleButtonClick = (char) => {
    setState(calculate(state, char));
  };

  const setDisplay = (content) => {
    state.next = content;
  };

  const buttons = [
    { value: 'AC', class: 'silver' },
    { value: '+/-', class: 'silver' },
    { value: '%', class: 'silver' },
    { value: '÷', class: 'orange' },
    { value: '7', class: 'silver' },
    { value: '8', class: 'silver' },
    { value: '9', class: 'silver' },
    { value: 'x', class: 'orange' },
    { value: '4', class: 'silver' },
    { value: '5', class: 'silver' },
    { value: '6', class: 'silver' },
    { value: '-', class: 'orange' },
    { value: '1', class: 'silver' },
    { value: '2', class: 'silver' },
    { value: '3', class: 'silver' },
    { value: '+', class: 'orange' },
    { value: '0', class: 'silver btn0' },
    { value: '.', class: 'silver' },
    { value: '=', class: 'orange' },
  ];
  return (
    <div className="calculator">
      <input type="text" value={state.next || state.total || ''} onChange={(e) => setDisplay(e.target.value)} />
      {buttons.map((btn) => <Button key="1" buttonValue={btn.value} buttonClass={btn.class} handleButtonClick={handleButtonClick} />)}
    </div>
  );
}

export default Calculator;
