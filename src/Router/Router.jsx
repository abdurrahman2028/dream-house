import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Error from "../Page/Error/Error";
import Home from "../Page/Home/Home";
import Featured from "../Page/Featured/Featured";
import Service from "../Page/Service/Service";
import Explore from "../Page/Explore/Explore";
import Contact from "../Page/Contact/Contact";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Profile from "../Page/Profile/Profile";
import Details from "../Page/Featured/Details/Details";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <Error></Error>,
      caseSensitive: false,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/featured",
          element: <Featured></Featured>,
        },
        {
            path: "/service",
            element: <Service></Service>,
        },
        {
            path: "/explore",
            element: <Explore></Explore>,
        },
        {
            path: "/contact",
            element: <Contact></Contact>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/profile",
          element: <Profile></Profile>,
        },
        {
          path: "/details",
          element: <Details></Details>,
        },
      ]
    }
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
