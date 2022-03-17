import React from 'react';
import './caclulator.css';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(char) {
    this.setState((state) => (calculate(state, char)));
  }

  setDisplay(content) {
    this.setState(() => ({ next: content }));
  }

  render() {
    const { next, total } = this.state;
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
        <input type="text" value={next || total || ''} onChange={(e) => this.setDisplay(e.target.value)} />
        {buttons.map((el) => <button key={1} type="button" className={el.class} onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>{el.value}</button>)}
      </div>
    );
  }
}

export default Calculator;
