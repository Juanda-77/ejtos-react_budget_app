import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyLabel = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleChangeCurrency = (selectedCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    };

    return (
        <div className='currency-dropdown'>
            <select value={currency} onChange={(e) => handleChangeCurrency(e.target.value)}>
                <option value="£">GBP</option>
                <option value="$">USD</option>
                <option value="€">EUR</option>
                <option value="¥">JPY</option>
                <option value="₹">INR</option>
            </select>
        </div>
    );
};

export default CurrencyLabel;
