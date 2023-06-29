import React from 'react';
import Board from './components/Board';


const App: React.FC  = () => {
  console.log('App rendered');
  return (
    <div id="appContainer">
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
};

export default App;