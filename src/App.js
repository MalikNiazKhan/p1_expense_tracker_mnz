import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenseCard } from './components/IncomeExpenseCard';
import { TransactionsList } from './components/TransactionsList';
import { TransactionForm } from './components/TransactionForm';

import { GlobalContext, GlobalProvider } from './context/GlobalState';
// This is only on the master branch...
function App() {
  return (
    <GlobalProvider>
          <Header />
          <div className="container">     
            <Balance />
            <IncomeExpenseCard />
            <TransactionsList />
            <TransactionForm />
          </div>
    </GlobalProvider>
  );
}

export default App;
