import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

//En el fragmento de código anterior, utilizamos el gancho useState para crear una variable de estado llamada newBudget e inicializarla con el valor actual de presupuesto. También estamos definiendo una función llamada handleBudgetChange que actualiza el valor de newBudget cuando el usuario cambia el valor del campo de entrada. Luego configuramos el atributo de valor del campo de entrada en newBudget y agregamos un detector de eventos onChange que llama a handleBudgetChange cuando el usuario cambia el valor del campo de entrada. Aquí, está utilizando las clases de Bootstrap Alert para brindar un bonito fondo gris agregando algo de texto y codificando un valor.
