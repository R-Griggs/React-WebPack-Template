import React from 'react';

const App: React.FC  = () => {
  console.log('App loaded');
  return (
    <h1>App Loaded</h1>
  );
};
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
