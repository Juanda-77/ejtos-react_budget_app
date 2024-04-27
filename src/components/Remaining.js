import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;

//Aquí, está utilizando la función de reducción para obtener un total de todos los costos, asignando esto a una variable y mostrando la variable en su JSX. Ahora, cada vez que el usuario agrega un gasto, esto hace que el estado se actualice, lo que hará que todos los componentes conectados al contexto se vuelvan a representar y se actualicen con nuevos valores.