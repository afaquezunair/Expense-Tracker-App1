import React from 'react';
import './App.css';

//import Components
 import { Header } from './components/Header'
 import { Balance } from './components/Balance'
 import { AccountSummary } from './components/AccountSummary'
 import { TransactionHistory } from './components/TransactionHistory'
 import { AddTransaction } from './components/AddTransaction'
 //import { Demo } from './components/Demo' 
 function App() {
  return (
    <div>
      <Header />
      <div className="container">
      <Balance />
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />
   
     </div>
    
    </div>

  );
}

export default App;
