import './VictoryPage.css';

//need to figure out how to display enemy loot
function VictoryPage({onReturnClick, enemy}) {
    return (
        <div className="victoryScreen">
            <p>You Won!</p>
            <p>You got: </p>
            <ul>
                <li>{enemy.loot.potions} potion(s)</li>
                <li>{enemy.loot.gold} gold</li>
            </ul>
            <button type="button" onClick={onReturnClick}>Return</button>
        </div>
    );
}

export default VictoryPage;