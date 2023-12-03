import './HomePage.css';


//import { useState } from 'react';

/*
    the main home page of the game. The map shows the different enemies available to fight (marked by skull icon on the map)
    right now there is only one. 
    
*/



function EnemyButtons({handleClick, world_level}) {
    switch(world_level) {
        case 1:
            return (
                <button type="button" className="enemyButton firstEnemy" onClick={handleClick}></button>
            );
        case 2:
            return (
                <div>
                    <button type="button" className="enemyButton firstEnemy defeatedEnemy"></button>
                    <button type="button" className="enemyButton secondEnemy" onClick={handleClick}></button>
                </div>
            );
        default:
            console.log("Error: no enemy chosen");
    }
}

/*

if


function EnemyButton({handleClick, enemy}) {
    <button type="button" 
        className={`enemyButton ${enemy.className}`}
        onClick={handleClick}>
    </button>
}
*/
function HomePage({onEnemyClick, player, enemyData}) {

    let goblin = enemyData[0];
    let orc = enemyData[1];

    return (
        <div>
            <div className="header">
                <h1>My Game</h1>
                <p>this is my game</p>
                <p>Enemies: </p>
                <ul>
                    <li>{goblin.name}</li>
                    <li>{orc.name}</li>
                </ul>
            </div>
            <div className="game-container">
                <div id="GameMap">
                    <EnemyButtons handleClick={onEnemyClick} world_level={player.level} />
                </div> 
                <div className="game-menu inventory">
                    <h4>Inventory</h4>
                    <p id="gold">Gold: </p>
                    <p>Health Potions: {player.potions}</p>
                </div>
                <div className="game-menu gear">
                    <h4>Gear</h4>
                    <p>Weapon: {player.weapon}</p>
                    <p>Armor: {player.armor}</p>
                </div>
                <div className="game-menu stats">
                    <h4>Stats</h4>
                    <p>Health: {player.maxHealth}</p>
                    <p>Damage: {player.damage}</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;