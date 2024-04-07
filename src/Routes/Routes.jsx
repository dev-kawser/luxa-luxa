import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import DetailsCard from "../Components/Card/DetailsCard";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/data.json'),
            },

            {
                path: "/card/:id",
                element: <DetailsCard></DetailsCard>,
                loader: () => fetch('/data.json'),
            },
        ]
    },
]);

export default router;