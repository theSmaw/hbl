import React, { useEffect } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(
      () => {
        const getLesson = async () => {
          try {
            const lesson = await axios.get('http://localhost:3001/lesson/lesson-1');

            console.log({ lesson });
          } catch (e) {
            console.log({ e });
          }
        };

        getLesson();
      }
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
