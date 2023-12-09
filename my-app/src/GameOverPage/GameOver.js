import './GameOver.css';

function GameOverPage({onRestartClick}) {
    return (
        <div className="gameOverScreen">
            <p>You Lost</p>
            <button type="button" onClick={onRestartClick}>Continue</button>
        </div>
    );
}

export default GameOverPage;