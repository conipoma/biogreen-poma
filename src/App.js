import React from 'react';
import './App.css';
import AppRouter from './container/AppRouter/AppRouter';
import AppContextProvider from './Context/CartContext/CartContext';

export default function App () {
  return (
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  )
}
