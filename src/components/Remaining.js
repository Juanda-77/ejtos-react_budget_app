import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    const remaining = budget - totalExpenses;

    return (
        <div className={`alert ${remaining > 0 ? 'alert-success' : 'alert-danger'}`}>
            <span>Remaining: {currency}{remaining}</span>
        </div>
    );
};

export default Remaining;


//Aquí, está utilizando la función de reducción para obtener un total de todos los costos, asignando esto a una variable y mostrando la variable en su JSX. Ahora, cada vez que el usuario agrega un gasto, esto hace que el estado se actualice, lo que hará que todos los componentes conectados al contexto se vuelvan a representar y se actualicen con nuevos valores.