import './CombatPage.css';
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


function CombatPage({player, setPlayer, enemy, setEnemy}) {

    function enemyTakeDamage(enemy, player) {
        enemy.takeDamage(player.damage);
        setEnemy(new Enemy(enemy));
        console.log(enemy); 
        if (enemy.defeated) {
            player.levelUp(); //turn into method in player
            //player.getLoot();
            console.log("You Win!");
            console.log("Player Level: ", player.level)
        }
    }

    function playerHeal (player) {
        player.heal(15);
        setPlayer(new Player(player));
    }
    console.log(enemy);
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
                <button type="button" className="combatButton heal" onClick={() => playerHeal(player)}>Heal ({player.potions}) </button>
            </div>
        </div>
    );
    
}

export default CombatPage;