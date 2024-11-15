import "./styles/GameEndedBackground.css";
import { useContext, useEffect, useState } from "react";
import ScoreAndTurnContext from "../contexts/ScoreAndTurnContext.jsx";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function GameEndedBackground() {
  const { bluePlayerTurn } = useContext(ScoreAndTurnContext);
  // Get the width and height of the window for proper confetti rendering
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Trigger confetti animation when the component is mounted
    setShowConfetti(true);
  }, []);

  return (
    <div
      className="GameEndedBackground"
      style={{
        backgroundColor: bluePlayerTurn
          ? "var(--bluePlayerColor)"
          : "var(--redPlayerColor)",
      }}
    >
      {/* Display confetti only when showConfetti is true */}
      {showConfetti && (
        <Confetti
          width={width} // Confetti animation spans the full width of the window
          height={height} // Confetti animation spans the full height of the window
          numberOfPieces={300} // Controls how many confetti pieces are shown
          gravity={0.5} // Controls the falling speed of confetti (balanced speed)
          wind={0.01} // Adds a slight horizontal drift for realism
        />
      )}

      {bluePlayerTurn ? "BLUE WIN" : "RED WIN"}
    </div>
  );
}
