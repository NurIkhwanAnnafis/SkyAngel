import React from 'react';

const View = props => (
  <div className="App m-auto">
    <header className="App-header" id="App-header">
      {props.isStart && (
        <div className="player-status">
            <p className="m-0">Fuel: {props.timer}</p>
            <p className="m-0">Score: {props.score}</p>
        </div>
      )}
      {!props.isStart && (
        <>
          <h1 className="mb-5">Sky Angel</h1>
          <button type="button" onClick={props.handleButtonStart}>Start Game</button>
          <button type="button" onClick={props.handleButtonListScore}>Score</button>
        </>
      )}
      <img 
          id="Player" 
          src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-plane-512.png" 
          className="App-logo" 
          alt="Player"
          style={props.isStart ? { display: 'block', left: '50%', top: '50%' } : { display: 'none', left: '-60px' }}
      />
  </header>
</div>
)

export default View;