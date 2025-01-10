import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { IsAuthenticate } from './IsAuthenticate';



const ProtectedRoute = () => {
    const token = IsAuthenticate()
    return token ? <Outlet/> : <Navigate to='/'/>
};

export default ProtectedRoute;