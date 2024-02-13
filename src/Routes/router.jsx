import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import Features from "../Components/Features";
import Social from "../Components/Social";
import Games from "../Components/Games/Games";
import Accessories from "../Components/Home/Accessories/Accessories";

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
    ],
  },
]);

export default router;
