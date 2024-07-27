import React, { useState } from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSquareClick(rowIndex, colIndex) {
        // setGameBoard((prevGameBoard) => );
    }

  return (
    <ol id="game-board">
        {initialGameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) => <li key={colIndex}><button onClick={handleSquareClick}></button></li>)}
                </ol>
            </li>
        )}
    </ol>
  )
}

export default GameBoard