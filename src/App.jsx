import "./App.css";
import { useContext } from "react";
import TableOfCards from "./components/TableOfCards.jsx";
import ScoreBoard from "./components/ScoreBoard.jsx";

import ScoreAndTurnContext from "./contexts/ScoreAndTurnContext.jsx";

function App() {
  const { bluePlayerTurn } = useContext(ScoreAndTurnContext);

  return (
    <div
      className="App"
      style={{
        backgroundColor: bluePlayerTurn
          ? "var(--bluePlayerColor)"
          : "var(--redPlayerColor",
      }}
    >
      <ScoreBoard />
      <TableOfCards />
    </div>
  );
}

export default App;
