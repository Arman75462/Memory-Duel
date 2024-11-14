import "./styles/GameEndedBackground.css";
import { useContext } from "react";
import ScoreAndTurnContext from "../contexts/ScoreAndTurnContext.jsx";

export default function GameEndedBackground() {
  const { bluePlayerTurn } = useContext(ScoreAndTurnContext);

  return (
    <div
      className="GameEndedBackground"
      style={{
        backgroundColor: bluePlayerTurn
          ? "var(--bluePlayerColor)"
          : "var(--redPlayerColor",
      }}
    >
      {bluePlayerTurn ? "BLUE WIN" : "RED WIN"}
    </div>
  );
}
