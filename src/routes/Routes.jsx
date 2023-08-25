import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home/Home";
import Property from "../pages/property/Property/Property";
import Error from "../components/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/property",
        element: <Property />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
