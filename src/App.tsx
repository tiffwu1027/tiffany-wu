import React from 'react';
import logo from './logo.svg';
import './App.css';
import Introduction from './components/Introduction';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Introduction></Introduction>
    </div>
  );
}

export default App;
