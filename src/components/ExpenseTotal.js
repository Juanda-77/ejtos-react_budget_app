import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;

// Aquí, está utilizando la función de reducción para obtener un total de todos los costos, asignando esto a una variable y mostrando la variable en su JSX. Ahora, cada vez que el usuario agrega un gasto, esto hace que el estado se actualice, lo que hará que todos los componentes conectados al contexto se vuelvan a representar y se actualicen con nuevos valores.
