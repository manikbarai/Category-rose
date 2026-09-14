import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { RiseLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext)

    const location = useLocation()
    console.log(location);


    if(loading){
        return (
        <div className=' h-[97vh] flex items-center justify-center'>
            <RiseLoader color="#f43f5e" size={30} margin={4} /></div>
    )
    }

    if(!user){
        return <Navigate to="/login" state={location.pathname} />
    }

    return children;
};

export default PrivateRoute;