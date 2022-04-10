import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { useState } from 'react';

function Square(props) {
  // const Square = () => {
    // const [value, setValue] = useState(null);

      return (
        <button className="square" onClick={function() { console.log(props.value); }}>
          {props.value}
        </button>
      );
  }

  function Board(props) {
  
    function renderSquare(i) {
      return <Square value={i}/>;
    }
  
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      );
  }
  
  function Game() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
  }
  
  ReactDOM.render(
    <Game/>,
    document.getElementById('root')
  );
  // ========================================