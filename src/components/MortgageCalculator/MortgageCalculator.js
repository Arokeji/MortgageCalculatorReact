import './MortgageCalculator.scss';
import React from 'react';
import Field from '../Field/Field';

const MortgageCalculator = () => {

    const [result, setResult] = React.useState(0);

    let currentParameters = ({
        total: 150000,
        funds: 30000,
        years: 15,
        interests: 2.10
    })

    const totalRef = React.useRef();
    const fundsRef = React.useRef();
    const yearsRef = React.useRef();
    const interestsRef = React.useRef();

    const setValues = () => {
        console.log(totalRef.current.value);
        currentParameters.total = totalRef.current.value;
        currentParameters.funds = fundsRef.current.value;
        currentParameters.years = yearsRef.current.value;
        currentParameters.interests = interestsRef.current.value;
    }

    const calculateMortgage  = () => {
        setValues();
        console.log(currentParameters);
        const amountNeeded = currentParameters.total - currentParameters.funds;
        const monthlyInterests = currentParameters.interests / 12; 
        const totalMonths = currentParameters.years * 12;
        const monhtlyPayment = (amountNeeded * monthlyInterests) / (1 - Math.pow(1 + monthlyInterests, -totalMonths));
        setResult(monhtlyPayment.toFixed(2));
    };

    return (
        <>
            <Field ref={ totalRef } initialAmount={currentParameters.total} stepsAmount={5000} labelText='Importe total de la hipoteca'/>
            <Field ref={ fundsRef } initialAmount={currentParameters.funds} stepsAmount={1000} labelText='Ahorros aportados'/>
            <Field ref={ yearsRef } initialAmount={currentParameters.years} stepsAmount={1} labelText='Plazo en años'/>
            <Field ref={ interestsRef } initialAmount={currentParameters.interests} stepsAmount={0.01} labelText='Intereses a plazo fijo'/>
            <button onClick={() => calculateMortgage () }>Calcular</button>
            <p>Tu cuota mensual sería de:</p>
            { result }
        </>
    );
}

export default MortgageCalculator;

