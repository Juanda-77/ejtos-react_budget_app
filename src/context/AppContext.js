import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            let totalBudget = state.expenses.reduce((total, item) => total + item.cost, 0);
            totalBudget += action.payload.cost;
            if (totalBudget <= state.budget) {
                state.expenses = state.expenses.map(expense => {
                    if (expense.name === action.payload.name) {
                        expense.cost += action.payload.cost;
                    }
                    return expense;
                });
            } else {
                alert("Cannot increase the allocation! Out of funds");
            }
            return { ...state };

        case 'RED_EXPENSE':
            state.expenses = state.expenses.map(expense => {
                if (expense.name === action.payload.name && expense.cost - action.payload.cost >= 0) {
                    expense.cost -= action.payload.cost;
                    state.budget += action.payload.cost;
                }
                return expense;
            });
            return { ...state };

        case 'DELETE_EXPENSE':
            state.expenses.forEach(expense => {
                if (expense.name === action.payload) {
                    state.budget += expense.cost;
                    expense.cost = 0;
                }
            });
            return { ...state };

        case 'SET_BUDGET':
            state.budget = action.payload;
            return { ...state };

        case 'CHG_CURRENCY':
            return {
                ...state,
                currency: action.payload,
            };

        default:
            return state;
    }
};

const initialState = {
    budget: 2000,
    expenses: [
        { id: "Marketing", name: 'Marketing', cost: 50 },
        { id: "Finance", name: 'Finance', cost: 300 },
        { id: "Sales", name: 'Sales', cost: 70 },
        { id: "Human Resource", name: 'Human Resource', cost: 40 },
        { id: "IT", name: 'IT', cost: 500 },
    ],
    currency: '£'
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    let remaining = 0;

    if (state.expenses) {
        const totalExpenses = state.expenses.reduce((total, item) => total + item.cost, 0);
        remaining = state.budget - totalExpenses;
    }

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                budget: state.budget,
                remaining: remaining,
                dispatch,
                currency: state.currency
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
