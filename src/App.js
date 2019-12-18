import React from 'react';
import logo from './logo.svg';
import Landing from './components/containers/Landing/Landing.js'
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Landing />
      </header>
    </div>
  );
}

export default App;
