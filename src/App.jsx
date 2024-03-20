import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Dashboard } from "./screens/Dashboard";
import { Credit } from "./screens/Credit";
import { Hero } from "./screens/Hero";
import { Signup } from "./screens/Signup";
import { SamplePromt } from "./screens/SamplePromt";
import { SignupFilled } from "./screens/SignupFilled";
import { LoginPassword } from "./screens/LoginPassword";
import { DashboardScreen } from "./screens/DashboardScreen";
import { DashboardImage } from "./screens/DashboardImage";
import { DivWrapper } from "./screens/DivWrapper";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Hero />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/credit",
    element: <Credit />,
  },
  {
    path: "/hero",
    element: <Hero />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/sample-prompt",
    element: <SamplePromt />,
  },
  {
    path: "/signupu62filled",
    element: <SignupFilled />,
  },
  {
    path: "/loginu62password",
    element: <LoginPassword />,
  },
  {
    path: "/dashboard-1",
    element: <DashboardScreen />,
  },
  {
    path: "/home",
    element: <DashboardImage />,
  },
  {
    path: "/dashboard-2",
    element: <DivWrapper />,
  },
]);

export const App = () => {
  return  <GoogleOAuthProvider clientId={'473737982536-03uags46k6uot7jo4ok6eef5ip6ukce1.apps.googleusercontent.com'}>
  <RouterProvider router={router} />;
  </GoogleOAuthProvider>
};
