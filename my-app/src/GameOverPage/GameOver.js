import './GameOver.css';

function GameOverPage({onRetryClick}) {
    return (
        <div className="gameOverScreen">
            <p>You Have been defeated</p>
            <button type="button" onClick={onRetryClick}>Try Again</button>
        </div>
    );
}

export default GameOverPage;