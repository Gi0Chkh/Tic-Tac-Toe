import { useState } from 'react'

function Player({ name, symbol, isActive }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleEditClick() {
        setIsEditing(editing => !editing);
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
        console.log(event);
    }

    let playerTag = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        playerTag = <input type="text" required value={playerName} onChange={handleNameChange}/>
    };


    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerTag}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
        </li>
    );
}

export default Player;