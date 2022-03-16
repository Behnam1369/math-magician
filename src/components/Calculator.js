import React from 'react';
import './caclulator.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <input type="number" />
        <button type="button" className="silver">AC</button>
        <button type="button" className="silver">+/-</button>
        <button type="button" className="silver">%</button>
        <button type="button" className="orange">÷</button>
        <button type="button" className="silver">7</button>
        <button type="button" className="silver">8</button>
        <button type="button" className="silver">9</button>
        <button type="button" className="orange">x</button>
        <button type="button" className="silver">4</button>
        <button type="button" className="silver">5</button>
        <button type="button" className="silver">6</button>
        <button type="button" className="orange">-</button>
        <button type="button" className="silver">1</button>
        <button type="button" className="silver">2</button>
        <button type="button" className="silver">3</button>
        <button type="button" className="orange">+</button>
        <button type="button" className="silver btn0">0</button>
        <button type="button" className="silver">.</button>
        <button type="button" className="orange">=</button>
      </div>
    );
  }
}

export default Calculator;
