import React, { Component } from 'react';
import logo from './logo.svg';
import Fadethrough from 'react-fadethrough';
import './App.css';
import one from './one.jpg';
import two from './two.jpg';
import three from './three.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Fadethrough width={ '800px' } height={ '400px' } interval={ 5000 }>
          <img src={ one } width="800" height="400" />
          <img src={ two } width="800" height="400" />
          <img src={ three } width="800" height="400" />
        </Fadethrough>
      </div>
    );
  }
}

export default App;
