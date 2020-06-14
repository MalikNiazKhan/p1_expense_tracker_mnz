import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export function TransactionForm() {
    
    const [transactionText, setTransactionText] = useState('');
    const [amount, setAmount] = useState(0);

    const {transactions, addTransaction} = useContext(GlobalContext)

    const maxArr = transactions.map(x=>x.id);
    const maxId = Math.max(...maxArr);
    
    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: maxId + 1,
            text: transactionText,
            amount: +amount
        }
        addTransaction(newTransaction);
    }

    return (


        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={transactionText} onChange={(e)=>setTransactionText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount"
                >Amount <br />
                (negative - expense, positive - income)</label
                >
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
            </form>  
        </>
    )
}
