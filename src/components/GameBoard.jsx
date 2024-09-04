const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function GameBoard({ onSelectSquare, turns }) {
    let gameboard = initialGameBoard;

    for (const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameboard[row][col] = player;
    };
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSquareClick(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard.map(nestedArray => [...nestedArray])]
    //         updatedGameBoard[rowIndex][colIndex] = activeSymbol;
    //         return updatedGameBoard;
    //     });

    //     onSelectSquare();
    // }

  return (
    <ol id="game-board">
        {gameboard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) => 
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={gameboard[rowIndex][colIndex] !== null}>{col}</button>
                        </li>
                    )}
                </ol>
            </li>
        )}
    </ol>
  )
}

export default GameBoard