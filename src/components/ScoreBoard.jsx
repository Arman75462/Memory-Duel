import "./styles/ScoreBoard.css";
import { useContext } from "react";
import ScoreAndTurnContext from "../contexts/ScoreAndTurnContext.jsx";

function ScoreBoard() {
  const { bluePlayerScore, redPlayerScore } = useContext(ScoreAndTurnContext);

  return (
    <div className="ScoreBoard">
      <div className="ScoreBoard__blue-player-score">{bluePlayerScore}</div>
      <div>vs</div>
      <div className="ScoreBoard__red-player-score">{redPlayerScore}</div>
    </div>
  );
}

export default ScoreBoard;
