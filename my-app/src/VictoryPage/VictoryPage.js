import './VictoryPage.css';

//need to figure out how to display enemy loot
function VictoryPage({onReturnClick, enemy}) {
    return (
        <div className="victoryScreen">
            <p>You Won!</p>
            <p>You got: </p>
            <p>{enemy.loot.potions} potion(s)</p>
            <p>{enemy.loot.gold} gold</p>
            <button type="button" onClick={onReturnClick}>Return</button>
        </div>
    );
}

export default VictoryPage;