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

//shows the combat log
function ConsoleComponent({playerName, playerDamage, enemyName, enemyDamage}) {
    return (
        <p>{enemyName} attacks!</p>
    );
}

function CombatPage({player, setPlayer, enemy, setEnemy, onVictory}) {
    
    const combatActions = "";
    // when action is taken, it is added to combatActions string
    function enemyTakeDamage(enemy, player) {
        enemy.takeDamage(player.damage);
        setEnemy(new Enemy(enemy));
        
        player.takeDamage(enemy.damage);
        setPlayer(new Player(player));

        console.log(enemy); 
        if (enemy.defeated) {
            player.levelUp();
            // gets loot and adds it to player 
            player.getLoot();  //randomly generate loot, should it be tied to enemy class?
            console.log("You Win!");
            console.log("Player Level: ", player.level)
            onVictory(); //takes player to victory screen
            
        }

    }

    function playerHeal (player) {
        player.heal(15); // maybe have an object for potions, with a property being heal amount
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
                <div className="log">
                    <ConsoleComponent playerName={player.name} enemyName={enemy.name} 
                                      playerDamage={player.damage} enemyDamage={enemy.damage}
                                      combatLog={combatActions}/>
                </div>
                <EnemyComponent name={enemy.name} imgURL={enemy.img} imgAlt={enemy.name} health={enemy.health} maxHealth={enemy.maxHealth}/>
                <button type="button" className="combatButton attack" onClick={() => enemyTakeDamage(enemy, player)}>Attack</button>
                <button type="button" className="combatButton heal" onClick={() => playerHeal(player)}>Heal ({player.potionNum}) </button>
            </div>
        </div>
    );
    
}

export default CombatPage;