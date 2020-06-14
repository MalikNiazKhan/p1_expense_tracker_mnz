import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
//Initail Global State
const initialState = {
    transactions: [
        {type: "I", id:1, text: 'Salary', amount:100000},
        {type: "E", id:3, text: 'Books',  amount:-10000},
    ]
    // income: [
    //     {id:1, text: 'Salary',        amount:100000},
    //     {id:2, text: 'Software sold', amount:200000}
    // ],
    // expenses: [
    //     {id:1, text: 'Phone',   amount:  -40000},
    //     {id:2, text: 'Books',   amount:   -3000},
    //     {id:3, text: 'Camera',  amount:  -20000},
    // ]
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
 
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function delTransaction(id){
        dispatch({
            type:'DEL',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD',
            payload: transaction
        });
    }
    
    return (
    <GlobalContext.Provider 
        value={{
            transactions: state.transactions, 
            delTransaction, 
            addTransaction
        }}>
        {children}
    </GlobalContext.Provider>
    );
}