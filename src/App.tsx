import React from 'react';
import logo from './logo.svg';
import CustomSlider from './stories/PlayGround/CustomSlider';
import './App.css';
import { StyledEngineProvider } from '@mui/material';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <CustomSlider />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
