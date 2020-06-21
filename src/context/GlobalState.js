import React, { createContext, useReducer, Children } from 'react'

//create initial state

const initialState ={
   transactions: [
       {id:1, description: 'Income1', transactionAmount: 1000 },
       {id:2, description: 'Exp 1', transactionAmount: -100 },
       {id:3, description: 'Income2', transactionAmount: 1000 },
       {id:4, description: 'Exp 2', transactionAmount: -10 },
   ]
}

//Create the Global Context

export const GlobalContext = createContext(initialState);

// Create a Provider for the Global context 

export const GlobalProvider = ({childeren})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
        }>
            {Children}
        </GlobalContext.Provider>
    );
}