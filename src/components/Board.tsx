import React, { useState } from 'react';
import Row from './Row';

const Board: React.FC = () => {

  const [currPlayer, setCurrPlayer] = useState(1);

  const rows: React.ReactNode[] = [];
  for(let i = 1; i < 4; i++) {
    const newRow = <Row rowID={i} key={i} currPlayer={currPlayer} setCurrPlayer={setCurrPlayer}/>
    rows.push(newRow)
  }

  return (
    <div id="board">
      { rows }
    </div>
  );
}

export default Board;