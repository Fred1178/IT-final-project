import './HomePage.css';
//import Player from './../CombatPage/CombatPage';
/*
    the main home page of the game. The map shows the different enemies available to fight (marked by skull icon on the map)
    right now there is only one. 
    
*/
/*
function enemyButtons({handleClick}) {
    switch(Player.level) {
        case 1:
            return (
                <button type="button" className="enemyButton firstEnemy" onClick={handleClick}></button>
            );
        case 2:
            return (
                <button type="button" className="enemyButton secondEnemy" onClick={handleClick}></button>
            );
        default:
            console.log("Error: no enemy chosen");
    }
}


<enemyButtons handleClick={onEnemyClick} level={{Player}}/>
*/



function HomePage({onEnemyClick}) {


    return (
        <div>
            <div className="header">
                <h1>My Game</h1>
                <p>this is my game</p>
            </div>
            <div className="game-container">
                <div id="GameMap">
                    <button type="button" className="enemyButton firstEnemy" onClick={onEnemyClick}></button>
                </div> 
                <div className="game-menu inventory">
                    <h4>Inventory</h4>
                    <p id="gold">Gold: </p>
                    <p>Health Potions: </p>
                </div>
                <div className="game-menu gear">
                    <h4>Gear</h4>
                    <p>Weapon: </p>
                    <p>Armor: </p>
                </div>
                <div className="game-menu stats">
                    <h4>Stats</h4>
                    <p>Health: </p>
                    <p>Damage: </p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;