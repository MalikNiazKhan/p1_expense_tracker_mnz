import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const {transactions} = useContext(GlobalContext)

    const allAmounts = transactions.map(transaction=>{return (transaction.amount)});
    // console.log(transactions);
    
    const totalAmount = allAmounts.reduce((total, curAmount)=>(total+=curAmount), 0).toFixed(2); 

    return (
        <div className="inc-exp-container">
            <h1>Your Balance</h1>
            <h1>Rs. {totalAmount}</h1>
        </div>
    )
}
