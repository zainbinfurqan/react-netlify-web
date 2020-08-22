import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [x] = useState(0)

  useEffect(() => {
    console.log('I will run on every reder')
  })

  useEffect(() => {
    console.log('I will run after first reder like (componentDidMount)')
  }, [])

  useEffect(() => {
    console.log('I will run when ever the x value change')
  }, [x])

  useEffect(() => {
    console.log('statement outside return will run every time if use effect is not has any depende state or null array ')
    return () => {
      console.log('hello im useEffect return function will be run on component unmount/end/finishing state')
    }
  })

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
