import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Root from "../Layout/Root";
import Register from "../pages/Register/Register";
import TaskManager from "../pages/TaskManager/TaskManager/TaskManager";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root />,
        children: [
            {
                path:"/",
                element:<Home />
            },
            
            {
                path:"/login",
                element: <Login />
            },
            {
                path:"/register",
                element: <Register />
            }
        ]
    },
    {
        path:"/task-manager",
        element:<PrivateRoute><TaskManager /></PrivateRoute>
    }
])
export default router

