import React, { Component } from 'react';
import InputField from './InputField';
import Button from './Button';

class IntroQuestion extends Component {
  state = {};

  render() {
    return (
      <div
        className={`${
          this.props.isShowingIntro
            ? 'pa5-l bg-white flex flex-row-ns flex-column justify-between items-center'
            : 'h0'
        }   overflow-hidden`}
      >
        <div className="w-50-l w-100 pr5-l">
          <InputField
            hiddenBorder
            hasSteppers
            label="Quantos anos você tem?"
            id="myCurrentAge"
            isShowingCalculation={this.props.isShowingCalculation}
            value={this.props.myCurrentAge}
            placeholder="26"
            stepperIncrement="1"
            min="1"
            max="100"
            handleInput={this.props.handleInput}
            handleInputButtons={this.props.handleInputButtons}
          />
        </div>
        <button
          className="w-auto-l ph5-l w-100 h3-l h5 bn pointer bg-green white ttu b pv3"
          onClick={this.props.startApp}
        >
          Começar
        </button>
      </div>
    );
  }
}

export default IntroQuestion;