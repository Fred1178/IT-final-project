import './CombatPage.css';
import Enemy from  './Enemy.js';
import { useState } from 'react';


const Player = {
    name: "You",
    img: "",
    level: 1,
    health: 100,
    maxHealth: 100,
    armor: "none",
    damage: 20
};


const Goblin = new Enemy("Goblin", "images/goblin.jpg", 50, 50, 15);
const Orc = new Enemy("Orc", "",100, 100, 30);

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


// selects which enemy you fight, based on the player level
function chooseEnemy(level) {
    switch(level) {
        case 1:
            return (Goblin);
        case 2:
            return (Orc);
        default:
            console.log("Error: no enemy chosen");
    }
}

function CombatPage() {
    // eslint-disable-next-line
    const [player, _setPlayer] = useState(Player);
    const [enemy, setEnemy] = useState(chooseEnemy(player.level));
    

    function enemyTakeDamage(enemy, player) {
        enemy.health = enemy.health - player.damage;
        setEnemy(enemy);
        /*
        the console shows the enemy as losing health. The webpage doesn't show it
        */
        console.log(enemy); 
        if (enemy.health <= 0) {
            console.log("You Win!");
        }
    }


    return (
        <div>
            <div className="header">
                <h1>My Game</h1>
                <p>this is my game</p>
            </div>
            <div className="game-container">
                <PlayerComponent name={player.name} level={player.level} health={player.health} maxHealth={player.maxHealth}/>
                <div className="log"></div>
                <EnemyComponent name={enemy.name} imgURL={enemy.img} imgAlt={enemy.name} health={enemy.health} maxHealth={enemy.maxHealth}/>
                <button type="button" className="combatButton attack" onClick={() => enemyTakeDamage(enemy, player)}>Attack</button>
                <button type="button" className="combatButton heal">Heal (10) </button>
            </div>
        </div>
    );
    
}

export default CombatPage;