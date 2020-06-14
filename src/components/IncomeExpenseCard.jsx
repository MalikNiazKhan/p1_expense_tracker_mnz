import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenseCard = () => {

    const {transactions} = useContext(GlobalContext);

    const allAmounts = transactions.map(transaction=>{return (transaction.amount)});
    const incomeTotal = allAmounts.filter(x=>x>0).reduce((total, curAmount)=>(total+=curAmount), 0).toFixed(2); 
    const expenseTotal = allAmounts.filter(x=>x<0).reduce((total, curAmount)=>(total+=curAmount), 0).toFixed(2); 


    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+Rs.{incomeTotal}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-Rs.{Math.abs(expenseTotal).toFixed(2)}</p>
            </div>
        </div>
    )
}
