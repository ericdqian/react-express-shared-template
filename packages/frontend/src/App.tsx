import logo from './logo.svg';
import './App.css';
import React, { useMemo, useRef, useState } from 'react';
//import { testFunction } from 'shared/src/util2';
import { testFunction } from '@webapp/shared/util2';
import { Test } from '@frontend/Test';

const testSum = testFunction(1, 2);
console.log('test sum', testSum);

function App() {
  //const sum = testFunction(1, 2);
  //console.log('sum', sum);
  return (
    <div className="App">
      <header className="App-header">
        <Test></Test>
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
  );
}

export default App;
