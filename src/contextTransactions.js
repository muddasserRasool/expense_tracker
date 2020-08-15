import React, { createContext, useReducer } from 'react';
import TransactionReducer from './transReducer';

const initialTransactions = [
    { amount: 200, desc: "cash" },
    { amount: 100, desc: "books" },
    { amount: 300, desc: "cash" }
]

export const TransactionContext = createContext(initialTransactions);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TransactionReducer, initialTransactions);
    function addTransaction (transaction) {
        dispatch({
            type: 'ADD-TRANSACTION',
            payload: transaction
        })
    }
    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction

        }}>
            {children}
        </TransactionContext.Provider>
    );
}



