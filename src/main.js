import React, { useState, useContext } from 'react';
import { TransactionContext } from './contextTransactions';
import './App.css';

function Main() {
    let { transactions } = useContext(TransactionContext);
    const { addTransaction } = useContext(TransactionContext);
    console.log(transactions)
    console.log(transactions.length)


    let [newAmount, setnewAmount] = useState(0);
    let [newDesc, setnewDesc] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        })
        setnewDesc('')
        setnewAmount(0)
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }
    return (
        <div className="container">
            <h1 className="tracker">Expense Tracker</h1>
            <h2>Your Balance<br /> ${getIncome() + getExpense()}</h2>
            <div className="expense-container">
                <h3>INCOME<br /> ${getIncome()}</h3>
                <h3>EXPENSE<br /> ${getExpense()}</h3>
                {console.log(getIncome())}
            </div>
            <h3>History:</h3>
            <ul className="expense-list">
                {transactions.map((transaction, index) => {
                    return (
                        <li key={index}>
                            <span> {transaction.desc} </span>
                            <span> {transaction.amount} </span>
                            <button className="delete-btn">X</button>
                        </li>
                    )
                })}
            </ul>
            <hr />
            <h3>Add New Transactions</h3>
            <hr />
            <form className="Transaction-form" onSubmit={handleSubmit}>
                <label>
                    Text <br />
                    <input type="text" value={newDesc} required placeholder="Enter Transaction details" onChange={(e) => setnewDesc(e.target.value)} />
                </label>
                <br />
                <label>
                    Enter Amount: (+ sign for income and - sign for expense) <br />
                    <input type="number" value={newAmount} required placeholder="Enter Amount" onChange={(e) => setnewAmount(e.target.value)} />
                </label>
                <br />
                <input className="btn" type="submit" value="Add Transaction" />
            </form>
        </div >
    );
}
export default Main;