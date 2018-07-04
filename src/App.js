import React, { Component } from 'react';
import './App.css';
import Square from './components/square';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 'X',
      board: []
    };
  }

  createBoard() {
    let row, column;
    let rows     = 3;
    let columns  = 3;
    let newBoard = [];

    for (row = 0; row < rows; row++) {
      let newRow   = [];
      for (column = 0; column < columns; column++) {
        newRow.push({occupied: null});
      }
      newBoard.push(newRow);
    }
    console.log(newBoard);
    this.setState({board: newBoard});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tic Tac Toe</h1>
          <span>By Bruce</span>
        </header>
        <div id="gameInfo">
          <span>{this.state.currentPlayer}'s turn</span>
        </div>
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
