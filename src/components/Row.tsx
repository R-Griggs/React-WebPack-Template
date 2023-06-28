import React from 'react';

// import '../styles.css';

interface RowProps {
  rowID: number;
  currPlayer: number;
  setCurrPlayer: React.Dispatch<React.SetStateAction<number>>;
}

const Row: React.FC<RowProps> = ( { rowID, currPlayer, setCurrPlayer }) => {
  function handleClick(btnID: string): void {
    const btn = document.getElementById(`${btnID}`);
    if(btn.innerText !== '-') {
      return;
    }
    if(currPlayer === 1){
      btn.innerText = 'X';
      setCurrPlayer(0);
    }
    else if(currPlayer === 0) {
      btn.innerText = 'O';
      setCurrPlayer(1);
    }
    return;
  };

  const rowButtons: JSX.Element[] = [];
  for(let i = 1; i < 4; i ++) {
    const btnID = `x${i}y${rowID}`
    const newButton = <button onClick={() => handleClick(btnID)} className="rowButton" id={btnID} key={`${i}${rowID}`}> - </button>;
    rowButtons.push( newButton );

  }
  return (
  <div className='row'>
    { rowButtons }
  </div>
  );
}

export default Row;