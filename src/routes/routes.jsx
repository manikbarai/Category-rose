import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";
import PrivateRoute from "../privateRoute/PrivateRoute";
import LoginPage from "../pages/LoinPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";

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
                element: <LoginPage/>,
            },
            {
                path: '/signup',
                element: <SignupPage/>,
            },
        ]
    }
])