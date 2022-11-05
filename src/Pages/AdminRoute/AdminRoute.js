import React from 'react';
import { Navigate } from 'react-router-dom';


const AdminRoute = ({children}) => {
    let roleString=localStorage.getItem('role');
    const role=JSON.parse(roleString);
    if(role==="admin"){
        return children;
    }

        return <Navigate to='/' ></Navigate>
    
};

export default AdminRoute;