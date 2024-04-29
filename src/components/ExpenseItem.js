import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Importar iconos de Font Awesome
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10, // Aumentar en 10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10, // Disminuir en 10
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <button className="increase-button" onClick={event=> increaseAllocation(props.name)}>
                    <FaPlus />
                </button>
            </td>
            <td>
                <button className="decrease-button" onClick={event=> decreaseAllocation(props.name)}>
                    <FaMinus />
                </button>
            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;







// Aquí estás enviando una acción. Su acción contiene el tipo (para que el reductor sepa cómo actualizar el estado) y la carga útil. En este caso, está pasando el ID de este gasto (que obtiene de los accesorios cuando representa la Lista de gastos).
