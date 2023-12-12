import './GameOver.css';

function GameOverPage({onRetryClick}) {
    return (
        <div className="gameOverScreen">
            <p>You Lost</p>
            <button type="button" onClick={onRetryClick}>Retry</button>
        </div>
    );
}

export default GameOverPage;