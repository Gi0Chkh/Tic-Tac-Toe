import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player"
import Log from "./components/Log";

function deriveActivePlayer(gameTurns) {
  let currPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currPlayer = 'O';
  };

  return currPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currPlayer = deriveActivePlayer(prevTurns);

      const updatedGameTurns = [{square: {row: rowIndex, col: colIndex}, player: currPlayer}, ...prevTurns]

      return updatedGameTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
          <ol id="players" className="highlight-player">
              <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
              <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App
