import { useState } from "react";

import { WinnerModal } from "./components/WinnerModal";
import { Game } from "./components/Game";
import { Turn } from "./components/Turn";

import { TURNS } from "./constants";
import { checkWinnerFrom, checkEndGame } from "./logic/board";

import "./App.css";

import confetti from "canvas-confetti";


function App() {

  //~ Constantes dirigidas a estados 
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    if(boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null)
  });

  const [turn, setTurn] = useState(() => {
    const turnFormStorage = window.localStorage.getItem("turn");
    return turnFormStorage ?? TURNS.X
  });

  const [winner, setWinner] = useState(null);
  // null es que no hay un ganador, false es que hay un empate

  //& Reset game function
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  };

  //& Update board function
  const updateBoard = (index) => {
    if (board[index] || winner) return //*No update position already filled

    const newBoard = [...board]; //* update Board
    newBoard[index] = turn;
    setBoard(newBoard);

    //* Change turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //* Save the game
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);

    //* Check winner
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti(); 
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //* Even
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <Game board={board} updateBoard={updateBoard}/>
      <Turn turn={turn}/>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
