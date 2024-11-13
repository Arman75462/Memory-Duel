import "./App.css";

import TableOfCards from "./components/TableOfCards.jsx";
import ScoreBoard from "./components/ScoreBoard.jsx";
import ScoreAndTurnProvider from "./contexts/ScoreAndTurnProvider.jsx";

function App() {
  return (
    <div className="App">
      <ScoreAndTurnProvider>
        <ScoreBoard />
        <TableOfCards />
      </ScoreAndTurnProvider>
    </div>
  );
}

export default App;
