import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/routes";
import ThemeProvider from "./components/ThemeSwitcher/ThemeProvider";

createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>
);
