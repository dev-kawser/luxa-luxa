/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/ContextProvider";

const ProtectedRoutes = ({children}) => {
    const loc = useLocation()
    const {user} = useContext(AuthContext)
    if(user){
        return children
    }
    return <Navigate to="/login" state={loc.pathname}></Navigate>
};

export default ProtectedRoutes;