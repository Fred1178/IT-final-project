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
        case 3:
            return (
                <div>
                    <button type="button" className="enemyButton firstEnemy defeatedEnemy"></button>
                    <button type="button" className="enemyButton secondEnemy defeatedEnemy"></button>
                    <button type="button" className="enemyButton thirdEnemy" onClick={handleClick}></button>
                </div>
            )
        default:
            console.log("Error: no enemy chosen");
    }
}

/*
//maybe something like if enemy.level is less than world_level, className={firstEnemy defeatedEnemy}
function EnemyButton({handleClick, world_level, enemy}) {
    return (
        <button type="button" className={`enemyButton ${enemy.className} ${(enemy.level < world_level) ? 'defeatedEnemy' : ''}`} onClick={handleClick}></button>
    );
}
*/

function HomePage({onEnemyClick, player, currentEnemy}) {

    return (
        <div>
            <div className="header">
                <h1>My Game</h1>
                <p>this is my game</p>
            </div>
            <div className="game-container">
                <div id="GameMap">
                    <EnemyButtons handleClick={onEnemyClick} world_level={player.level} enemy={currentEnemy}/>
                </div> 
                <div className="game-menu inventory">
                    <h4>Inventory</h4>
                    <p id="gold">Gold: {player.gold}</p>
                    <p>Health Potions: {player.potionNum}</p>
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