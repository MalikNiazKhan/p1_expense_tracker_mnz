import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';
import { Transaction } from '../components/Transaction';


export const TransactionsList = ({transactionType}) => {

    const {transactions} = useContext(GlobalContext);

    return (
        <>
        <ul className="list">
            {
                transactions
                .filter(t => t.type === transactionType)
                .map( transaction => {
                    return(<Transaction key={transaction.id} transaction={transaction} />);
                })
            }

        </ul>
        </>   
    )
}
