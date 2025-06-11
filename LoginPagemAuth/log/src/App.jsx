import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { LoginProvider } from './contexts/LoginContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <LoginProvider>
      <LoginForm />
    </LoginProvider>
    </BrowserRouter>
  );
}

export default App;