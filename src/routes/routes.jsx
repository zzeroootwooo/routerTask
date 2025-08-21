import App from "../App";
import Slider from "../components/Slider/Slider";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import SortArray from "../components/SortArray/SortArray";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/slider",
        element: <Slider />,
    },
    {
        path: "/theme-switching",
        element: <ThemeSwitcher />,
    },
    {
        path: "/sorting",
        element: <SortArray />,
    },
]);

export default router;
