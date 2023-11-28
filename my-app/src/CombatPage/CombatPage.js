import './CombatPage.css';
import Enemy from  './Enemy.js';


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
function takeDamage(target, attacker) {
    target.health = target.health - attacker.damage;
}



function CombatPage() {


    return (
        <div>
            <div class="header">
                <h1>My Game</h1>
                <p>this is my game</p>
            </div>
            <div class="game-container">
                <div class="player">
                    <p class="name">{Player.name}</p>
                    <p>Health: {Player.health} / {Player.maxHealth}</p>
                </div>
                <div class="log"></div>
                <div class="enemy">
                    <p class="name"> {Goblin.name}</p>
                    <div class="image">
                        <img src={Goblin.img} alt="Goblin"/>
                    </div>
                    <p class="health">Health: {Goblin.health} / {Goblin.maxHealth}</p>
                </div>
                <button type="button" class="combatButton attack" onClick={takeDamage(Goblin, Player)}>Attack</button>
                <button type="button" class="combatButton heal">Heal (10) </button>
            </div>
        </div>
    );
}

export default CombatPage;