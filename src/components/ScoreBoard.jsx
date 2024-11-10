import "./styles/ScoreBoard.css";

function ScoreBoard() {
  return (
    <div className="ScoreBoard">
      <div className="ScoreBoard__blue-player-score">0</div>
      <div>vs</div>
      <div className="ScoreBoard__red-player-score">0</div>
    </div>
  );
}

export default ScoreBoard;
