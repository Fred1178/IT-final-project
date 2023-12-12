import './VictoryPage.css';

//need to figure out how to display enemy loot
function VictoryPage({onReturnClick, enemy, player}) {
    return (
        <div className="victoryScreen">
            <p>You defeated the {enemy.name}!</p>
            <p>You leveled up to level {player.level}!</p>
            <p>Your damage increased to {player.damage}</p>
            <p>Your max health increases to {player.maxHealth}</p>
            <p>You got: </p>
            <p>{enemy.loot.potions} potion(s)</p>
            <p>{enemy.loot.gold} gold</p>
            <button type="button" onClick={onReturnClick}>Return</button>
        </div>
    );
}

export default VictoryPage;