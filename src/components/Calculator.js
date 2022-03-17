import React from 'react';
import './caclulator.css';
import calculate from '../logic/calculate';
import Button from './Button';

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
        <Button buttonValue="AC" buttonClass="silver" handleButtonClick={this.handleButtonClick} />
        <Button buttonValue="%" buttonClass="silver" handleButtonClick={this.handleButtonClick} />
        <Button buttonValue="+/-" buttonClass="silver" handleButtonClick={this.handleButtonClick} />
        <Button buttonValue="÷" buttonClass="orange" handleButtonClick={this.handleButtonClick} />
        <Button buttonValue="7" buttonClass="silver" handleButtonClick={this.handleButtonClick} />
        <Button buttonValue="8" buttonClass="silver" handleButtonClick={this.handleButtonClick} />
        <Button buttonValue="9" buttonClass="silver" handleButtonClick={this.handleButtonClick} />
        <Button buttonValue="x" buttonClass="orange" handleButtonClick={this.handleButtonClick} />
        <Button buttonValue="4" buttonClass="silver" handleButtonClick={this.handleButtonClick} />
        <Button buttonValue="5" buttonClass="silver" handleButtonClick={this.handleButtonClick} />
        <Button buttonValue="6" buttonClass="silver" handleButtonClick={this.handleButtonClick} />
        <Button buttonValue="-" buttonClass="orange" handleButtonClick={this.handleButtonClick} />
        <Button buttonValue="1" buttonClass="silver" handleButtonClick={this.handleButtonClick} />
        <Button buttonValue="2" buttonClass="silver" handleButtonClick={this.handleButtonClick} />
        <Button buttonValue="3" buttonClass="silver" handleButtonClick={this.handleButtonClick} />
        <Button buttonValue="+" buttonClass="orange" handleButtonClick={this.handleButtonClick} />
        <Button buttonValue="0" buttonClass="silver btn0" handleButtonClick={this.handleButtonClick} />
        <Button buttonValue="." buttonClass="silver" handleButtonClick={this.handleButtonClick} />
        <Button buttonValue="=" buttonClass="orange" handleButtonClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default Calculator;
