import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="w-20 h-20 md:w-24 md:h-24 border-2 border-gray-800 text-2xl md:text-3xl font-bold flex items-center justify-center bg-gray-100 hover:bg-blue-100 transition-all duration-200 ease-in-out"
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
    nextSquares[i] = xIsNext ? "❌" : "⭕";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? `🎉 Winner: ${winner}`
    : `Next Player: ${xIsNext ? "❌ X" : "⭕ O"}`;

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{status}</h3>

      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {squares.map((val, idx) => (
          <Square key={idx} value={val} onSquareClick={() => handleClick(idx)} />
        ))}
      </div>

      <button
        className="btn btn-primary mt-3 px-4 py-2 text-lg"
        onClick={resetGame}
      >
        Restart Game
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const App = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 text-3xl md:text-4xl font-bold">Tic Tac Toe 🎮</h1>
      <Board />
    </div>
  );
};

export default App;
