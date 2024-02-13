import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import Features from "../Components/Features";
import Elements from "../Components/Elements";
import Social from "../Components/Social";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
        {
            path: "/features",
            element: <Features />
        },
        {
            path: "/elements",
            element: <Elements />
        },
        {
            path: "/social",
            element: <Social />
        },
    ],
  },
]);

export default router;
