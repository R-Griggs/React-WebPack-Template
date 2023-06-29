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

  let player1Ready = false, player2Ready = false;

  useEffect( () =>{
    const p1Btn = document.getElementById('p1Btn');
    const p2Btn = document.getElementById('p2Btn');

    p1Btn.addEventListener('click', (e) => playerIsReady((e.target as HTMLElement).id));
    p2Btn.addEventListener('click', (e) => playerIsReady((e.target as HTMLElement).id));

    //cleanup
    return () => {
      p1Btn.removeEventListener('click', (e) => playerIsReady((e.target as HTMLElement).id));
      p2Btn.removeEventListener('click', (e) => playerIsReady((e.target as HTMLElement).id));
    }
  }, 
  [document.getElementById('p1Btn'), document.getElementById('p1Name'), playerInfo]);

  function playerIsReady(btnID: string) {
    
    const p1Name = (document.getElementById('p1Name') as HTMLInputElement).value;
    const p2Name = (document.getElementById('p2Name') as HTMLInputElement).value;
    console.log(`player1 name: ${p1Name} \n player2 name: ${p2Name}`);
    //update player name in state
    //update button display to none
    if(btnID === 'p1Btn') {
      setPlayerInfo((prevState) => (
        {
          ...prevState,
          player1: p1Name
        }
      ))
      document.getElementById(`${btnID}`).setAttribute('display', 'none');
    }
    else if(btnID === 'p2Btn') {
      setPlayerInfo((prevState) => ({
        ...prevState,
        player2: p2Name
      }))
    }
    const btnToHide = document.getElementById(`${btnID}`);
    btnToHide.style.display = 'none';
  }

  return(
    <section id="gameControls">
      <div className="playerInput">
          <input id='p1Name' type='text' placeholder='Player 1'></input>
          <input id='p2Name' type='text' placeholder='Player 2'></input>
      </div>
      <div className="playerInput">
          <button id='p1Btn'>Player 1 Ready</button>
          <button id='p2Btn'>Player 2 Ready</button>
      </div>

    </section>
  );
}

export default GameControls;