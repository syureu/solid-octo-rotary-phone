import { useState } from "react";

function Square({ value, onSquareClick, isWinNumber }) {
  let winStyle = {};
  if (isWinNumber()) {
    winStyle = { border: "3px solid #999" };
  }
  return (
    <button className="square" onClick={onSquareClick} style={winStyle}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winnerInfo = calculateWinner(squares);
  let status;
  if (winnerInfo) {
    status = "Winner: " + winnerInfo.winner;
  } else if (!squares.includes(null)) {
    status = "Draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function makeBoard() {
    let row = [];
    for (let i = 0; i < 3; ++i) {
      let column = [];
      for (let j = 0; j < 3; ++j) {
        column.push(
          <Square
            value={squares[i * 3 + j]}
            onSquareClick={() => handleClick(i * 3 + j)}
            isWinNumber={() => {
              if (winnerInfo) {
                return winnerInfo.winNumber.includes(i * 3 + j);
              } else {
                return false;
              }
            }}
          />
        );
      }
      row.push(<div className="board-row">{column}</div>);
    }

    return (
      <>
        <div className="status">{status}</div>
        {row}
      </>
    );
  }

  return makeBoard();
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [movesAsending, setMovesAsending] = useState(true);

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    if (!movesAsending) {
      move = history.length - (move + 1);
    }
    let description;
    if (currentMove === move) {
      description = "You are at move #" + move;
    } else if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  const sortingButtonMessage = movesAsending
    ? "show Descending"
    : "show Ascending";

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
      <div>
        <button
          onClick={() => {
            setMovesAsending(!movesAsending);
          }}
        >
          {sortingButtonMessage}
        </button>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winNumber: [a, b, c],
        winner: squares[a],
      };
    }
  }
  return null;
}
