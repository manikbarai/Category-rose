import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";

import PrivateRoute from "../privateRoute/PrivateRoute";
import LoginPage from "../pages/LoinPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import Profile from "../pages/ProfilePage/Profile";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/FogetPasswordPage";
import Services from "../pages/Services/Services";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/service/:serviceId",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
      },
    ],
  },
]);
