import './HomePage.css';
/*
    the main home page of the game. The map shows the different enemies available to fight (marked by skull icon on the map)
    right now there is only one. 
    
*/
function HomePage({onEnemyClick}) {
    return (
        <div class="game-container">
            <div id="GameMap">
                <button type="button" class= "enemyButton firstEnemy" onClick={onEnemyClick}></button>
            </div> 
            <div class="game-menu inventory">
                <h4>Inventory</h4>
                <p id="gold">Gold: </p>
                <p>Health Potions: </p>
            </div>
            <div class="game-menu gear">
                <h4>Gear</h4>
                <p>Weapon: </p>
                <p>Armor: </p>
            </div>
            <div class="game-menu stats">
                <h4>Stats</h4>
                <p>Health: </p>
                <p>Damage: </p>
            </div>
    </div>
    );
}

export default HomePage;