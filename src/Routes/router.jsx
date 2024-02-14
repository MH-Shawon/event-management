import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import Features from "../Components/Features";
import Social from "../Components/Social";
import Games from "../Components/Games/Games";
import Accessories from "../Components/Home/Accessories/Accessories";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import Details from "../Components/Games/Details/Details";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/games",
        element: <Games />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/elements",
        element: <Accessories />,
      },
      {
        path: "/social",
        element: <Social />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <Register />,
      },
      {
        path:'/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        // loader:({params})=>fetch(`/games.json/${params.id}`)
      }
    ],
  },
]);

export default router;
