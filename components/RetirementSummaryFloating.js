import React, { Component } from 'react';
import { formatAge } from '../utils/math';
import colors from './Colors';

class RetirementSummaryFloating extends Component {
  state = { isShowing: false };

  scrollBackUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  };

  checkVisibility = () => {
    const el = document.getElementById('answersContainer');
    const height = el ? el.offsetHeight : null;
    this.setState({ isShowing: window.pageYOffset > height });
  };

  getSelectedInvestmentIndex = (array) => {
    const selectedItem = array.filter(item => item.isSelected);
    return array.indexOf(selectedItem[0]);
  };

  render() {
    window.onscroll = this.checkVisibility;
    const { age } = this.props.retirementResults[
      this.getSelectedInvestmentIndex(this.props.myInvestments)
    ][1].retirement;
    const [y] = formatAge(age);

    return (
      this.state.isShowing && (
        <button
          style={{ backgroundColor: colors.darkGreen }}
          className="fixed w-100 pa4-ns pa3 white z-max pointer f5-ns f6 ba0"
          onClick={this.scrollBackUp}
        >
          <div className="mw7 center">
            <span className="white"> Você vai se aposentar aos {y} anos. </span>
          </div>
        </button>
      )
    );
  }
}

export default RetirementSummaryFloating;