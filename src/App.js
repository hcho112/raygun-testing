import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    //Comment this console.log to get it working
    console.log('Raygun does not work here: ', {}.find(r => r));
  }

  render() {
    
    return (
      <div className="App">
        <button
          onClick={() => console.log('Raygun works here', window.onerror) || console.log({}.find(r => r))}
        >
          Manual Error
        </button>
      </div>
    );
  }
}

export default App;
