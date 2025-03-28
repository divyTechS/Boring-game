import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.tsx'
import Game from "./Game";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <Game />
  </StrictMode>
);
