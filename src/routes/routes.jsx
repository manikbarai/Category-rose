import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";

import Login from "../pages/Login";
import Signup from "../pages/Signup";


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
                element: <Profile/>,
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