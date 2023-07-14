import React, { useState } from 'react';
import Row from './Row';

import GameControls from './GameControls';
import MessageField from './MessageField';

const Board: React.FC = () => {
  console.log('Board rendered');
  const [currPlayer, setCurrPlayer] = useState(1);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [playerInfo, setPlayerInfo] = useState({player1: '', player2: ''});
  console.log('Player Info from Board:', playerInfo);

  const rows: React.ReactNode[] = [];
  for(let i = 1; i < 4; i++) {
    const newRow = <Row rowID={i} key={`row${i}`} currPlayer={currPlayer} setCurrPlayer={setCurrPlayer}/>
    rows.push(newRow)
  }
  return (
    <div id="boardContainer">
      <GameControls gameInProgress={gameInProgress} setGameInProgress={setGameInProgress} playerInfo={playerInfo} setPlayerInfo={setPlayerInfo} />
      <div id="board">
        { rows }
      </div>
      <MessageField />
    </div>
    
  );
}

export default Board;