import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export function Transaction({transaction}) {

    const { delTransaction } = useContext(GlobalContext);
    let trnSign = transaction.amount < 0?'-':'+'; 

    
    return (
        <li className={transaction.amount < 0?"minus":"plus"}>
            {transaction.text} <span>{trnSign}Rs.{Math.abs(transaction.amount)}</span>
            <button onClick={()=>delTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
