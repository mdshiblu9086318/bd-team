import React from 'react';
import './SelectionContent.css';

const SelectionContent = (props) => {
    const addPlayer = props.addPlayer
    const totalSalary = addPlayer.reduce((totalSalary,perPersonSalary) => totalSalary + perPersonSalary.salary,0)
    return (
        <div className="selected-content">
            <h1>Selected Player</h1>
            <h2>Number of player : {addPlayer.length}</h2>
                {
                addPlayer.map(player => <h3 className="selected-player">{player.name} : {player.salary}</h3>)
                }
            <h4>Salary of all players : {totalSalary}</h4>
        </div>
    );
};

export default SelectionContent;