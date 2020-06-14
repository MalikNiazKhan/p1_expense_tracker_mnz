import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export function TransactionForm({transactionType}) {
    
    const [transactionText, setTransactionText] = useState('');
    const [amount, setAmount] = useState(0);

    const {transactions, addTransaction} = useContext(GlobalContext)

    const maxArr = transactions.map(x=>x.id);
    const maxId = Math.max(...maxArr);
    
    const onSubmit = (e) => {
        e.preventDefault();

        console.log(transactions);
        
        if(amount!=="0")
        {
            const newTransaction = {
                id: maxId + 1,
                text: transactionText.length>0?transactionText:"-",
                amount: (transactionType==="I"?+amount:-1*amount),
                type: transactionType
            }
            if(newTransaction.amount!==0)
            {
                addTransaction(newTransaction);
            }
        }
    }

    return (
        <>
            <h4>{transactionType==="I"?"Income Transaction":"Expense Transaction"}</h4>
            <form onSubmit={onSubmit}>
            <div className="form-control">
                <input type="text" value={transactionText} onChange={(e)=>setTransactionText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
            </form>  
        </>
    )
}
