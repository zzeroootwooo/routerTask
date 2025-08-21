import { React, useContext } from "react";
import { Link } from "react-router";
import ThemeContext from "./ThemeContext";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                background: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "#fff",
            }}
        >
            <button onClick={toggleTheme}>Switch Theme</button>
            <Link to="/">Go Back to Main Page</Link>
        </div>
    );
};

export default ThemeSwitcher;
