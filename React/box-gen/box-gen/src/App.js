
import React, { useState } from 'react';

import './App.css';

import DisplayForm from './components/DisplayForm';
import Box from './components/Box';

function App() {
  const [boxes, setState] = useState([]);
  return (
    <div className="App">
      <DisplayForm value={boxes} setValue={setState} />
      {boxes.map((box, index) => { //maping for (value,index)
        return (
          <div key={index}>
            <Box value={box} />
          </div>
        );
      })}
    </div>
  );
}

export default App;