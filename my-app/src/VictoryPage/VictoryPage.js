import './VictoryPage.css';
import { useState } from 'react';


function VictoryPage({onReturnClick, enemy, player}) {

    const [showLevelUp, setShowLevelUp] = useState(false);

    return (
        <div className="victoryScreen">
            <div>
                <p>You defeated the {enemy.name}!</p>
                <p>You got: </p>
                <p>{enemy.loot.potions} potion(s)</p>
                <p>{enemy.loot.gold} gold</p>
                <button type="button" 
                    onClick={() => setShowLevelUp(!showLevelUp)}> Continue </button>
            </div>
            

            {showLevelUp && 
                <div>
                    <p>You feel yourself grow stronger!</p>
                    <p>You leveled up to level {player.level}</p>
                    <p>Your damage increased to {player.damage}</p>
                    <p>Your max health increases to {player.maxHealth}</p>
                    <button type="button" onClick={onReturnClick}>Return</button>
                </div>
            }
        </div>
    );
}

export default VictoryPage;

