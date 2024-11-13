import { useState } from "react";
import ScoreAndTurnContext from "./ScoreAndTurnContext.jsx";

export default function ScoreAndTurnProvider({ children }) {
  const [bluePlayerScore, setBluePlayerScore] = useState(0);
  const [redPlayerScore, setRedPlayerScore] = useState(0);
  const [bluePlayerTurn, setBluePlayerTurn] = useState(true);

  const scoreAndTurnContextValues = {
    bluePlayerScore,
    setBluePlayerScore,
    redPlayerScore,
    setRedPlayerScore,
    bluePlayerTurn,
    setBluePlayerTurn,
  };

  return (
    <ScoreAndTurnContext.Provider value={scoreAndTurnContextValues}>
      {children}
    </ScoreAndTurnContext.Provider>
  );
}
