import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';



const PrivateRoute = ({ children }) => {
    const userInfoString = localStorage.getItem('user');
    const location = useLocation();

    if (!userInfoString) {
        return <Navigate to='/signin' state={{ from: location.pathname }} replace></Navigate>
    }
    return children

};

export default PrivateRoute;