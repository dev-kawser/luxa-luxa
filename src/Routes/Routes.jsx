import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import DetailsCard from "../Components/Card/DetailsCard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Regiser/Register";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";


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
                element: <ProtectedRoutes>
                    <DetailsCard></DetailsCard>
                </ProtectedRoutes>,
                loader: () => fetch('/data.json'),
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
]);

export default router;