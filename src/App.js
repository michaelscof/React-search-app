import React, { Component } from 'react';
import './App.css';
import Menu from './components/router';
class App extends Component {
  render() {
    return (//jsx
      /*<div className="App">
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
      </div>*/
      <div>
        <div>React</div>
        <Menu></Menu>
        <router-outlet></router-outlet>
      </div>
    );
  }
}

export default App;
