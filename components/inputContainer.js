import { Component } from "react";
import InputField from '../components/inputField'
import QuestionChunk from '../components/questionChunk'

class InputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() { 
        return ( 
            <div className="w-100 bg-yellow pa5 overflow-scroll">
            <h1 className="f1 b mb6">Bem-vindo à melhor calculadora de independência financeira da Internet</h1>
           <QuestionChunk title="Vamos começar falando sobre você">
                <InputField 
                    id = "myCurrentAge"
                    label = "Quantos anos você tem?"
                    handleInput = {this.props.handleInput}
                />
                <InputField 
                    id = "myLifeExpectancy"
                    label = "Você pretende viver até quantos anos?"
                    handleInput = {this.props.handleInput}
                />
            </QuestionChunk>
            <QuestionChunk title="Agora, sobre seu dinheiro">
            <InputField
                id = "myCurrentBalance"
                label = "Quanto você tem hoje para começar a investir"
                handleInput = {this.props.handleInput}
            />
            <InputField
                id = "myCurrentIncome"
                label = "Quanto você ganha hoje por mês?"
                handleInput = {this.props.handleInput}
            />
            <InputField
                id = "myCurrentMonthlySavings"
                label = "Quanto você consegue guardar todo mês?"
                handleInput = {this.props.handleInput}
            />
            <InputField
                id = "myCurrentMonthlyCost"
                label = "Qual o seu custo de vida atual?"
                handleInput = {this.props.handleInput}
            />
            </QuestionChunk>

            </div>
         );
    }
}

export default InputContainer;