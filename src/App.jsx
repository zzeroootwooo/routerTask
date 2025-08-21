import { Link } from "react-router-dom";

export default function App() {
    return (
        <>
            <h1>Main page</h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 20,
                }}
            >
                <Link to="/sorting">GO to the Array Sorting</Link>
                <Link to="/slider">GO to the Slider</Link>
                <Link to="/theme-switching">GO to the Theme switching</Link>
            </div>
        </>
    );
}
