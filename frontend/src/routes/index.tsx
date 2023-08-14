import { createBrowserRouter } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import MainLayout from "layouts/MainLayout";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import DashboardPage from "pages/DashboardPage";

import {
  PATH_HOME,
  PATH_DASHBOARD,
  PATH_LOGIN,
  PATH_REGISTER,
  PATH_AUTH,
} from "./paths";
import AuthGuard from "guards/AuthGuard";
import GuestGuard from "guards/GuestGuard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: PATH_HOME,
        element: <LandingPage />,
      },
      {
        path: PATH_DASHBOARD,
        element: <AuthGuard />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
        ],
      },
      {
        path: PATH_AUTH,
        element: <GuestGuard />,
        children: [
          {
            path: PATH_LOGIN,
            element: <LoginPage />,
          },
          {
            path: PATH_REGISTER,
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
