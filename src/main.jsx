/**
 * main.jsx
 * ---------------------------------------
 * Application entry point.
 * - Imports global styles (index.css)
 * - Renders the <App /> component inside #root
 * - Wraps in React.StrictMode for highlighting potential issues
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/**
 * Create a root and render the App component
 * React 18+ uses createRoot instead of ReactDOM.render
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
