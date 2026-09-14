import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "../privateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {
                index: true,
                element: <Homepage/>,
            },
            {
                path: '/about-us',
                element: <AboutUs/>,
            },
            {
                path: '/profile',
                element: (<PrivateRoute><Profile/></PrivateRoute>),
            },
            {
                path: '/login',
                element: <Login/>,
            },
           
            {
                path: '/signup',
                element: <Signup/>,
            }
        ]
    }
])