import './CombatPage.css';
import Enemy from  './Enemy.js';
import { useState } from 'react';


const Player = {
    name: "You",
    health: 100,
    maxHealth: 100,
    armor: "none",
    damage: 20
};


const Goblin = new Enemy("Goblin", "images/goblin.jpg",50, 50, 30);

/*
    why doesn't onClick work? it just sets the new health automatically
*/

function PlayerComponent({name, health, maxHealth}) {
    return (
        <div className="player">
                <p className="name">{name}</p>
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
 
function CombatPage() {
    const [player, _setPlayer] = useState(Player);
    const [enemy, setEnemy] = useState(Goblin);

    function enemyTakeDamage(enemy, player) {
        enemy.health = enemy.health - player.damage;
        setEnemy(enemy);
    }

    return (
        <div>
            <div className="header">
                <h1>My Game</h1>
                <p>this is my game</p>
            </div>
            <div className="game-container">
                <PlayerComponent name={player.name} health={player.health} maxHealth={player.maxHealth}/>
                <div className="log"></div>
                <EnemyComponent name={enemy.name} imgURL={enemy.img} imgAlt={enemy.name} health={enemy.health} maxHealth={enemy.maxHealth}/>
                <button type="button" className="combatButton attack" onClick={() => enemyTakeDamage(enemy, player)}>Attack</button>
                <button type="button" className="combatButton heal">Heal (10) </button>
            </div>
        </div>
    );
}

export default CombatPage;