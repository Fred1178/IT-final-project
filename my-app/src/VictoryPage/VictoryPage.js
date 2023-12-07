import './VictoryPage.css';

//need to figure out how to display enemy loot
function VictoryPage({onReturnClick}) {
    return (
        <div className="victoryScreen">
            <p>You Won!</p>
            <p>You got: </p>
            <button type="button" onClick={onReturnClick}>Return</button>
        </div>
    );
}

export default VictoryPage;