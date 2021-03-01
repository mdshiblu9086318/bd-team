import React, { useEffect, useState } from 'react';
import PlayerData from '../../fakeData/fakeData.json'
import PlayerInformation from '../PlayerInformation/PlayerInformation';
import SelectionContent from '../SelectionContent/SelectionContent';
import './PlayerContainer.css'
const PlayerContainer = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        setPlayers(PlayerData)
    })
    const [addPlayer, setAddPlayer] = useState([])
    const handleAddPlayer = (player) =>{
        const newAddPlayer = [...addPlayer, player]
        setAddPlayer(newAddPlayer)
    }
    return (
        <div className="player-container">
            <div className="player-content">
                {
                    players.map(player => <PlayerInformation player={player} handleAddPlayer={handleAddPlayer} key={player.id}></PlayerInformation>)
                }
            </div>
            <div className="select-player-content">
                <SelectionContent addPlayer={addPlayer}></SelectionContent>
            </div>
        </div>
    );
};

export default PlayerContainer;