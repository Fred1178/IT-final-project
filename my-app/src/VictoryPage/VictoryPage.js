import './VictoryPage.css';

//need to figure out how to display enemy loot
function VictoryPage({onReturnClick, enemy, player}) {
    /*
    const victoryText = [ ];
    function addText(victoryText, onReturnClick, enemy, player) {
        const text = victoryText;
        text.push(`You defeated the ${enemy.name}!`);
        text.push(`You got: `);
        text.push(`${enemy.loot.potions} potion(s)`);
        return text;
    }
*/
   

    //<addText victoryText={victoryText} onReturnClick={onReturnClick} enemy={enemy} player={player} />

    return (
        <div className="victoryScreen">
            <p>You won!</p>
            <p>You got: </p>
            <p>{enemy.loot.potions} potion(s)</p>
            <p>{enemy.loot.gold} gold</p>
            
            <p>You feel yourself grow stronger!</p>
            <p>You leveled up to level {player.level}</p>
            <p>Your damage increased to {player.damage}</p>
            <p>Your max health increases to {player.maxHealth}</p>
            <button type="button" onClick={onReturnClick}>Return</button>
        </div>
    );
}

export default VictoryPage;