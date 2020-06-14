import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const {transactions} = useContext(GlobalContext)

    const allAmounts = transactions.map(transaction=>{return (transaction.amount)});
    console.log(transactions);
    
    const totalAmount = allAmounts.reduce((total, curAmount)=>(total+=curAmount), 0).toFixed(2); 

    return (
        <>
            <h4>Your Balance</h4>
            <h1>Rs. {totalAmount}</h1>
        </>
    )
}
