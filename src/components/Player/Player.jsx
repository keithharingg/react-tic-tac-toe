import React, { useState } from 'react';

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const editPlayerName = (event) => {
    setPlayerName(event.target.value);
  };
  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input onChange={editPlayerName} value={playerName} placeholder="Your name..."></input>
        ) : (
          <span className="player-name">{playerName ? playerName : name}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;