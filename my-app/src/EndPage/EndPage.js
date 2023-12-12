import './EndPage.css';

function EndPage({resetGame, onRestartClick}) {
    resetGame();
    return (
        <div>
            <p>You have reached the end of the demo!</p>
            <button type="button" onClick={onRestartClick}>Play again</button>
        </div>
    );   
}

export default EndPage;