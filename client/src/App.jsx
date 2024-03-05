import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import VerifyEmail from "./pages/verifyEmail";
import { AuthProvider, useAuth } from "./context/authContext";
import { useEffect } from "react";
import { Toaster } from "sonner";

const Layout = () => {
  const { isAuthenticated, checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [isAuthenticated]);

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "users/:id/verify/:token",
        element: <VerifyEmail />,
      },
      // {
      //   path: "chathome",
      //   element: <ChatHome />,
      // },
      // {
      //   path: "profile",
      //   element: <Profile />,
      // },
    ],
  },
]);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster />
    </>
  );
}

export default App;
