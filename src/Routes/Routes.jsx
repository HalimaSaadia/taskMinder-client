import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Root from "../Layout/Root";
import Register from "../pages/Register/Register";
import TaskManager from "../pages/TaskManager/TaskManager/TaskManager";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root />,
        children: [
            {
                path:"/login",
                element: <Login />
            },
            {
                path:"/register",
                element: <Register />
            },{
                path:"/task-manager",
                element: <TaskManager />
            }
        ]
    }
])
export default router

