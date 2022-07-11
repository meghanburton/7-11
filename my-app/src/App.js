import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Click the button for a surprise!
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
        >
        </a>
        <Button variant="contained"
         href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
         target="_blank"
         rel="noopener noreferrer"
         >Click here</Button>
      </header>
    </div>
  );
}

export default App;
