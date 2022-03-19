import React, { useState, useEffect } from 'react';
import './caclulator.css';
import calculate from '../logic/calculate';
import Button from './Button';

function Calculator() {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const handleButtonClick = (char) => {
    setState(calculate(state, char));
  };

  // const setDisplay = (content) => {
  //   state.next = content;
  // };

  const type = (e) => {
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '=', '%'].includes(e.key)) {
      handleButtonClick(e.key);
    } else if (e.key === '*') {
      handleButtonClick('x');
    } else if (e.key === 'Enter') {
      handleButtonClick('=');
    } else if (e.key === '/') {
      handleButtonClick('÷');
    } else {
      e.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', type);
    return () => {
      window.removeEventListener('keyup', type);
    };
  }, [state]);

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
      <div className="display">{state.next || state.total || ''}</div>
      {buttons.map((btn) => (
        <Button
          key={btn.value}
          buttonValue={btn.value}
          buttonClass={btn.class}
          handleButtonClick={handleButtonClick}
        />
      ))}
    </div>
  );
}

export default Calculator;
