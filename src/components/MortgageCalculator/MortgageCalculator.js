import './MortgageCalculator.scss';
import React from 'react';
import Field from '../Field/Field';

const MortgageCalculator = () => {

    const [result, setResult] = React.useState(0);

    const defaultParameters = ({
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
        return {
            total: totalRef.current.value,
            funds: fundsRef.current.value,
            years: yearsRef.current.value,
            interests: interestsRef.current.value
        }
    }

    const calculateMortgage  = () => {
        const currentValues = setValues();
        console.log(currentValues);
        const totalMonths = currentValues.years * 12;
        const anualInterestsDecimal = currentValues.interests / 100;
        const monthlyInterests = anualInterestsDecimal / 12;
        const amountNeeded = currentValues.total - currentValues.funds;
        const monhtlyPayment = amountNeeded / ((1 - Math.pow(1 + monthlyInterests, -totalMonths) / monthlyInterests));
        setResult(monhtlyPayment.toFixed(2));
    };

    return (
        <>
            <Field 
                ref={ totalRef } 
                initialAmount={defaultParameters.total} 
                stepsAmount={5000} 
                labelText='Importe total de la hipoteca'
            />
            <Field 
                ref={ fundsRef } 
                initialAmount={defaultParameters.funds} 
                stepsAmount={1000} 
                labelText='Ahorros aportados'
            />
            <Field 
                ref={ yearsRef } 
                initialAmount={defaultParameters.years} 
                stepsAmount={1} 
                labelText='Plazo en años'
            />
            <Field 
                ref={ interestsRef } 
                initialAmount={defaultParameters.interests} 
                stepsAmount={0.01} 
                labelText='Intereses a plazo fijo'
            />
            <button onClick={() => calculateMortgage () }>Calcular</button>
            <p>Tu cuota mensual sería de:</p>
            { result }
        </>
    );
}

export default MortgageCalculator;

