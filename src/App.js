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
    this.mark = this.mark.bind(this);
  }

  mark() {
    alert(this.state.currentPlayer);
    return;
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
            <Square mark={this.mark}/>
            <Square mark={this.mark}/>
            <Square mark={this.mark}/>
          </div>
          <div className="row">
            <Square mark={this.mark}/>
            <Square mark={this.mark}/>
            <Square mark={this.mark}/>
          </div>
          <div className="row">
            <Square mark={this.mark}/>
            <Square mark={this.mark}/>
            <Square mark={this.mark}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


//  createBoard() {
//   let row, column;
//   let rows     = 3;
//   let columns  = 3;
//   let newBoard = [];
//
//   for (row = 0; row < rows; row++) {
//     let newRow   = [];
//     for (column = 0; column < columns; column++) {
//       newRow.push({occupied: null});
//     }
//     newBoard.push(newRow);
//   }
//   console.log(newBoard);
//   this.setState({board: newBoard});
// }
