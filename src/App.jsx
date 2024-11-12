import "./App.css";
import { useState } from "react";
import TableOfCards from "./components/TableOfCards.jsx";
import ScoreBoard from "./components/ScoreBoard.jsx";

function App() {
  const [bluePlayerScore, setBluePlayerScore] = useState(0);
  const [redPlayerScore, setRedPlayerScore] = useState(0);

  return (
    <div className="App">
      <ScoreBoard />
      <TableOfCards />
    </div>
  );
}

export default App;
