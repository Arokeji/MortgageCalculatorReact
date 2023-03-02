import './Field.scss';
import React, { forwardRef } from 'react';

const Field = forwardRef(({ initialAmount, stepsAmount, labelText}, ref) => {

    const [amount, setAmount] = React.useState(initialAmount);

    const amountDecrement = () => {
        setAmount(amount - stepsAmount);
    }

    const amountIncrement = () => {
        setAmount(amount + stepsAmount);
    }

    React.useEffect(() => {
        Number.isInteger(initialAmount) ? 
            ref.current.value = amount : 
            ref.current.value = (Math.round(amount * 100) / 100).toFixed(2);
    }, [amount, initialAmount, ref]);

    return (

        <label>{ labelText }
            <div>
                <button onClick={amountDecrement}>-</button>
                <input type='number' ref={ ref } defaultValue={ initialAmount } step={1000} />
                <button onClick={amountIncrement}>+</button>
            </div>
        </label>

    );
});

export default Field;