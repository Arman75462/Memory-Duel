import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/global.css";
import App from "./App.jsx";
import ScoreAndTurnProvider from "./contexts/ScoreAndTurnProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScoreAndTurnProvider>
      <App />
    </ScoreAndTurnProvider>
  </StrictMode>
);
