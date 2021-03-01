import React from 'react';
import './PlayerInformation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const PlayerInformation = (props) => {
    const {image, name, role, salary} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="player-information">
            <div>
                <img src={image} alt=""/>
            </div>
            <div className="personal-information">
                <h1>{name}</h1>
                <p>{role}</p>
                <h3>{salary}</h3>
                <Button onClick={() =>handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlus}/> Add to team</Button>
            </div>
        </div>
    );
};

export default PlayerInformation;