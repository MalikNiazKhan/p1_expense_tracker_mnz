import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
//Initail Global State
const initialState = {
    transactions: [
        {id:1, text: 'Salary',  amount:100000},
        {id:2, text: 'Phone',   amount:  -40000},
        {id:3, text: 'Books',   amount:   -3000},
        {id:4, text: 'Camera',  amount:  -20000},
        {id:5, text: 'Software sold', amount:200000}
    ]
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