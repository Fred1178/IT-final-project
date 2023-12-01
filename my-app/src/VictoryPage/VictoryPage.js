import './VictoryPage.css'
function VictoryPage({onReturnClick}) {
    return (
        <div className="victoryScreen">
            <p>You Won!</p>
            <button tpype="button" onClick={onReturnClick}>Return</button>
        </div>
    );
}

export default VictoryPage;