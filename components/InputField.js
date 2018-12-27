import React, { Component } from 'react';
import IntlCurrencyInput from './CurrencyInput';
import MinusBtn from './MinusBtn';
import PlusBtn from './PlusBtn';
import InputLabel from './InputLabel';
import InputFieldWrapper from './InputFieldWrapper';
import PigFeedback from './PigFeedback';
import colors from './Colors';

const currencyConfig = {
  locale: 'pt-BR',
  formats: {
    number: {
      BRL: {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      isFocused: false,
      isEmpty: true,
      hasBeenChanged: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleInput(e, floatValue) {
    this.props.handleInput(e, floatValue);
    this.setState({
      hasBeenChanged: true,
    });
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  handleFocus() {
    this.setState({
      isFocused: true,
    });
    if (this.props.hasTips) this.props.setFocusedInput(this.props.id);
  }

  handleIncrement(e) {
    const input = e.target.parentElement.parentElement.querySelectorAll('input')[0];
    input.stepUp();
    input.focus();
    this.props.handleInputButtons(e);
  }

  handleDecrement(e) {
    const input = e.target.parentElement.parentElement.querySelectorAll('input')[0];
    input.stepDown();
    input.focus();
    this.props.handleInputButtons(e);
  }

  handleBlur(e) {
    if (e.target.value.length !== 0) {
      this.setState({
        isEmpty: false,
        isFocused: true,
      });
    } else {
      this.setState({
        isFocused: false,
        isEmpty: true,
      });
    }
  }

  render() {
    return (
      <InputFieldWrapper hiddenBorder={this.props.hiddenBorder} className="w-100">
        <div className="flex w-100">
          <InputLabel id={this.props.id} label={this.props.label} />
          <div className={'flex w-100 justify-end'}>
            {this.props.hasSteppers && (
              <button
                className="pointer flex items-center ba0 bg-transparent"
                onClick={this.handleDecrement}
              >
                <MinusBtn />
              </button>
            )}
            {!this.props.isCurrency ? (
              <div className="flex items-center w-100 justify-end">
                <input
                  required
                  maxLength={this.props.maxLength}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  data-type={this.props.dataType}
                  value={this.props.value}
                  className={'bn pa2 br2 bg-transparent f4-ns f5 tr w3'}
                  min={this.props.min}
                  max={this.props.max}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  id={this.props.id}
                  type="number"
                  placeholder={this.props.placeholder}
                  onChange={this.handleInput}
                />
                {this.props.isPercentage && <div className="nowrap">% ao ano</div>}
              </div>
            ) : (
              <IntlCurrencyInput
                className={`${
                  this.props.value === 0 ? 'black-20' : 'black'
                } bn w-100 bg-transparent f4-ns f5 tr`}
                defaultValue={this.props.placeholder}
                min={this.props.min}
                max={this.props.max}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                id={this.props.id}
                currency="BRL"
                config={currencyConfig}
                onChange={this.handleInput}
              />
            )}
            {/* </div> */}
            {this.props.hasSteppers && (
              <button
                className="pointer flex items-center ba0 bg-transparent"
                onClick={this.handleIncrement}
              >
                <PlusBtn />
              </button>
            )}
          </div>
        </div>
        {this.state.hasBeenChanged && <PigFeedback id={this.props.id} value={this.props.value} />}
      </InputFieldWrapper>
    );
  }
}

export default InputField;
