import React, { useEffect } from 'react';

interface playerInfo {
  player1: string;
  player2: string;
};

interface gameControlProps {
  gameInProgress: boolean;
  setGameInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  playerInfo: { player1: string, player2: string };
  setPlayerInfo: React.Dispatch<React.SetStateAction<playerInfo>>;
};

const GameControls: React.FC<gameControlProps> = ({ gameInProgress, setGameInProgress, playerInfo, setPlayerInfo }) => {

  console.log('Game Controls rendered');

  let player1Ready = false, player2Ready = false;

  useEffect( () =>{
    const startBtn = document.getElementById('startGame');
    startBtn.addEventListener('click', (e) => playersReady((e.target as HTMLElement).id));
    //cleanup
    return () => {
      startBtn.removeEventListener('click', (e) => playersReady((e.target as HTMLElement).id));
    }
  }, []);

  function playersReady(btnID: string) {
    
    const p1Name = (document.getElementById('p1Name') as HTMLInputElement).value;
    const p2Name = (document.getElementById('p2Name') as HTMLInputElement).value;

    //update player names in state
    setPlayerInfo(() => (
      {
        player1: p1Name,
        player2: p2Name
      }
    ))
    //hide startGame button
    document.getElementById(`${btnID}`).style.display = 'none';
    //show resetGame button
    document.getElementById('resetGame').style.display = 'block';
    //hide input fields
    const p1Input = document.getElementById('p1Name');
    p1Input.style.display = 'none';
    const p2Input = document.getElementById('p2Name');
    p2Input.style.display = 'none';
    //update player titles
    document.getElementById('p1Title').innerText = `${p1Name} \n\n X`;
    document.getElementById('p2Title').innerText = `${p2Name} \n\n O`;
    //unhide the game board
    document.getElementById('board').style.display = 'block';
  }

  return(
    <div id='controlsContainer'>
      <section className='infoContainer' id="player1InfoContainer">
        <p id='p1Title'>Player 1</p>
        <input id='p1Name' type='text' placeholder='Enter Player 1 Name'></input>
      </section>
      <section className='infoContainer' id="player2InfoContainer">
        <p id='p2Title'>Player 2</p>
        <input id='p2Name' type='text' placeholder='Enter Player 2 Name'></input>
      </section>
      <section className='infoContainer' id='startGameContainer'>
        <button id='startGame'>Start Game!</button>
        <button id='resetGame'>Reset</button>
      </section>
    </div>
  );
}

export default GameControls;