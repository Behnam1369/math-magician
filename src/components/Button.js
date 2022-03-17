import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    const { handleButtonClick } = this.props;
    handleButtonClick(e.target.innerHTML);
  }

  render() {
    const { buttonValue, buttonClass } = this.props;
    return (
      <button type="button" className={buttonClass} onClick={this.handleButtonClick}>
        {buttonValue}
      </button>
    );
  }
}

Button.propTypes = {
  buttonValue: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export default Button;
