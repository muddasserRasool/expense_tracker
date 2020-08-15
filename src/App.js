import React from 'react';
import Main from './main';
import './App.css';
import { ContextProvider } from './contextTransactions';

function App() {
  return (

    <ContextProvider>
      <Main />
    </ContextProvider>
  );
}
export default App;
