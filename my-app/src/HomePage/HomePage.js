import './HomePage.css';
/*
    the main home page of the game. The map shows the different enemies available to fight (marked by skull icon on the map)
    right now there is only one. 
    
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
                    <button type="button" className= "enemyButton firstEnemy" onClick={onEnemyClick}></button>
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