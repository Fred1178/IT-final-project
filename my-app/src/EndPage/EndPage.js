import './EndPage.css';

function EndPage({resetGame, onRestartClick}) {
    resetGame();
    return (
        <div className="endScreen">
            <p>You have reached the end of the demo!</p>
            <p>Thank you for Playing!</p>
            <button type="button" onClick={onRestartClick}>Play again?</button>
        </div>
    );   
}

export default EndPage;