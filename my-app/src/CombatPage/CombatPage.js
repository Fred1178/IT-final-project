import './CombatPage.css';
import { useState } from 'react';
import Enemy from '../models/Enemy.js';
import Player from '../models/Player.js';





function PlayerComponent({name, level, health, maxHealth}) {
    return (
        <div className="player">
                <p className="name">{name}: Lv.{level}</p>
                <p>Health: {health} / {maxHealth}</p>
        </div>
    );
}

function EnemyComponent({name, imgURL, imgAlt, health, maxHealth}) {
    return (
        <div className="enemy">
            <p className="name"> {name}</p>
            <div className="image">
                <img src={imgURL} alt={imgAlt}/>
            </div>
            <p className="health">Health: {health} / {maxHealth}</p>
        </div>
    );
}

/*
    combatLog = [
        "...",
        "..."
    ]

 */

//shows the combat log
function ConsoleComponent({combatLog}) {
    return (
        <div id="combat-log">
            {combatLog.map((logEntry) => (<p>{logEntry}</p>))}
        </div>
    );
}

function enemyTakeDamage(enemy, setEnemy, player, setPlayer, onVictory, onDefeat, combatActions, setCombatActions) {
    const combatLog = [];

    enemy.takeDamage(player.damage);
    setEnemy(new Enemy(enemy));
    combatLog.push(`${enemy.name} took ${player.damage} points of damage!`);

    player.takeDamage(enemy.damage);
    setPlayer(new Player(player));
    combatLog.push(`${player.name} took ${enemy.damage} points of damage!`);

    if (enemy.defeated) {
        combatLog.push(`${enemy.name} is defeated!`);
        player.levelUp();
        combatLog.push(`${player.name} levels up to level ${player.level}`);
        // resets player health
        player.health = player.maxHealth;
        player.maxHealth = player.maxHealth + 20;
        combatLog.push(`${player.name}'s max health increases to ${player.maxHealth}`);
        // gets loot and adds it to player
        player.getLoot(enemy.loot.potions, enemy.loot.gold);
        combatLog.push(`${player.name} takes ${enemy.loot.potions} potions and ${enemy.loot.gold} pieces of gold.`);
        setPlayer(new Player(player));

        // onVictory(); //takes player to victory screen

    }

    if (player.defeated) {
        combatLog.push(`${player.name} is defeated by ${enemy.name}!`);
        combatLog.push("TRY AGAIN...");
        //resets player health and potions;
        player.health = player.maxHealth;
        setPlayer(new Player(player));

        //reset enemy health
        enemy.health = enemy.maxHealth;
        setEnemy(new Enemy(enemy));

        onDefeat(); //takes player to game over screen
    }

    setCombatActions(combatActions.concat(combatLog));
}

function playerHeal(player, setPlayer, combatActions, setCombatActions) {
    player.heal(10); // maybe have an object for health potions, with a property being heal amount
    setCombatActions([...combatActions, `${player.name} drinks a potion and gains 10 health.`]);
    setPlayer(new Player(player));
}


function CombatPage({player, setPlayer, enemy, setEnemy, onVictory, onDefeat}) {
    const [combatActions, setCombatActions] = useState([]);
    // when action is taken, it is added to combatActions string
    console.log(enemy);
    return (
        <div>
            <div className="header">
                <h1>My Game</h1>
                <p>this is my game</p>
            </div>
            <div className="game-container">
                <PlayerComponent name={player.name} level={player.level} health={player.health} maxHealth={player.maxHealth}/>
                <div className="combatLog">
                    <ConsoleComponent playerName={player.name} enemyName={enemy.name} 
                                      playerDamage={player.damage} enemyDamage={enemy.damage}
                                      combatLog={combatActions}/>
                </div>
                <EnemyComponent name={enemy.name} imgURL={enemy.img} imgAlt={enemy.name} health={enemy.health} maxHealth={enemy.maxHealth}/>
                <button
                    type="button"
                    className="combatButton attack"
                    onClick={() => enemyTakeDamage(enemy, setEnemy, player, setPlayer, onVictory, onDefeat, combatActions, setCombatActions)}
                >Attack</button>
                <button
                    type="button"
                    className="combatButton heal"
                    onClick={() => playerHeal(player, setPlayer, combatActions, setCombatActions)}
                >Heal ({player.potionNum}) </button>
            </div>
        </div>
    );
    
}

export default CombatPage;