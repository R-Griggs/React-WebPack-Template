import React from 'react';
import Board from './components/Board';
// import './styles.css';

const App: React.FC  = () => {
  console.log('App loaded');
  return (
    <div id="appContainer">
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
};

export default App;