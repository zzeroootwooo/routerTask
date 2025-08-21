import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-dom";

const router = createBrowserRouter([]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
