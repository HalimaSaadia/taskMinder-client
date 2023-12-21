import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <span className="loading loading-spinner text-info"></span>
    }
    if(!user){
        return <Navigate to="/login" state={location.pathname} />
    }
    return children
};

export default PrivateRoute;