import React from 'react';
import logo from './logo.svg';
import Landing from './components/containers/landing/Landing.js';
import Axios from 'axios';
import './App.scss';

function App() {

  async function post() {
    try {
      const response = await Axios('http://13.58.182.136/hey', {headers: 'Access-Control-Allow-Origin: 13.58.182.136'}, Window);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
        <Landing />
    </div>
  );
}

export default App;
