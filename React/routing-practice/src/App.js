import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Home from './Components/Home';
import Hello from './Components/Hello';
import VarNumber from './Components/VarNumber';
function App(props) {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Home path="/" />
        <Hello path="/hello" />
        <VarNumber path="/:variable"/> 
        <VarNumber path="/:variable/:color/:color2"/> 


      </Router>
    </div>
  );
}

export default App;

