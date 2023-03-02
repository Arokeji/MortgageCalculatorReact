import './Field.scss';
import React from 'react';

const Field = ({ initialAmount, stepsAmount, labelText, ref }) => {

    const [amount, setAmount] = React.useState(initialAmount);

    const currentAmount = React.useRef(null);

    const amountDecrement = () => {
        setAmount(amount - stepsAmount);
    }

    const amountIncrement = () => {
        setAmount(amount + stepsAmount);
    }

    React.useEffect(() => {
        Number.isInteger(initialAmount) ? 
            currentAmount.current.value = amount : 
            currentAmount.current.value = (Math.round(amount * 100) / 100).toFixed(2);
    }, [amount, initialAmount]);

    return (

        <label>{ labelText }
            <div>
                <button onClick={amountDecrement}>-</button>
                <input type='number' ref={ currentAmount } defaultValue={ initialAmount } step={1000} />
                <button onClick={amountIncrement}>+</button>
            </div>
        </label>

    );
}

export default Field;