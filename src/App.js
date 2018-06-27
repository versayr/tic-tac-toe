import React, { Component } from 'react';
import './App.css';
import Square from './components/square';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tic Tac Toe</h1>
        </header>
        <div id="gameBoard">
          <div className="row">
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row">
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row">
            <Square />
            <Square />
            <Square />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
