import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="square border border-dark d-flex align-items-center justify-content-center fs-3 fw-bold"
      style={{
        width: '80px',
        height: '80px',
        margin: '5px',
        backgroundColor: '#f8f9fa',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      }}
    >
      {value}
    </button>
  );
}

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status = winner
    ? `🎉 Winner: ${winner}`
    : `Next Player: ${xIsNext ? '❌ X' : '⭕ O'}`;

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="text-center">
      <h3 className="my-3">{status}</h3>

      <div className="d-flex flex-column align-items-center">
        <div className="d-flex">{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
        <div className="d-flex">{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
        <div className="d-flex">{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
      </div>

      <button
        className="btn btn-primary mt-3"
        onClick={resetGame}
      >
        Restart Game
      </button>
    </div>
  );

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onSquareClick={() => handleClick(i)}
      />
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  for (let [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const App = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Tic Tac Toe 🎮</h1>
      <Board />
    </div>
  );
};

export default App;
