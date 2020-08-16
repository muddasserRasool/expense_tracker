import React, { createContext, useReducer } from 'react';
import TransactionReducer from './transReducer';

const initialTransactions = [
    { id:1, amount: +200, desc: "cash" },
    { id:2, amount: -100, desc: "Books Purchase" },
    { id:3, amount: 300, desc: "cash" }
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
    function delTransaction (id) {
        console.log(id)
        dispatch({
            type: 'DEL-TRANSACTION',
            payload: id
        })
    }
    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            delTransaction

        }}>
            {children}
        </TransactionContext.Provider>
    );
}



