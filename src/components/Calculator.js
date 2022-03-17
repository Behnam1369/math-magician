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
    return (
      <div className="calculator">
        <input type="text" value={next || total || ''} onChange={(e) => this.setDisplay(e.target.value)} />
        <button type="button" className="silver" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>AC</button>
        <button type="button" className="silver" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>+/-</button>
        <button type="button" className="silver" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>%</button>
        <button type="button" className="orange" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>÷</button>
        <button type="button" className="silver" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>7</button>
        <button type="button" className="silver" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>8</button>
        <button type="button" className="silver" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>9</button>
        <button type="button" className="orange" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>x</button>
        <button type="button" className="silver" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>4</button>
        <button type="button" className="silver" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>5</button>
        <button type="button" className="silver" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>6</button>
        <button type="button" className="orange" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>-</button>
        <button type="button" className="silver" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>1</button>
        <button type="button" className="silver" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>2</button>
        <button type="button" className="silver" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>3</button>
        <button type="button" className="orange" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>+</button>
        <button type="button" className="silver btn0" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>0</button>
        <button type="button" className="silver" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>.</button>
        <button type="button" className="orange" onClick={(e) => this.handleButtonClick(e.target.innerHTML)}>=</button>
      </div>
    );
  }
}

export default Calculator;
