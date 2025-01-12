import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import "./scss/index.scss";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename="/goblin-client">
      <App />
    </BrowserRouter>
  </StrictMode>
);
