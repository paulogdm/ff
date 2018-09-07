import InputContainer from "../components/inputContainer";
import OutPutContainer from "../components/outPutContainer";
import Header from "../components/header";
import React, { Component } from 'react'
import { toCurrency, getMyRetirementAge } from '../utils/math'
// import Tachyons from 'tachyons'

class Index extends Component {


     constructor(props) {
        super(props);
        this.state = {
            myCurrentIncome: 10000,
            myCurrentBalance: 100000,
            myCurrentAge: 27,
            myCurrentMonthlySavings: 1500,
            myCurrentLifestyleCost: 3000,
            myRetirementAge: 0,
            myAnnualInterestRate: 0.08,
            myRetirementIncome: 10000,
            myLifeExpectancy: 100,
         }
         this.handleInput = this.handleInput.bind(this);
    }

    handleInput (e) {
        // update state for every input field
        let state = this.state
        state[e.target.id] = e.target.value
        this.setState(state)
        // calculate retirement age
        this.setState({myRetirementAge : getMyRetirementAge(this.state)})
    }

    render() {
        return (
        <div>
            <Header />
            <div className="flex w-100 vh-100">
                <InputContainer {...this.state}
                    handleInput = {this.handleInput}/>
                <OutPutContainer {...this.state}/>
            </div>
        </div> );
    }
}

export default Index;
